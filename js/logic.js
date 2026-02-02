// ==================== ÉTAT GLOBAL ====================
const APP_CONFIG = {
    version: "2.0.0",
    author: "Eloïk Ep"
};


let state = {
    // --- Navigation ---
    screen: 'language', 
    lang: null, 
    mode: 'verbs', // Nouvelle clé : 'verbs' ou 'vocab'
    
    // --- Logique Exercices (Verbes & Vocab) ---
    stage: 'translation', 
    verb: null, // Utilisé pour les verbes
    vocabItem: null, // Nouveau : l'objet mot actuel de VOCAB_DB
    vocabPool: null, // Nouveau : la liste des mots filtrés par catégorie
    
    // --- Données Question (Agnostique) ---
    pron: null, 
    tense: null,
    opts: [], 
    sel: null, 
    show: false,
    
    // --- Scores & Stats ---
    score: 0, 
    total: 0, 
    qCount: 0,
    tenses: { present: true, subjunctive: false, future: false, imperfect: false, gerund: false, periphrastic: false },
    verbStats: {},
    vocabStats: {}, // Nouveau : pour stocker les erreurs par mot
    sessionHistory: [],
    // --- Pool de révision ---
    pool: null 
};

// ==================== FONCTIONS PRINCIPALES ====================


function selectLanguage(l){state.lang=l;state.screen='menu';render();}
function goToMenu() {
    state.pool = null; // Important pour ne pas rester bloqué en mode révision
    state.screen = 'menu';
    render();
}
function goToLanguage() {
    // On ne réinitialise que ce qui concerne l'affichage actuel
    state.screen = 'language';
    state.lang = null;
    state.show = false;
    state.sel = null;
    state.stage = 'translation';
    
    // On NE touche PAS à : state.score, state.total, state.verbStats, state.sessionHistory
    render();
}

function toggleTense(t){state.tenses[t]=!state.tenses[t];render();}

function startVerbs(){
    const has=Object.values(state.tenses).some(x=>x);
    if(!has){alert(state.lang==='fr'?'Sélectionnez au moins un temps':'Seleccione al menos un tiempo');return;}
    state.screen='verbs';state.score=0;state.total=0;state.qCount=0;state.verbStats={};
    startQ();
}

function initStats(ca) {
    if (!state.verbStats[ca]) {
        state.verbStats[ca] = { 
            translation: { ok: 0, total: 0 } 
        };
        Object.keys(state.tenses).forEach(t => {
            if (t === 'gerund') {
                // Pour le gérondif : un seul objet, pas un tableau
                state.verbStats[ca][t] = { ok: 0, total: 0 };
            } else {
                state.verbStats[ca][t] = Array.from({ length: 6 }, () => ({ ok: 0, total: 0 }));
            }
        });
    }
}

function genTrOpts(v){
    const d=VERBS_DB.filter(x=>x.ca!==v.ca).sort(()=>Math.random()-0.5).slice(0,3).map(x=>x.ca);
    return[v.ca,...d].sort(()=>Math.random()-0.5);
}



function genConjOpts(v, idx, tense) {
    // Cas spéciaux
    if (tense === 'gerund') {
        const correct = v.gerund;
        const manualTraps = TRAPS_DB[v.ca]?.gerund || [];
        const options = [correct];
        

	options.push(...shuffle(manualTraps.filter(t => t !== correct && !options.includes(t))));


        // Compléter avec variations automatiques si besoin
        if (options.length < 4) {
            const autoTraps = [
                correct.replace('ant', 'ent'),
                correct.replace('int', 'ient'),
                correct + 'o',
                correct.replace('ent', 'ant')
            ].filter(t => t !== correct && !options.includes(t));
            options.push(...autoTraps);
        }
        
        return shuffle(options.slice(0, 4));
    }
    
    if (tense === 'periphrastic') {
        const correct = v.periphrastic[idx];
        const traps = ['vais', 'vaijo', 'vago', 'vais a'];
        return shuffle([correct, ...traps.slice(0, 3)]);
    }

    // Conjugaisons normales
    const correct = v[tense][idx];
    const options = [correct];
    
    // 1. Pièges manuels (priorité)
    const manualTraps = TRAPS_DB[v.ca]?.[tense]?.[idx] || [];
    manualTraps.forEach(trap => {
        if (trap !== correct && !options.includes(trap)) {
            options.push(trap);
        }
    });
   
    // 2. Autres personnes du même verbe (si besoin)
    if (options.length < 4) {
        const otherPersons = v[tense]
            .filter((form, i) => i !== idx && !options.includes(form));
        shuffle(otherPersons).forEach(form => {
            if (options.length < 4 && !options.includes(form)) {
                options.push(form);
            }
        });
    }
    
    // 3. Formes d'autres verbes similaires (si vraiment besoin)
    if (options.length < 4) {
        const similarVerbs = VERBS_DB.filter(vb => 
            vb.ca !== v.ca && 
            vb[tense] && 
            vb[tense][idx] !== correct &&
            !options.includes(vb[tense][idx])
        );
        shuffle(similarVerbs).forEach(vb => {
            if (options.length < 4 && !options.includes(vb[tense][idx])) {
                options.push(vb[tense][idx]);
            }
        });
    }

    // S'assurer qu'on a exactement 4 options
    return shuffle(options.slice(0, 4));
}

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}



function startQ() {
    const active = Object.keys(state.tenses).filter(k => state.tenses[k]);
    const tense = active[Math.floor(Math.random() * active.length)];
    const pron = PRONOUNS[Math.floor(Math.random() * PRONOUNS.length)];

    // LOGIQUE DE SÉLECTION : Si state.pool existe, on pioche dedans, sinon dans VERBS_DB
    const source = state.pool || VERBS_DB;
    const verb = source[Math.floor(Math.random() * source.length)];

    initStats(verb.ca);
    state.verb = verb; 
    state.pron = pron; 
    state.tense = tense; 
    state.stage = 'translation';
    state.opts = genTrOpts(verb); 
    state.sel = null; 
    state.show = false;
    render();
}

function handleAns(ans) {
    state.sel = ans;
    state.show = true;
    const lang = state.lang;
    const isTr = state.stage === 'translation';
    const isGerund = state.tense === 'gerund';
    
    let correct, label;

    if (isTr) {
        correct = state.verb.ca;
        label = TRADS_DB[lang].stats.translation;
    } else {
        correct = isGerund ? state.verb.gerund : state.verb[state.tense][state.pron.i];
        label = isGerund ? TRADS_DB[lang].tenses.gerund : PRONOUNS[state.pron.i][lang];
    }

    const isCorrect = ans === correct;

    // --- MISE À JOUR DES COMPTEURS (Ton ancienne logique) ---
    if (isTr) {
        state.verbStats[state.verb.ca].translation.total++;
        if (isCorrect) state.verbStats[state.verb.ca].translation.ok++;
    } else {
        const stat = isGerund ? state.verbStats[state.verb.ca][state.tense] : state.verbStats[state.verb.ca][state.tense][state.pron.i];
        stat.total++;
        if (isCorrect) stat.ok++;
    }

    // --- ENREGISTREMENT HISTORIQUE (Pour le nouveau renderStats) ---
    state.sessionHistory.push({
        verbId: state.verb.ca,
        verbCa: state.verb.ca,
        tense: state.tense,
        personName: label,
        userAns: ans,
        correctAns: correct,
        isCorrect: isCorrect
    });

    if (isCorrect) state.score += 0.5;
    if (!isTr) state.qCount++; // On n'incrémente le compteur de 10 qu'après la conjugaison
    
    state.total += 0.5;
    render();
}

function next(){
    if(state.stage === 'translation'){
        // On passe à la conjugaison du même verbe
        state.stage = 'conjugation';
        state.opts = genConjOpts(state.verb, state.pron.i, state.tense);
        state.sel = null;
        state.show = false;
        render();
    } else {
        // On a fini la paire, on vérifie si on doit afficher les stats ou le verbe suivant
        if(state.qCount > 0 && state.qCount % 10 === 0){
            state.screen = 'stats';
            render();
        } else {
            startQ();
        }
    }
}

function retryErrors() {
	const verbsWithErrors = Object.keys(state.verbStats).filter(ca => {
        const s = state.verbStats[ca];
        const hasTrErr = s.translation.total > 0 && s.translation.ok < s.translation.total;
        const hasConjErr = Object.keys(state.tenses).some(t => 
            s[t] && s[t].some(st => st.total > 0 && st.ok < st.total)
        );
        return hasTrErr || hasConjErr;
    });

    if (verbsWithErrors.length === 0) return;

    // On prépare le pool d'erreurs
    state.pool = VERBS_DB.filter(v => verbsWithErrors.includes(v.ca));
    
    // On réinitialise seulement le compteur de la série, pas le score global
    state.qCount = 0;
    state.screen = 'verbs';
    startQ();
}

function continueStats() {
    state.pool = null; // On repasse en mode normal (pioche dans tout VERBS_DB)
    state.qCount = 0;
    state.screen = 'verbs';
    startQ();
}


function getStats() {
    const verbCount = VERBS_DB.length;
    
    // On compte les temps dans le premier verbe pour savoir combien on en traite
    // On exclut les clés qui ne sont pas des listes de conjugaison (fr, es, ca, gerund)
    const tensesKeys = ['present', 'subjunctive', 'future', 'imperfect', 'periphrastic'];
    const tenseCount = tensesKeys.length;

    // Nombre total de formes traitées (Verbes * Temps * 6 personnes + Gérondif)
    const totalForms = verbCount * (tenseCount * 6 + 1);

    return {
        verbs: verbCount,
        tenses: tenseCount,
        forms: totalForms,
        vocab: 0 // À remplir quand tu créeras ta BDD vocabulaire
    };
}


// ==================== RENDU ====================
function renderLang() {
    return `
    <div class="max-w-md mx-auto mt-10 px-4 font-sans">
        <div class="flex justify-between items-center mb-6 text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
            <span>© App developed by ${APP_CONFIG.author}</span>
            <span class="bg-gray-100 px-2 py-1 rounded shadow-sm">v${APP_CONFIG.version}</span>
        </div>

        <div class="bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-100">
            <div class="mb-8">
                <h1 class="text-6xl font-black text-indigo-900 tracking-tighter mb-2">Català</h1>
                <p class="text-[14px] font-bold uppercase tracking-widest text-grey-500 mb-4">
                    Benvinguts a l'aprenentatge
                </p>
                
                <div class="bg-indigo-50 py-3 px-4 rounded-2xl mb-2">
                    <p class="text-xl font-extrabold text-indigo-900">Trieu l'idioma si us plau</p>
                </div>
                <div class="h-1 w-12 bg-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <div class="border-r border-gray-100">Choisissez votre langue</div>
                <div>Elige tu idioma</div>
            </div>

            <div class="space-y-4">
                <button onclick="selectLanguage('fr')" 
                    class="group relative w-full flex items-center justify-center bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-1 shadow-lg hover:shadow-indigo-200">
                    <img src="https://flagcdn.com/w40/fr.png" class="absolute left-6 w-7 rounded-sm group-hover:scale-110 transition-transform">
                    <span class="tracking-tight">FRANÇAIS</span>
                </button>

                <button onclick="selectLanguage('es')" 
                    class="group relative w-full flex items-center justify-center bg-red-600 text-white py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 shadow-lg hover:shadow-red-200">
                    <img src="https://flagcdn.com/w40/es.png" class="absolute left-6 w-7 rounded-sm group-hover:scale-110 transition-transform">
                    <span class="tracking-tight">ESPAÑOL</span>
                </button>
            </div>

            <div class="mt-2 pt-8 border-t border-gray-50">
                <p class="font-medium text-gray-400 text-[16px] leading-relaxed italic">
                    "Aprendre una llengua és tenir una finestra més per mirar el món"
                </p>
            </div>
        </div>
    </div>`;
}

function renderMenu(){
    const t=TRADS_DB[state.lang].menu;
    const tn=TRADS_DB[state.lang].tenses;
    return`
    <div class="max-w-md mx-auto mt-10"><div class="bg-white rounded-lg shadow-xl p-8">
        <h1 class="text-3xl font-bold text-indigo-900 mb-6 text-center">${t.title}</h1>
            <div class="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 class="font-bold text-blue-900 mb-3">${t.selectTenses}</h2>
            <div class="space-y-2">
            ${Object.keys(state.tenses).map(k=>`<label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" ${state.tenses[k]?'checked':''} onchange="toggleTense('${k}')" class="w-4 h-4">
            <span>${tn[k]}</span></label>`).join('')}
            </div></div>
            
            <button onclick="startVerbs()" class="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-xl hover:bg-indigo-700 mb-4">${t.start}</button>
            <button onclick="state.screen='vocab_menu';render()" class="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-xl hover:bg-indigo-700 mb-4">${t.vocab}</button>
            <button onclick="goToLanguage()" class="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300">🌐 ${t.changeLang}</button>  
            <button onclick="state.screen='about';render()" 
                class="w-full mt-4 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 text-sm">
                    ℹ️ ${t.about}
            </button>
        </div>
    </div>`;
}


function renderGame(){
    if(!state.verb||!state.pron)return'';
    const t=TRADS_DB[state.lang].game;
    const tn=TRADS_DB[state.lang].tenses;
    
    // GÉRONDIF EXCEPTION : On récupère la string directe au lieu de l'index
    const correctAns=state.stage==='translation'
        ? state.verb.ca 
        : (state.tense==='gerund' ? state.verb.gerund : state.verb[state.tense][state.pron.i]);
        
    const isCorrect=state.sel===correctAns;
    const vName=state.verb[state.lang];
    
    return`<div class="max-w-2xl mx-auto"><div class="bg-white rounded-lg shadow-xl p-8">
    <div class="flex justify-between items-center mb-6">
    <button onclick="goToMenu()" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">${t.back}</button>
    <div class="flex gap-2">
    <div class="bg-purple-100 px-3 py-2 rounded-lg text-sm font-medium">${state.qCount}</div>
    <div class="bg-indigo-100 px-3 py-2 rounded-lg font-bold">🏆 ${state.score}/${state.total}</div>
    </div></div>
    <div class="mb-6">
    <div class="flex gap-2 mb-4">
    <div class="flex-1 h-2 rounded ${state.stage==='translation'?'bg-indigo-500':'bg-green-500'}"></div>
    <div class="flex-1 h-2 rounded ${state.stage==='conjugation'?'bg-indigo-500':'bg-gray-300'}"></div>
    </div>
    <p class="text-sm text-gray-600">${state.stage==='translation'?t.step1:t.step2}</p>
    </div>
    ${state.stage==='translation'?`<div class="mb-6">
<h2 class="text-2xl font-bold text-center mb-4">${t.verb}: <span class="text-indigo-600">${vName}</span></h2>
<p class="text-gray-600 text-center">${t.q1}</p></div>`:`<div class="mb-6">
<h2 class="text-2xl font-bold text-indigo-600 text-center mb-4">${
    state.tense==='gerund'?`Estic _____ (${state.verb.ca})`:
    state.tense==='periphrastic'?`${state.pron.ca} _____ ${state.verb.ca}`:
    `${state.pron.ca} _____ (${state.verb.ca}) ${t.q2} ${tn[state.tense]}`
}</h2></div>`}
    <div class="space-y-3">
    ${state.opts.map(o=>`<button onclick="handleAns('${o.replace(/'/g,"\\'")}')" ${state.show?'disabled':''} 
    class="w-full p-4 rounded-lg text-lg font-medium transition ${state.show?o===correctAns?'bg-green-500 text-white':o===state.sel?'bg-red-500 text-white':'bg-gray-100 text-gray-400':'bg-indigo-50 text-indigo-900 hover:bg-indigo-100'}">
    <div class="flex justify-between items-center"><span>${o}</span>
    ${state.show&&o===correctAns?'<span class="text-2xl">✓</span>':state.show&&o===state.sel&&o!==correctAns?'<span class="text-2xl">✗</span>':''}
    </div></button>`).join('')}
    </div>

    ${state.show&&state.stage==='conjugation'&&!isCorrect?`<div class="mt-4 bg-blue-50 p-4 rounded-lg">
    <h3 class="font-bold text-blue-900 mb-2 text-center uppercase text-xs tracking-widest">${t.full} "${state.verb.ca}" :</h3>
    <div class="${state.tense==='gerund' ? 'flex justify-center' : 'grid grid-cols-2 gap-2'} text-sm">
    ${state.tense === 'gerund' 
        ? `<div class="text-indigo-700 text-xl font-black p-2 bg-white rounded-lg shadow-sm">${state.verb.gerund}</div>`
        : PRONOUNS.map((p,i)=>`<div class="text-blue-800"><span class="font-medium">${p.ca}:</span> ${state.verb[state.tense][i]}</div>`).join('')
    }
    </div></div>`:''} 

    ${state.show?`<button onclick="next()" class="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700">
    ${state.stage==='conjugation'||!isCorrect?t.next:t.ok}</button>`:''}
    </div></div>`;
}

function renderAbout() {
    const t = TRADS_DB[state.lang].about;
    return `
    <div class="max-w-md mx-auto mt-10 px-4 font-sans">
        <div class="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h1 class="text-3xl font-black text-indigo-900 mb-2">${t.title}</h1>
                <p class="text-xs text-gray-400 mb-2">
                    Version ${APP_CONFIG.version} <br>
                    Developed with ❤️ by ${APP_CONFIG.author}
                </p>
            
            <div class="space-y-4 text-gray-600 mb-4 leading-relaxed">
                <p>${t.desc}</p>
                <p class="text-sm italic bg-gray-50 p-4 rounded-xl border-l-4 border-indigo-600">
                    ${t.source}
                </p>

            </div>

            <div class="grid grid-cols-3 gap-3 mb-2">
                <div class="bg-indigo-600 p-4 rounded-2xl text-center shadow-lg shadow-indigo-100 transition-transform hover:scale-105">
                    <span class="block text-2xl font-black text-white">${getStats().verbs}</span>
                    <span class="text-[9px] uppercase font-bold text-indigo-200 tracking-tighter">${t.stat_verbs}</span>
                </div>

                <div class="bg-white border-2 border-indigo-600 p-4 rounded-2xl text-center transition-transform hover:scale-105">
                    <span class="block text-2xl font-black text-indigo-900">${getStats().tenses}</span>
                    <span class="text-[9px] uppercase font-bold text-indigo-400 tracking-tighter">${t.stat_tenses}</span>
                </div>

                <div class="bg-gray-50 border-2 border-dashed border-gray-200 p-4 rounded-2xl text-center opacity-60">
                    <span class="block text-2xl font-black text-gray-400">${getStats().vocab}</span>
                    <span class="text-[9px] uppercase font-bold text-gray-400 tracking-tighter">${t.stat_words}</span>
                </div>
            </div>

            <button onclick="state.screen='menu';render()" 
                class="mt-2 w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                ${t.back}
            </button>
        </div>
    </div>`;
}


function render(){
    const screens={
        language:renderLang,
        menu:renderMenu,
        verbs:renderGame,
        stats:renderStats,
        about:renderAbout,
        vocab_menu: renderVocabMenu,
        vocab_game: renderVocabGame,
        vocab_stats: renderVocabStats
    };
    document.getElementById('app').innerHTML=screens[state.screen]();
}


function renderStats() {
    const lang = state.lang;
    const t = TRADS_DB[lang].stats;
    const tn = TRADS_DB[lang].tenses;
    
    const allErrors = state.sessionHistory.filter(h => !h.isCorrect);
    const latestErrors = allErrors.slice(-10);

    // Calcul du Top 3 à réviser
    const errorCounts = {};
    allErrors.forEach(err => {
        errorCounts[err.verbCa] = (errorCounts[err.verbCa] || 0) + 1;
    });
    const top3Worst = Object.entries(errorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([ca]) => ca.toUpperCase());

    // Liste satisfaction (tous les verbes vus)
    const verbsSeen = [...new Set(state.sessionHistory.map(h => h.verbCa))];

    return `
    <div class="max-w-md mx-auto mt-6 px-2 space-y-6 mb-20">
        <div class="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h1 class="text-2xl font-black text-indigo-900 mb-2">${t.title}</h1>
            <div class="text-4xl font-black text-indigo-600">${Math.floor(state.score)} / ${Math.floor(state.total)}</div>
        </div>

        ${top3Worst.length > 0 ? `
            <div class="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                <p class="text-[10px] font-black text-orange-400 uppercase mb-2">${t.focus}</p>
                <div class="flex gap-2">${top3Worst.map(v => `<span class="bg-white px-2 py-1 rounded-lg shadow-sm font-bold text-orange-600 text-xs">${v}</span>`).join('')}</div>
            </div>
        ` : `<div class="bg-green-50 p-4 rounded-2xl text-center font-bold text-green-700">🌟 ${t.congrats}</div>`}

        <div class="space-y-2">
            ${latestErrors.map(err => `
                <div class="bg-white p-3 rounded-xl border border-red-50 text-xs shadow-sm">
                    <div class="text-[9px] font-black text-gray-400 uppercase">${err.verbCa} - ${err.personName}</div>
                    <div class="flex gap-2 items-center mt-1">
                        <span class="text-red-500 line-through">${err.userAns}</span>
                        <span>➔</span>
                        <span class="text-green-600 font-bold">${err.correctAns}</span>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="bg-gray-100 rounded-2xl p-4">
            <p class="text-[10px] font-black text-gray-400 uppercase mb-3 text-center italic">${t.verbs}</p>
            <div class="flex flex-wrap justify-center gap-2">
                ${verbsSeen.map(ca => {
                    const hasErr = allErrors.some(e => e.verbCa === ca);
                    const color = hasErr ? 'bg-red-100 text-red-700 border-red-200' : 'bg-green-100 text-green-700 border-green-200';
                    return `<span class="px-2 py-1 rounded text-[10px] font-bold border ${color}">${ca.toUpperCase()}</span>`;
                }).join('')}
            </div>
        </div>

        <button onclick="continueStats()" class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black shadow-lg">${t.continue}</button>
        <button onclick="goToMenu()" class="w-full text-gray-400 font-bold text-xs uppercase text-center mt-2">${t.menu}</button>
    </div>`;
}

render();
