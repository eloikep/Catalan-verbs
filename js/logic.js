// ==================== ÉTAT GLOBAL ====================
const APP_CONFIG = {
    version: "2.0.0",
    author: "Eloïk Ep"
};


let state = {
    screen:'language',lang:null,stage:'translation',verb:null,pron:null,opts:[],sel:null,show:false,
    score:0,total:0,qCount:0,tenses:{present:true,subjunctive:false,future:false,imperfect:false,gerund:false,periphrastic:false},tense:null,verbStats:{},pool:null
};


// ==================== FONCTIONS PRINCIPALES ====================


function selectLanguage(l){state.lang=l;state.screen='menu';render();}
function goToMenu() {
    state.pool = null; // Important pour ne pas rester bloqué en mode révision
    state.screen = 'menu';
    render();
}
function goToLanguage(){state={screen:'language',lang:null,stage:'translation',verb:null,pron:null,opts:[],sel:null,show:false,score:0,total:0,qCount:0,tenses:{present:true,subjunctive:false,future:false,imperfect:false,periphrastic:false},tense:null,verbStats:{}};render();}
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
            // On crée un tableau de 6 objets (un par personne)
            state.verbStats[ca][t] = Array.from({ length: 6 }, () => ({ ok: 0, total: 0 }));
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

    if (state.stage === 'translation') {
        const isCorrect = ans === state.verb.ca;
        
        // Mise à jour du compteur de traduction
        state.verbStats[state.verb.ca].translation.total++;
        if (isCorrect) {
            state.verbStats[state.verb.ca].translation.ok++;
            state.score += 0.5;
        }
        
        state.total++;
        if (isCorrect) {
            state.stage = 'conjugation';
            state.opts = genConjOpts(state.verb, state.pron.i, state.tense);
            state.sel = null;
            state.show = false;
        }
        render();
    } else {
// --- GESTION DE L'EXCEPTION DU GÉRONDIF ---
        const isGerund = state.tense === 'gerund';
        
        // Si gérondif, la réponse correcte est la string directe, sinon c'est l'index du tableau
        const correct = isGerund ? state.verb.gerund : state.verb[state.tense][state.pron.i];
        const isCorrect = ans === correct;

        // Pour les stats, si c'est le gérondif, on stocke tout à l'index [0] pour ne pas casser ta structure
        const idx = isGerund ? 0 : state.pron.i;
        const stat = state.verbStats[state.verb.ca][state.tense][idx];
        stat.total++;
        if (isCorrect) {
            stat.ok++;
            state.score += 0.5;
        }

        state.qCount++;
        render();
    }
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




// ==================== 
// ==================== 
// ==================== 
// ==================== RENDU ====================
// ==================== 
// ==================== 
// ==================== 



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
                <p class="font-medium text-gray-400 text-[11px] leading-relaxed italic">
                    "Aprendre una llengua és tenir una finestra més per mirar el món"
                </p>
            </div>
        </div>
    </div>`;
}

function renderMenu(){
    const t=TRANSLATIONS[state.lang].menu;
    const tn=TRANSLATIONS[state.lang].tenses;
    return`<div class="max-w-md mx-auto mt-10"><div class="bg-white rounded-lg shadow-xl p-8">
    <h1 class="text-3xl font-bold text-indigo-900 mb-6 text-center">${t.title}</h1>
    <div class="bg-blue-50 p-4 rounded-lg mb-6">
    <h2 class="font-bold text-blue-900 mb-3">${t.selectTenses}</h2>
    <div class="space-y-2">
    ${Object.keys(state.tenses).map(k=>`<label class="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" ${state.tenses[k]?'checked':''} onchange="toggleTense('${k}')" class="w-4 h-4">
    <span>${tn[k]}</span></label>`).join('')}
    </div></div>
    <button onclick="startVerbs()" class="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-xl hover:bg-indigo-700 mb-4">${t.start}</button>
    <button disabled class="w-full bg-gray-300 text-gray-500 py-4 rounded-lg font-bold mb-4 cursor-not-allowed">${t.vocab} ${t.soon}</button>
    <button onclick="goToLanguage()" class="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300">🌐 ${t.changeLang}</button>
    </div></div>`;
}

function renderStats() {
    const lang = state.lang;
    const t = TRANSLATIONS[lang].stats;
    const tn = TRANSLATIONS[lang].tenses;
    const list = Object.keys(state.verbStats);

    // --- 1. CALCULS DES SCORES & RANKINGS ---
    let totalCorrect = 0;
    let totalPossible = 0;
    const scoresByTense = { translation: { ok: 0, total: 0 } };
    const verbRankings = [];

    list.forEach(ca => {
        const s = state.verbStats[ca];
        const v = VERBS_DB.find(x => x.ca === ca);
        let verbCorrect = 0;
        let verbTotal = 0;

        // Traduction
        if (s.translation.total > 0) {
            scoresByTense.translation.ok += s.translation.ok;
            scoresByTense.translation.total += s.translation.total;
            verbCorrect += s.translation.ok;
            verbTotal += s.translation.total;
        }

        // Conjugaisons
        Object.keys(state.tenses).forEach(tense => {
            if (state.tenses[tense] && s[tense]) {
                if (!scoresByTense[tense]) scoresByTense[tense] = { ok: 0, total: 0 };
                
                // On vérifie si c'est un tableau (plusieurs personnes) ou un objet unique
                const statsToProcess = Array.isArray(s[tense]) ? s[tense] : [s[tense]];

                statsToProcess.forEach(stat => {
                    if (stat && stat.total > 0) {
                        scoresByTense[tense].ok += stat.ok;
                        scoresByTense[tense].total += stat.total;
                        verbCorrect += stat.ok;
                        verbTotal += stat.total;
                    }
                });
            }
        });

        totalCorrect += verbCorrect/2;
        totalPossible += verbTotal/2;
        
        if (verbTotal > 0) {
            verbRankings.push({ 
                ca: ca, 
                display: v.ca.toUpperCase(),
                ratio: verbCorrect / verbTotal
            });
        }
    });

    // --- LOGIQUE DES 10 DERNIERS & PIRES VERBES ---
    // Les 10 derniers verbes testés
    const last10Entries = verbRankings.slice(-10);
    const perfectLast10 = last10Entries.length > 0 && last10Entries.every(v => v.ratio === 1);
    
    // Les 2 pires sur toute la session (uniquement ceux qui ont des erreurs)
    const worstVerbs = [...verbRankings]
        .filter(v => v.ratio < 1)
        .sort((a, b) => a.ratio - b.ratio)
        .slice(0, 2);
   
    // On ajoute les boutons d'erreurs	
    const hasGlobalErrors = list.some(ca => {
        const s = state.verbStats[ca];
        const trErr = s.translation.ok < s.translation.total;
        
        const conjErr = Object.keys(state.tenses).some(t => {
            if (!state.tenses[t] || !s[t]) return false;
            
            // Logique unifiée : on traite tout comme un tableau pour simplifier
            const stats = Array.isArray(s[t]) ? s[t] : [s[t]];
            return stats.some(st => st.total > 0 && st.ok < st.total);
        });
        
        return trErr || conjErr;
    });


    // --- 2. RENDU HTML ---
return `
<div class="max-w-4xl mx-auto relative">
    <div class="absolute -top-2 right-4 bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg z-10 font-black text-xl">
        ${totalCorrect} / ${totalPossible}
    </div>

    <div class="bg-white rounded-lg shadow-xl p-8 pt-12">
        <h1 class="text-3xl font-bold text-indigo-900 mb-6 text-center">${t.title}</h1>
        
        <div class="flex flex-wrap gap-4 mb-8">
            <button onclick="goToMenu()" class="flex-1 min-w-[120px] bg-gray-100 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
                ${t.menu}
            </button>
            ${hasGlobalErrors ? `
                <button onclick="retryErrors()" class="flex-1 min-w-[120px] bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition shadow-md">
                    ${t.retryButton}
                </button>
            ` : ''}
            <button onclick="continueStats()" class="flex-1 min-w-[120px] bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition shadow-md">
                ${t.continue}
            </button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div class="bg-amber-50 p-3 rounded-xl border border-amber-100 text-center">
                <div class="text-[10px] font-black text-amber-400 uppercase tracking-widest">${t.translation}</div>
                <div class="text-lg font-bold text-amber-900">${scoresByTense.translation.ok}/${scoresByTense.translation.total}</div>
            </div>
            ${Object.keys(scoresByTense).filter(k => k !== 'translation').map(tense => `
                <div class="bg-indigo-50 p-3 rounded-xl border border-indigo-100 text-center">
                    <div class="text-[10px] font-black text-indigo-400 uppercase tracking-widest">${tn[tense]}</div>
                    <div class="text-lg font-bold text-indigo-900">${scoresByTense[tense].ok}/${scoresByTense[tense].total}</div>
                </div>
            `).join('')}
        </div>

        <div class="mb-10 p-5 rounded-2xl border-2 ${perfectLast10 ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}">
            ${perfectLast10 
                ? `<p class="text-green-800 font-bold text-center">🌟 ${t.congrats}</p>`
                : `<div>
                    <p class="text-orange-900 font-bold mb-2 uppercase text-xs tracking-wider">${t.focus}</p>
                    <div class="flex gap-2">
                        ${worstVerbs.length > 0 
                            ? worstVerbs.map(v => `<span class="bg-orange-600 text-white px-3 py-1 rounded-lg font-black shadow-sm">${v.display}</span>`).join('')
                            : `<span class="text-orange-800 italic text-sm">Pas assez de données.</span>`
                        }
                    </div>
                   </div>`
            }
        </div>

        <h2 class="text-xl font-black text-gray-300 mb-6 flex items-center gap-4 uppercase">
            <span class="flex-grow h-px bg-gray-100"></span> ${t.detailTitle} <span class="flex-grow h-px bg-gray-100"></span>
        </h2>

        <div class="space-y-6">
            ${list.map(ca => {
                const v = VERBS_DB.find(x => x.ca === ca);
                const s = state.verbStats[ca];
                if (!s || s.translation.total === 0) return '';

                let cOk = 0, cTot = 0;
                Object.keys(state.tenses).forEach(tense => {
                    if (state.tenses[tense] && s[tense]) {
                        s[tense].forEach(st => { cOk += st.ok; cTot += st.total; });
                    }
                });

                const trRatio = s.translation.ok / s.translation.total;
                const trColor = trRatio === 1 ? 'bg-green-500' : (trRatio === 0 ? 'bg-red-500' : 'bg-orange-500');

                return `
                <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h3 class="text-2xl font-black text-indigo-900 uppercase">${v.ca}</h3>
                                ${cTot > 0 ? `<span class="bg-indigo-100 text-indigo-700 text-[10px] px-2 py-0.5 rounded-full font-bold">Conj: ${Math.round((cOk/cTot)*100)}%</span>` : ''}
                            </div>
                            <p class="text-gray-400 italic text-sm">${v[lang]}</p>
                        </div>
                        <div class="${trColor} text-white px-3 py-1 rounded-lg text-[10px] font-black shadow-sm uppercase">
                            ${t.translation}: ${s.translation.ok}/${s.translation.total}
                        </div>
                    </div>

                    ${Object.keys(state.tenses).filter(tense => state.tenses[tense] && s[tense]).map(tense => {
                        // On ne rend le bloc que si des questions ont été posées pour ce temps
                        const hasTenseData = s[tense].some(stat => stat.total > 0);
                        if (!hasTenseData) return '';

                        return `
                        <div class="bg-gray-50 rounded-xl p-4 mb-4 last:mb-0">
                            <h4 class="text-[10px] font-black text-gray-400 uppercase mb-3 tracking-widest text-center italic">${tn[tense]}</h4>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                ${PRONOUNS.map((p, i) => {
                                    const stat = s[tense][i];
                                    const hasData = stat.total > 0;
                                    
                                    let bgColor = 'bg-white border-white';
                                    let textColor = 'text-indigo-900';
                                    let dotColor = 'bg-gray-200';

                                    if (hasData) {
                                        const ratio = stat.ok / stat.total;
                                        if (ratio === 1) { bgColor = 'bg-green-50 border-green-100'; textColor = 'text-green-900'; dotColor = 'bg-green-500'; }
                                        else if (ratio === 0) { bgColor = 'bg-red-50 border-red-100'; textColor = 'text-red-900'; dotColor = 'bg-red-500'; }
                                        else { bgColor = 'bg-orange-50 border-orange-100'; textColor = 'text-orange-900'; dotColor = 'bg-orange-500'; }
                                    } else {
                                        bgColor = 'bg-gray-100/50 border-dashed border-gray-200';
                                        textColor = 'text-gray-300';
                                    }
                                    
                                    return `
                                        <div class="flex items-center justify-between px-3 py-2 rounded-lg border shadow-sm transition-all ${bgColor}">
                                            <div class="flex items-center gap-2 overflow-hidden">
                                                <div class="w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}"></div>
                                                <span class="text-sm font-bold truncate ${textColor}">${v[tense][i]}</span>
                                            </div>
                                            ${hasData ? `<span class="text-[9px] font-black opacity-40 ml-2 ${textColor}">${stat.ok}/${stat.total}</span>` : ''}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>`;
                    }).join('')}
                </div>`;
            }).join('')}
        </div>
    </div>
</div>`;
}


function renderGame(){
    if(!state.verb||!state.pron)return'';
    const t=TRANSLATIONS[state.lang].game;
    const tn=TRANSLATIONS[state.lang].tenses;
    
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


function render(){
    const screens={language:renderLang,menu:renderMenu,verbs:renderGame,stats:renderStats};
    document.getElementById('app').innerHTML=screens[state.screen]();
}

render();
