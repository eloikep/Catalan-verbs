// =============================================================================
// LOGIQUE MOTEUR : VOCABULAIRE
// =============================================================================

/**
 * Initialise une session de vocabulaire.
 * @param {String} category - 'fruits', 'prepo', 'city' ou 'all'
 */
function startVocab(category) {
    state.mode = 'vocab';
    state.screen = 'vocab_game';
    state.score = 0;
    state.total = 0;
    state.qCount = 0;
    state.vocabStats = {};
    state.sessionHistory = []
    state.vocabPool = (category === 'all') 
        ? VOCAB_DB 
        : VOCAB_DB.filter(i => i.cat === category);
        
    nextVocabQuestion();
}

/**
 * Prépare la question suivante de vocabulaire.
 */
function nextVocabQuestion() {
    const item = state.vocabPool[Math.floor(Math.random() * state.vocabPool.length)];
    const isPlural = item.type === 'invariable' ? false : Math.random() > 0.5;
    
    state.vocabItem = item;
    state.isPlural = isPlural;
    state.opts = genVocabOptions(item, isPlural, state.vocabPool);
    state.sel = null;
    state.show = false;
    
    render();
}

/**
 * Gère la réponse de l'utilisateur et met à jour les statistiques.
 * @param {String} ans - La réponse sélectionnée par l'utilisateur.
 */
function handleVocabAns(ans) {
    state.sel = ans;
    state.show = true;

    const correct = getArticledWord(state.vocabItem, state.isPlural);
    const isCorrect = ans === correct;
    
    state.total++;
    if (isCorrect) state.score++;
    
    if (!state.vocabStats[state.vocabItem.ca]) {
        state.vocabStats[state.vocabItem.ca] = { ok: 0, total: 0 };
    }
    state.vocabStats[state.vocabItem.ca].total++;
    if (isCorrect) state.vocabStats[state.vocabItem.ca].ok++;
    
    state.sessionHistory.push({
        item: state.vocabItem,
        isPlural: state.isPlural,
        source: state.vocabItem[state.isPlural ? `${state.lang}_p`: state.lang],
        userAns: ans,
        correctAns: correct,
        isCorrect: isCorrect
    }); 
    state.qCount++;
    render();
}


/**
 * Relance une session uniquement avec les erreurs de la session précédente.
 */
function retryVocabErrors() {
    // On récupère les objets d'erreur complets (item + isPlural)
    const errors = state.sessionHistory.filter(h => !h.isCorrect);
    
    if (errors.length === 0) return;

    // On transforme ces erreurs en un nouveau pool temporaire
    // On stocke le couple [item, isPlural] pour être précis
    state.vocabPool = errors.map(e => e.item);
    
    // Pour que le retry soit fidèle, on peut tricher un peu sur le prochain tirage
    // ou simplement laisser le hasard faire sur ce pool réduit.
    state.sessionHistory = []; 
    state.qCount = 0; // On reset le compteur de la barre de progression
    state.screen = 'vocab_game';
    
    nextVocabQuestion();
}


// =============================================================================
// FONCTIONS ANNEXES POUR LE VOCAB
// =============================================================================


/**
 * Transforme un objet de la DB en chaîne articulée (ex: "l'hospital")
 * @param {Object} item - L'entrée de VOCAB_DB
 * @param {Boolean} isPlural - Si on veut la forme plurielle
 * @returns {String}
 */
function getArticledWord(item, isPlural) {
    // Cas des invariables (prépositions, etc.)
    if (item.type === 'invariable') return item.ca;

    const word = isPlural ? item.plural : item.ca;
    
    // --- Logique des Pluriels ---
    if (isPlural) {
        return (item.gender === 'm' ? 'els ' : 'les ') + word;
    }

    // --- Logique du Singulier ---
    if (item.gender === 'f') {
        // Optionnel : exception pour i/u atone (ex: la universitat)
        // Pour l'instant, règle générale :
        return (item.vowel ? "l'" : "la ") + word;
    } else {
        // Masculin
        return (item.vowel ? "l'" : "el ") + word;
    }
}

/**
 * Inverses l'article défini pour créer un piège de genre.
 * @param {Object} item - L'objet mot de VOCAB_DB.
 * @param {Boolean} isPlural - Si la question porte sur le pluriel.
 * @returns {String} Le mot avec le mauvais article (ex: "el poma" au lieu de "la poma").
 */

/**
 * Génère un article erroné en évitant les doublons d'élision.
 */
function getWrongGenderArticled(item, isPlural) {
    if (isPlural) {
        return (item.gender === 'm' ? 'les ' : 'els ') + item.plural;
    }
    
    // Au singulier, si c'est une voyelle, l'inversion de genre donnerait le même L'
    // On va donc piéger sur l'ABSENCE d'élision (ex: "el ajuntament")
    if (item.vowel) {
        return (item.gender === 'm' ? 'el ' : 'la ') + item.ca;
    }
    
    // Cas standard (consonne)
    return (item.gender === 'm' ? 'la ' : 'el ') + item.ca;
}

/**
 * Sabote un mot de manière crédible.
 * Ne modifie qu'une seule règle à la fois pour rester réaliste.
 */
function sabotage(word) {
    const rules = [
        { reg: /v/g, rep: 'b' }, { reg: /b/g, rep: 'v' },
        { reg: /ss/g, rep: 's' }, { reg: /s(?=[aeiou])/g, rep: 'ss' },
        { reg: /ç/g, rep: 'c' }, { reg: /c(?=[ei])/g, rep: 'ss' },
        { reg: /ny/g, rep: 'ñ' }, { reg: /l·l/g, rep: 'll' },
        { reg: /j/g, rep: 'g' }, { reg: /g(?=[ei])/g, rep: 'j' }
    ];

    const validRules = rules.filter(r => r.reg.test(word));
    if (validRules.length > 0) {
        const r = validRules[Math.floor(Math.random() * validRules.length)];
        return word.replace(r.reg, r.rep);
    }
    
    // Si aucune règle, on touche à la fin du mot (pluriel ou accent)
    if (word.endsWith('s')) return word.slice(0, -1);
    return word + 's'; 
}



/**
 * Génère 4 options (1 correcte, 3 pièges) pour le vocabulaire.
 * Gère les types 'invariable' en proposant uniquement des pièges lexicaux corrects.
 * * @param {Object} item - Le mot cible de VOCAB_DB.
 * @param {Boolean} isPlural - Si la question porte sur le pluriel.
 * @param {Array} pool - Liste de tous les mots de la catégorie choisie.
 * @returns {Array} Tableau de 4 chaînes de caractères mélangées.
 */
function genVocabOptions(item, isPlural, pool) {
    const correct = getArticledWord(item, isPlural);
    const traps = new Set(); // Set évite automatiquement les doublons

    // 1. Priorité aux pièges manuels (TRAPS_VOCAB_DB)
    const manualList = TRAPS_VOCAB_DB[item.ca] ? TRAPS_VOCAB_DB[item.ca][isPlural ? 'p' : 's'] : [];
    
    // 2. Construction de la liste des pièges possibles
    let possibleTraps = [];

    if (item.type === 'invariable') {
        // Uniquement lexical pour les prépositions
        possibleTraps = pool.filter(i => i.ca !== item.ca).map(i => i.ca);
    } else {
        // Mélange de Grammaire et de Sabotage
        const wrongArt = getWrongGenderArticled(item, isPlural);
        const saboWord = sabotage(isPlural ? item.plural : item.ca);
        const art = getLeadingArticle(item, isPlural);
        
        possibleTraps.push(wrongArt);
        possibleTraps.push(art + saboWord);
        // Ajout d'un mot aléatoire de la même catégorie
        const other = pool.filter(i => i.ca !== item.ca)[0];
        if (other) possibleTraps.push(getArticledWord(other, isPlural));
    }

    // On fusionne les manuels et les automatiques
    const finalPool = shuffle([...new Set([...manualList.map(t => getLeadingArticle(item, isPlural) + t), ...possibleTraps])]);

    // On en prend 3 uniques qui ne sont pas la réponse correcte
    for (let t of finalPool) {
        if (t !== correct && traps.size < 3) traps.add(t);
    }

    // Sécurité : si on n'a pas assez de pièges, on remplit avec des mots au hasard
    while (traps.size < 3) {
        traps.add("err. " + Math.random().toString(36).substring(7));
    }

    return shuffle([correct, ...Array.from(traps)]);
}

/**
 * Petite fonction utilitaire pour extraire l'article correct d'un mot (ex: "l'" ou "la ").
 * Utilisé pour préfixer les pièges manuels ou sabotés.
 */
function getLeadingArticle(item, isPlural) {
    const full = getArticledWord(item, isPlural);
    // On cherche l'espace ou l'apostrophe pour couper
    const spaceIdx = full.indexOf(' ');
    const apoIdx = full.indexOf("'");
    
    if (apoIdx !== -1) return full.substring(0, apoIdx + 1);
    if (spaceIdx !== -1) return full.substring(0, spaceIdx + 1);
    return "";
}


// =============================================================================
// RENDU (VIEWS) : VOCABULAIRE
// =============================================================================


/**
 * Génère le menu de sélection des thématiques de vocabulaire.
 */
function renderVocabMenu() {
    const t = TRADS_DB[state.lang].vocab;
    const categories = [...new Set(VOCAB_DB.map(i => i.cat))];
    const catIcons = { 
        fruits: "🍎", 
        prepo: "📍", 
        city: "🏛️", 
        body: "💪", 
        house: "🏠", 
        animals: "🐶", 
        food: "🍕", 
        family: "👨‍👩‍👧", 
        jobs: "👷", 
        transp: "🚀" 
    };

    return `
    <div class="max-w-md mx-auto mt-6 px-2">
        <div class="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
            <h1 class="text-2xl font-black text-indigo-900 mb-1 text-center">${t.title}</h1>
            <p class="text-gray-400 text-center mb-6 text-[9px] uppercase tracking-widest font-bold">${t.chooseCat}</p>

            <div class="grid grid-cols-2 gap-3 mb-6">
                ${categories.map(cat => `
                    <button onclick="startVocab('${cat}')" 
                        class="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-2xl border-2 border-transparent hover:border-indigo-500 transition-all active:scale-95">
                        <span class="text-2xl mb-2">${catIcons[cat] || "🔖"}</span>
                        <span class="text-xs font-bold text-indigo-900 text-center leading-tight">
                            ${t.categories[cat] || cat}
                        </span>
                    </button>`).join('')}
                
                <button onclick="startVocab('all')" 
                    class="col-span-2 flex items-center justify-center p-3 bg-gray-900 rounded-xl hover:bg-black transition-all">
                    <span class="mr-2">🎲</span>
                    <span class="text-xs font-bold text-white">${t.all}</span>
                </button>
            </div>

            <button onclick="state.screen='menu';render()" class="w-full text-gray-400 py-2 text-xs font-bold hover:text-gray-600">
                ${TRADS_DB[state.lang].about.back.toUpperCase()}
            </button>
        </div>
    </div>`;
}


/**
 * Interface de jeu Vocabulaire.
 * Inclut une barre de progression et un bouton de fin de série intelligent.
 */
function renderVocabGame() {
    if (!state.vocabItem) return '';
    
    const tGame = TRADS_DB[state.lang].game;
    const tVocab = TRADS_DB[state.lang].vocab;
    const correct = getArticledWord(state.vocabItem, state.isPlural);

    // 1. Calcul de la progression (0% à 100% sur un bloc de 10)
    // On utilise qCount % 10, mais si qCount est 10 on veut afficher 100%
    let currentStep = state.qCount % 10;
    if (currentStep === 0 && state.qCount > 0 && state.show) currentStep = 10;
    const progress = currentStep * 10;

    // 2. Logique de cible naturelle (S ou P)
    const suffix = (state.isPlural && state.vocabItem.type !== 'invariable') ? '_p' : '';
    const langKey = state.lang + suffix;
    const targetText = state.vocabItem[langKey] || state.vocabItem[state.lang];

    return `
    <div class="max-w-md mx-auto px-2">
        <div class="w-full bg-gray-200 h-1.5 mb-6 rounded-full overflow-hidden shadow-inner">
            <div class="bg-indigo-600 h-full transition-all duration-700 ease-out" style="width: ${progress}%"></div>
        </div>

        <div class="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
            <div class="flex justify-between items-center mb-6">
                <button onclick="state.screen='vocab_menu';render()" class="text-gray-400 text-xs font-bold hover:text-indigo-600 transition-colors uppercase tracking-widest">
                    ← ${tGame.back}
                </button>
                <span class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black tracking-tighter">
                    SCORE: ${state.score} / ${state.total}
                </span>
            </div>

            <div class="text-center mb-8">
                <p class="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">${tVocab.instruction}</p>
                <h2 class="text-3xl font-black text-indigo-900 leading-tight">${targetText}</h2>
                <div class="h-1 w-8 bg-indigo-600 mx-auto rounded-full mt-4"></div>
            </div>

            <div class="space-y-2">
                ${state.opts.map(o => {
                    const isSelected = state.sel === o;
                    const isRight = o === correct;
                    let btnStyle = "bg-gray-50 text-indigo-900 border-2 border-transparent hover:bg-indigo-50";
                    
                    if (state.show) {
                        if (isRight) btnStyle = "bg-green-500 text-white border-green-500 shadow-lg shadow-green-100";
                        else if (isSelected) btnStyle = "bg-red-500 text-white border-red-500 shadow-lg shadow-red-100";
                        else btnStyle = "bg-white text-gray-200 border-gray-100 opacity-50";
                    }

                    return `
                    <button onclick="handleVocabAns('${o.replace(/'/g, "\\'")}')" ${state.show ? 'disabled' : ''} 
                        class="w-full p-4 rounded-2xl text-md font-bold transition-all duration-200 ${btnStyle}">
                        ${o}
                    </button>`;
                }).join('')}
            </div>

            ${state.show ? `
                <div class="mt-6">
                    ${(state.qCount % 10 === 0 && state.qCount > 0) ? `
                        <button onclick="state.screen='vocab_stats';render()" 
                            class="w-full bg-green-600 text-white py-4 rounded-2xl font-black text-sm hover:bg-green-700 shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2">
                            📊 VEURE EL RESUM
                        </button>
                    ` : `
                        <button onclick="nextVocabQuestion()" 
                            class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-sm hover:bg-indigo-700 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                            ${tGame.next.toUpperCase()} →
                        </button>
                    `}
                </div>
            ` : ''}
        </div>
    </div>`;
}

/**
 * Affiche le bilan des 10 dernières questions de vocabulaire.
 */
function renderVocabStats() {
    // Sécurité : on vérifie que TRADS_DB et la langue existent
    const lang = state.lang || 'fr';
    const t = TRADS_DB[lang].stats;
    
    const allErrors = state.sessionHistory.filter(h => !h.isCorrect);
    const latestErrors = allErrors.slice(-10);

    return `
    <div class="max-w-md mx-auto mt-6 px-2">
        <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div class="text-center mb-8">
                <h1 class="text-2xl font-black text-indigo-900 mb-2">${t.title || 'Bilan'}</h1>
                <div class="inline-block bg-indigo-600 text-white px-6 py-2 rounded-2xl text-xl font-black shadow-lg">
                    ${state.score} / ${state.total}
                </div>
            </div>

            <div class="mb-6 p-4 rounded-2xl ${latestErrors.length === 0 ? 'bg-green-50' : 'bg-red-50'}">
                <p class="text-sm font-bold text-center ${latestErrors.length === 0 ? 'text-green-700' : 'text-red-700'}">
                    ${latestErrors.length === 0 ? (t.congratsVocab || 'Parfait !') : (t.vocabErrors || 'Erreurs :')}
                </p>
            </div>

            ${latestErrors.length > 0 ? `
                <div class="space-y-2 mb-8">
                    ${latestErrors.map(err => `
                        <div class="p-3 bg-white rounded-xl border border-red-100 shadow-sm text-[11px] leading-relaxed">
                            <div class="text-gray-400 uppercase font-black text-[9px] mb-1">${err.source}</div>
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-red-500 line-through">${err.userAns}</span>
                                <span class="text-gray-300">➔</span>
                                <span class="font-bold text-green-600 underline">${err.correctAns}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            <div class="space-y-3">
                <button onclick="state.screen='vocab_game'; nextVocabQuestion()" 
                    class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-sm hover:bg-indigo-700 shadow-lg active:scale-95 transition-all">
                    🚀 CONTINUER
                </button>

                ${latestErrors.length > 0 ? `
                    <button onclick="retryVocabErrors()" class="w-full bg-white text-indigo-600 border-2 border-indigo-600 py-3 rounded-2xl font-black text-sm hover:bg-indigo-50">
                        🔄 ${t.retryVocab || 'Réessayer les erreurs'}
                    </button>
                ` : ''}
                
                <button onclick="state.screen='vocab_menu';render()" class="w-full text-gray-400 py-2 text-xs font-bold uppercase text-center">
                    ${t.menu || 'Menu'}
                </button>
            </div>
        </div>
    </div>`;
}
