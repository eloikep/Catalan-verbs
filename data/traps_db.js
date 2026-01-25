// ==================== BASE DE PIÈGES MANUELS ====================

 TRAPS_DB = {
    'ser': {
        present: {
            0: ['so', 'soy', 'soco'],
            1: ['est', 'es', 'estas'],
            2: ['est', 'es', 'esta'],
            3: ['somos', 'semos', 'somes'],
            4: ['sois', 'seus', 'sou'],
            5: ['son', 'són', 'sonen']
        },
        subjunctive: {
            0: ['siga', 'siguia', 'sea'],
            1: ['sigas', 'sigues', 'siguias'],
            2: ['siga', 'sigue', 'siguia'],
            3: ['sigamos', 'siguem', 'siguémos'],
            4: ['sigáis', 'sigueu', 'sigui'],
            5: ['sigan', 'siguen', 'siguian']
        },
        future: {
            0: ['serai', 'seró', 'seria'],
            1: ['seras', 'seràs', 'serias'],
            2: ['sera', 'serà', 'seria']
        },
        imperfect: {
            0: ['ero', 'erea', 'ere'],
            1: ['eras', 'eres', 'erias'],
            2: ['era', 'ero', 'eria']
        },
        gerund: ['siendo', 'esent']
    },
    'tenir': {
        present: {
            0: ['tengo', 'tingo', 'tenc'],
            1: ['tienes', 'tenes', 'ten'],
            2: ['tiene', 'tene', 'ten'],
            3: ['tenemos', 'tenem', 'tenims'],
            4: ['tenéis', 'teneu', 'tenis'],
            5: ['tienen', 'tenen', 'tenens']
        },
        subjunctive: {
            0: ['tenga', 'tinga', 'tengui'],
            1: ['tengas', 'tingas', 'tingues'],
            2: ['tenga', 'tinga', 'tingue'],
            3: ['tengamos', 'tinguem', 'tinguemos'],
            4: ['tengáis', 'tingueu', 'tingui'],
            5: ['tengan', 'tinguen', 'tinguan']
        },
        future: {
            0: ['tendré', 'tindrai', 'tendrai'],
            1: ['tendrás', 'tindras', 'tendras'],
            2: ['tendrá', 'tindrà', 'tendrà']
        },
        imperfect: {
            0: ['tenía', 'tenie', 'teniea'],
            1: ['tenías', 'tenias', 'tenies'],
            2: ['tenía', 'tenia', 'tenie']
        },
        gerund: ['teniendo', 'tenint', 'tenent']
    },
    'anar': {
        present: {
            0: ['voy', 'vago', 'anaig'],
            1: ['vas', 'va', 'vais'],
            2: ['va', 'vas', 'vai'],
            3: ['vamos', 'anem', 'anamos'],
            4: ['vais', 'aneu', 'anes'],
            5: ['van', 'vanen', 'vanan']
        },
        subjunctive: {
            0: ['vaya', 'vagi', 'anegi'],
            1: ['vayas', 'vagis', 'vaguis'],
            2: ['vaya', 'vage', 'vagi'],
            3: ['vayamos','vagem', 'anem', 'vaguem'],
            4: ['vayáis', 'aneu', 'vagueu'],
            5: ['vayan', 'vagin', 'vaguen']
        },
        future: {
            0: ['iré', 'anaré', 'anirai'],
            1: ['irás', 'anaràs', 'aniras'],
            2: ['irá', 'anará', 'anirà']
        },
        imperfect: {
            0: ['iba', 'anava', 'anave'],
            1: ['ibas', 'anaves', 'anavas'],
            2: ['iba', 'anava', 'anave']
        },
        gerund: ['yendo', 'anent', 'anant']
    },
    'fer': {
        present: {
            0: ['hago', 'faço', 'fago'],
            1: ['haces', 'fas', 'faces'],
            2: ['hace', 'fa', 'face'],
            3: ['hacemos', 'fem', 'fems'],
            4: ['hacéis', 'feu', 'feis'],
            5: ['hacen', 'fan', 'faen']
        },
        subjunctive: {
            0: ['haga', 'faci', 'faga'],
            1: ['hagas', 'facis', 'fagis'],
            2: ['haga', 'face', 'faci'],
            3: ['hagamos', 'fem', 'faguem'],
            4: ['hagáis', 'feu', 'faceu'],
            5: ['hagan', 'facin', 'fagan']
        },
        future: {
            0: ['haré', 'ferei', 'farai'],
            1: ['harás', 'feràs', 'faras'],
            2: ['hará', 'ferà', 'farà']
        },
        imperfect: {
            0: ['hacía', 'feia', 'feie'],
            1: ['hacías', 'feies', 'feias'],
            2: ['hacía', 'feia', 'feie']
        },
        gerund: ['haciendo', 'fent', 'feint']
    },
    'poder': {
        present: {
            0: ['puedo', 'podo', 'puddo'],
            1: ['puedes', 'pots', 'podes'],
            2: ['puede', 'pot', 'pode'],
            3: ['podemos', 'podem', 'podoms'],
            4: ['podéis', 'podeu', 'podes'],
            5: ['pueden', 'poden', 'podden']
        },
        subjunctive: {
            0: ['pueda', 'puga', 'pugui'],
            1: ['puedas', 'puguis', 'pugas'],
            2: ['pueda', 'puga', 'pugue'],
            3: ['podamos', 'puguem', 'poguem'],
            4: ['podáis', 'pugueu', 'podeu'],
            5: ['puedan', 'puguin', 'puguen']
        },
        future: {
            0: ['podré', 'podrai', 'podaré'],
            1: ['podrás', 'podràs', 'podras'],
            2: ['podrá', 'podrà', 'podra']
        },
        imperfect: {
            0: ['podía', 'podia', 'podie'],
            1: ['podías', 'podies', 'podias'],
            2: ['podía', 'podia', 'podie']
        },
        gerund: ['pudiendo', 'podent', 'podint']
    },
    'voler': {
        present: {
            0: ['quiero', 'volo', 'vullo'],
            1: ['quieres', 'vols', 'voles'],
            2: ['quiere', 'vol', 'vole'],
            3: ['queremos', 'volem', 'volems'],
            4: ['queréis', 'voleu', 'voles'],
            5: ['quieren', 'volen', 'volenn']
        },
        subjunctive: {
            0: ['quiera', 'vulgui', 'volga'],
            1: ['quieras', 'vulguis', 'volguis'],
            2: ['quiera', 'vulgui', 'vulgue'],
            3: ['queramos', 'vulguem', 'voguem'],
            4: ['queráis', 'vulgueu', 'volgueu'],
            5: ['quieran', 'vulguin', 'volguin']
        },
        future: {
            0: ['querré', 'voldrai', 'voldaré'],
            1: ['querrás', 'voldràs', 'voldras'],
            2: ['querrá', 'voldrà', 'voldra']
        },
        imperfect: {
            0: ['quería', 'volia', 'volie'],
            1: ['querías', 'volies', 'volias'],
            2: ['quería', 'volia', 'volie']
        },
        gerund: ['queriendo', 'volent', 'volint']
    },
    'dir': {
        present: {
            0: ['digo', 'dico', 'dig'],
            1: ['dices', 'dius', 'dis'],
            2: ['dice', 'diu', 'di'],
            3: ['decimos', 'diem', 'dims'],
            4: ['decís', 'dieu', 'dies'],
            5: ['dicen', 'diuen', 'dien']
        },
        subjunctive: {
            0: ['diga', 'digui', 'diga'],
            1: ['digas', 'diguis', 'digas'],
            2: ['diga', 'digui', 'digue'],
            3: ['digamos', 'diguem', 'diguemos'],
            4: ['digáis', 'digueu', 'digueu'],
            5: ['digan', 'diguin', 'diguen']
        },
        future: {
            0: ['diré', 'dirai', 'dierei'],
            1: ['dirás', 'diràs', 'diras'],
            2: ['dirá', 'dirà', 'dira']
        },
        imperfect: {
            0: ['decía', 'deia', 'deie'],
            1: ['decías', 'deies', 'deias'],
            2: ['decía', 'deia', 'deie']
        },
        gerund: ['diciendo', 'dient', 'dint']
    },
    'venir': {
        present: {
            0: ['vengo', 'vingo', 'venc'],
            1: ['vienes', 'véns', 'vens'],
            2: ['viene', 'vé', 've'],
            3: ['venimos', 'venim', 'venims'],
            4: ['venís', 'veniu', 'venis'],
            5: ['vienen', 'vénen', 'venen']
        },
        subjunctive: {
            0: ['venga', 'vingui', 'venga'],
            1: ['vengas', 'vinguis', 'venguis'],
            2: ['venga', 'vingui', 'vengue'],
            3: ['vengamos', 'vinguem', 'venguem'],
            4: ['vengáis', 'vingueu', 'vengueu'],
            5: ['vengan', 'vinguin', 'venguen']
        },
        future: {
            0: ['vendré', 'vindrai', 'vendaré'],
            1: ['vendrás', 'vindràs', 'vendras'],
            2: ['vendrá', 'vindrà', 'vendra']
        },
        imperfect: {
            0: ['venía', 'venia', 'venie'],
            1: ['venías', 'venies', 'venias'],
            2: ['venía', 'venia', 'venie']
        },
        gerund: ['viniendo', 'venint', 'venient']
    },
    'saber': {
        present: {
            0: ['sé', 'sapo', 'sabo'],
            1: ['sabes', 'saps', 'sabes'],
            2: ['sabe', 'sap', 'sabe'],
            3: ['sabemos', 'sabem', 'sabims'],
            4: ['sabéis', 'sabeu', 'sabes'],
            5: ['saben', 'saben', 'sabenn']
        },
        subjunctive: {
            0: ['sepa', 'sàpiga', 'sapia'],
            1: ['sepas', 'sàpigues', 'sapias'],
            2: ['sepa', 'sàpiga', 'sapia'],
            3: ['sepamos', 'sapiguem', 'sapiguemos'],
            4: ['sepáis', 'sapigueu', 'sapieu'],
            5: ['sepan', 'sàpiguen', 'sapian']
        },
        future: {
            0: ['sabré', 'sabrai', 'sabaré'],
            1: ['sabrás', 'sabràs', 'sabras'],
            2: ['sabrá', 'sabrà', 'sabra']
        },
        imperfect: {
            0: ['sabía', 'sabia', 'sabie'],
            1: ['sabías', 'sabies', 'sabias'],
            2: ['sabía', 'sabia', 'sabie']
        },
        gerund: ['sabiendo', 'sabent', 'sabint']
    },
    'veure': {
        present: {
            0: ['veo', 'veigo', 'veg'],
            1: ['ves', 'veus', 'ves'],
            2: ['ve', 'veu', 've'],
            3: ['vemos', 'veiem', 'vems'],
            4: ['veis', 'veieu', 'ves'],
            5: ['ven', 'veuen', 'veen']
        },
        subjunctive: {
            0: ['vea', 'vegi', 'vegia'],
            1: ['veas', 'vegis', 'veguis'],
            2: ['vea', 'vegi', 'vege'],
            3: ['veamos', 'vegem', 'veguem'],
            4: ['veáis', 'vegeu', 'vegeu'],
            5: ['vean', 'vegin', 'vegen']
        },
        future: {
            0: ['veré', 'veuré', 'veurai'],
            1: ['verás', 'veuràs', 'veuras'],
            2: ['verá', 'veurà', 'veura']
        },
        imperfect: {
            0: ['veía', 'veia', 'veie'],
            1: ['veías', 'veies', 'veias'],
            2: ['veía', 'veia', 'veie']
        },
        gerund: ['viendo', 'veient', 'veint']
    },
    'parlar': {
        present: {
            0: ['hablo', 'parlo', 'parle'],
            1: ['hablas', 'parles', 'parlas'],
            2: ['habla', 'parla', 'parle'],
            3: ['hablamos', 'parlem', 'parlams'],
            4: ['habláis', 'parleu', 'parles'],
            5: ['hablan', 'parlen', 'parlann']
        },
        subjunctive: {
            0: ['hable', 'parli', 'parle'],
            1: ['hables', 'parlis', 'parleis'],
            2: ['hable', 'parli', 'parle'],
            3: ['hablemos', 'parlem', 'parliem'],
            4: ['habléis', 'parleu', 'parlieu'],
            5: ['hablen', 'parlin', 'parlen']
        },
        future: {
            0: ['hablaré', 'parlarai', 'parlaré'],
            1: ['hablarás', 'parlaràs', 'parlaras'],
            2: ['hablará', 'parlarà', 'parlara']
        },
        imperfect: {
            0: ['hablaba', 'parlava', 'parlave'],
            1: ['hablabas', 'parlaves', 'parlavas'],
            2: ['hablaba', 'parlava', 'parlave']
        },
        gerund: ['hablando', 'parlant', 'parlent']
    },
    'viure': {
        present: {
            0: ['vivo', 'visco', 'visc'],
            1: ['vives', 'vius', 'vives'],
            2: ['vive', 'viu', 'vive'],
            3: ['vivimos', 'vivim', 'vivims'],
            4: ['vivís', 'viveu', 'viviu', 'viueu'],
            5: ['viven', 'viuen', 'vivenn']
        },
        subjunctive: {
            0: ['viva', 'visqui', 'viva'],
            1: ['vivas', 'visquis', 'visques'],
            2: ['viva', 'visqui', 'visque'],
            3: ['vivamos', 'visquem', 'visquemos'],
            4: ['viváis', 'visqueu', 'visquieu'],
            5: ['vivan', 'visquin', 'visquen']
        },
        future: {
            0: ['viviré', 'viurai', 'viuré'],
            1: ['vivirás', 'viuràs', 'viuras'],
            2: ['vivirá', 'viurà', 'viura']
        },
        imperfect: {
            0: ['vivía', 'vivia', 'vivie'],
            1: ['vivías', 'vivies', 'vivias'],
            2: ['vivía', 'vivia', 'vivie']
        },
        gerund: ['viviendo', 'vivint', 'vivent']
    },
    'escriure': {
        present: {
            0: ['escribo', 'escrico', 'escric'],
            1: ['escribes', 'escrius', 'escrives'],
            2: ['escribe', 'escriu', 'escrive'],
            3: ['escribimos', 'escrivim', 'escrivims'],
            4: ['escribís', 'escriveu', 'escriviu', 'escriueu'],
            5: ['escriben', 'escriuen', 'escrivenn']
        },
        subjunctive: {
            0: ['escriba', 'escrigui', 'escriva'],
            1: ['escribas', 'escriguis', 'escrives'],
            2: ['escriba', 'escrigui', 'escrive'],
            3: ['escribamos', 'escriguem', 'escrivem'],
            4: ['escribáis', 'escrigueu', 'escriveu'],
            5: ['escriban', 'escriguin', 'escriven']
        },
        future: {
            0: ['escribiré', 'escriurai', 'escriuré'],
            1: ['escribirás', 'escriuràs', 'escriuras'],
            2: ['escribirá', 'escriurà', 'escriura']
        },
        imperfect: {
            0: ['escribía', 'escrivia', 'escrivie'],
            1: ['escribías', 'escrivies', 'escrivias'],
            2: ['escribía', 'escrivia', 'escrivie']
        },
        gerund: ['escribiendo', 'escrivint', 'escrivent']
    },
    'servir': {
        present: {
            0: ['sirvo', 'servixo', 'servisco', 'serveisco'],
            1: ['sirves', 'servixes', 'servis', 'servix'],
            2: ['sirve', 'servix', 'serveis', 'serveix'],
            3: ['servimos', 'servim', 'servims'],
            4: ['servís', 'serveu', 'serviu'],
            5: ['sirven', 'serveixen', 'servixenn']
        },
        subjunctive: {
            0: ['sirva', 'serveixi', 'servixe'],
            1: ['sirvas', 'serveixis', 'servixes'],
            2: ['sirva', 'serveixi', 'servixe'],
            3: ['sirvamos', 'servim', 'serveixem'],
            4: ['sirváis', 'serviu', 'serveixeu'],
            5: ['sirvan', 'serveixin', 'servixen']
        },
        future: {
            0: ['serviré', 'servirai', 'serverei'],
            1: ['servirás', 'serviràs', 'serviras'],
            2: ['servirá', 'servirà', 'servira']
        },
        imperfect: {
            0: ['servía', 'servia', 'servie'],
            1: ['servías', 'servies', 'servias'],
            2: ['servía', 'servia', 'servie']
        },
        gerund: ['sirviendo', 'servindo', 'servint']
    },
    'llegir': {
        present: {
            0: ['leo', 'llegixo', 'llegisco'],
            1: ['lees', 'llegixes', 'llegix'],
            2: ['lee', 'llegix', 'llegeix'],
            3: ['leemos', 'llegim', 'llegims'],
            4: ['leéis', 'llegeu', 'llegiu'],
            5: ['leen', 'llegeixen', 'llegixenn']
        },
        subjunctive: {
            0: ['lea', 'llegeixi', 'llegixe'],
            1: ['leas', 'llegeixis', 'llegixes'],
            2: ['lea', 'llegeixi', 'llegixe'],
            3: ['leamos', 'llegim', 'llegeixem'],
            4: ['leáis', 'llegiu', 'llegeixeu'],
            5: ['lean', 'llegeixin', 'llegixen']
        },
        future: {
            0: ['leeré', 'llegirai', 'llegiré'],
            1: ['leerás', 'llegiràs', 'llegiras'],
            2: ['leerá', 'llegirà', 'llegira']
        },
        imperfect: {
            0: ['leía', 'llegia', 'llegie'],
            1: ['leías', 'llegies', 'llegias'],
            2: ['leía', 'llegia', 'llegie']
        },
        gerund: ['leyendo', 'llegindo', 'llegint']
    },
    'menjar': {
        present: {
            0: ['como', 'menjo', 'menge'],
            1: ['comes', 'menges', 'menjas'],
            2: ['come', 'menja', 'menje'],
            3: ['comemos', 'mengem', 'menjams'],
            4: ['coméis', 'mengeu', 'menjes'],
            5: ['comen', 'mengen', 'menjann']
        },
        subjunctive: {
            0: ['coma', 'mengi', 'menje'],
            1: ['comas', 'mengis', 'menjis'],
            2: ['coma', 'mengi', 'menje'],
            3: ['comamos', 'mengem', 'mengiem'],
            4: ['comáis', 'mengeu', 'mengieu'],
            5: ['coman', 'mengin', 'menjen']
        },
        future: {
            0: ['comeré', 'menjarai', 'menjaré'],
            1: ['comerás', 'menjaràs', 'menjaras'],
            2: ['comerá', 'menjará', 'menjara']
        },
        imperfect: {
            0: ['comía', 'menjava', 'menjave'],
            1: ['comías', 'menjaves', 'menjavas'],
            2: ['comía', 'menjava', 'menjave']
        },
        gerund: ['comiendo', 'menjando', 'menjant']
    },
    'dormir': {
        present: { 0: ['dormo'], 1: ['dormes'], 2: ['dorme'], 3: ['dormem'], 4: ['dormís'], 5: ['dormon'] },
        subjunctive: { 0: ['dorma'], 1: ['dormas'], 2: ['dorma'], 3: ['dormiem'], 4: ['dormieu'], 5: ['dorman'] },
        future: { 0: ['dormeré'], 1: ['dormeràs'], 2: ['dormerà'], 3: ['dormerem'], 4: ['dormereu'], 5: ['dormeran'] },
        imperfect: { 0: ['dormiva'], 1: ['dormives'], 2: ['dormiva'], 3: ['dormàvem'], 4: ['dormàveu'], 5: ['dormivan'] },
        gerund: ['dormant', 'dormient']
    },
    'conduir': {
        present: { 0: ['conduio'], 1: ['conduies'], 2: ['conduie'], 3: ['conduim'], 4: ['conduiu'], 5: ['conduien'] },
        subjunctive: { 0: ['conduï'], 1: ['conduïs'], 2: ['conduï'], 3: ['conduïm'], 4: ['conduïu'], 5: ['conduïn'] },
        future: { 0: ['conduïré'], 1: ['conduïràs'], 2: ['conduïrà'], 3: ['conduïrem'], 4: ['conduïreu'], 5: ['conduïran'] },
        imperfect: { 0: ['conduia'], 1: ['conduies'], 2: ['conduia'], 3: ['conduiàvem'], 4: ['conduiàveu'], 5: ['conduian'] },
        gerund: ['conduient', 'conduint']
    },
    'treballar': {
        present: { 0: ['treball'], 1: ['treballis'], 2: ['treballi'], 3: ['treballim'], 4: ['treballiu'], 5: ['treballin'] },
        subjunctive: { 0: ['treballa'], 1: ['treballas'], 2: ['treballa'], 3: ['treballem'], 4: ['treballeu'], 5: ['treballan'] },
        future: { 0: ['treballare'], 1: ['treballares'], 2: ['treballare'], 3: ['treballàrem'], 4: ['treballàreu'], 5: ['treballaren'] },
        imperfect: { 0: ['treballia'], 1: ['treballies'], 2: ['treballia'], 3: ['treballiem'], 4: ['treballieu'], 5: ['treballien'] },
        gerund: ['treballent', 'treballient']
    },
    'dir-se': {
        present: { 0: ['em dico'], 1: ['et diues'], 2: ['es die'], 3: ['ens diguem'], 4: ['us digueu'], 5: ['es dicon'] },
        subjunctive: { 0: ['em diga'], 1: ['et digas'], 2: ['es diga'], 3: ['ens diem'], 4: ['us dieu'], 5: ['es digan'] },
        future: { 0: ['em deiré'], 1: ['et deiràs'], 2: ['es deirà'], 3: ['ens deirem'], 4: ['us deireu'], 5: ['es deiran'] },
        imperfect: { 0: ['em deiva'], 1: ['et deives'], 2: ['es deiva'], 3: ['ens deiem'], 4: ['us deieu'], 5: ['es deivan'] },
        gerund: ['diguent-se', 'diant-se']
    },
    'seure': {
        present: { 0: ['seuo'], 1: ['seues'], 2: ['seue'], 3: ['seuim'], 4: ['seuiu'], 5: ['seuen'] },
        subjunctive: { 0: ['seia'], 1: ['seies'], 2: ['seia'], 3: ['seiem'], 4: ['seieu'], 5: ['seien'] },
        future: { 0: ['seure'], 1: ['seures'], 2: ['seure'], 3: ['seuràvem'], 4: ['seuràveu'], 5: ['seuren'] },
        imperfect: { 0: ['seieva'], 1: ['seieves'], 2: ['seieva'], 3: ['seiàvem'], 4: ['seiàveu'], 5: ['seievan'] },
        gerund: ['seuent', 'sevent']
    },
    'beure': {
        present: { 0: ['beuo'], 1: ['beues'], 2: ['beue'], 3: ['beuim'], 4: ['beuiu'], 5: ['beuen'] },
        subjunctive: { 0: ['beui'], 1: ['beuis'], 2: ['beui'], 3: ['beuiem'], 4: ['beuieu'], 5: ['beuin'] },
        future: { 0: ['beveré'], 1: ['beveràs'], 2: ['beverà'], 3: ['beverem'], 4: ['bevereu'], 5: ['beveran'] },
        imperfect: { 0: ['beureia'], 1: ['beureies'], 2: ['beureia'], 3: ['beureiem'], 4: ['beureieu'], 5: ['beureien'] },
        gerund: ['beuent', 'bevent']
    },
    'creure': {
        present: { 0: ['creuo'], 1: ['creues'], 2: ['creue'], 3: ['creuim'], 4: ['creuiu'], 5: ['creuen'] },
        subjunctive: { 0: ['creia'], 1: ['creias'], 2: ['creia'], 3: ['creiem'], 4: ['creieu'], 5: ['creian'] },
        future: { 0: ['creieré'], 1: ['creieràs'], 2: ['creierà'], 3: ['creierem'], 4: ['creiereu'], 5: ['creieran'] },
        imperfect: { 0: ['creieva'], 1: ['creieves'], 2: ['creieva'], 3: ['creiem'], 4: ['creieu'], 5: ['creievan'] },
        gerund: ['creuent', 'crevent']
    },
    'fugir': {
        present: { 0: ['fugeixo'], 1: ['fugeixes'], 2: ['fugeix'], 3: ['fugem'], 4: ['fugeu'], 5: ['fugeixen'] },
        subjunctive: { 0: ['fuga'], 1: ['fugas'], 2: ['fuga'], 3: ['fuguem'], 4: ['fugueu'], 5: ['fugan'] },
        future: { 0: ['fugeré'], 1: ['fugeràs'], 2: ['fugerà'], 3: ['fugerem'], 4: ['fugereu'], 5: ['fugeran'] },
        imperfect: { 0: ['fugiva'], 1: ['fugives'], 2: ['fugiva'], 3: ['fugàvem'], 4: ['fugàveu'], 5: ['fugivan'] },
        gerund: ['fuguent', 'fujint']
    },
    'morir': {
        present: { 0: ['mueixo'], 1: ['mores'], 2: ['mou'], 3: ['morem'], 4: ['moreu'], 5: ['moren'] },
        subjunctive: { 0: ['mora'], 1: ['moras'], 2: ['mora'], 3: ['morisquem'], 4: ['morisqueu'], 5: ['moran'] },
        future: { 0: ['moreré'], 1: ['moreràs'], 2: ['morerà'], 3: ['morerem'], 4: ['morereu'], 5: ['moreran'] },
        imperfect: { 0: ['moriva'], 1: ['morives'], 2: ['moriva'], 3: ['moràvem'], 4: ['moràveu'], 5: ['morivan'] },
        gerund: ['moriendo', 'morant']
    },
    'obrir': {
        present: { 0: ['obreixo'], 1: ['obreixes'], 2: ['obreix'], 3: ['obrem'], 4: ['obreu'], 5: ['obreixen'] },
        subjunctive: { 0: ['obra'], 1: ['obras'], 2: ['obra'], 3: ['obrisquem'], 4: ['obrisqueu'], 5: ['obran'] },
        future: { 0: ['obreré'], 1: ['obreràs'], 2: ['obrerà'], 3: ['obrerem'], 4: ['obrereu'], 5: ['obreran'] },
        imperfect: { 0: ['obriva'], 1: ['obrives'], 2: ['obriva'], 3: ['obriàvem'], 4: ['obriàveu'], 5: ['obrivan'] },
        gerund: ['obrent', 'obrirent']
    },
    'collir': {
        present: { 0: ['collo'], 1: ['colles'], 2: ['colle'], 3: ['collem'], 4: ['colleu'], 5: ['collen'] },
        subjunctive: { 0: ['colla'], 1: ['collas'], 2: ['colla'], 3: ['collim'], 4: ['colliu'], 5: ['collan'] },
        future: { 0: ['colleré'], 1: ['colleràs'], 2: ['collerà'], 3: ['collerem'], 4: ['collereu'], 5: ['colleran'] },
        imperfect: { 0: ['colliba'], 1: ['collibes'], 2: ['colliba'], 3: ['colliàvem'], 4: ['colliàveu'], 5: ['colliban'] },
        gerund: ['collent', 'cullent']
    },
    'omplir': {
        present: { 0: ['ompleixo'], 1: ['ompleixes'], 2: ['ompleix'], 3: ['omplem'], 4: ['ompleu'], 5: ['ompleixen'] },
        subjunctive: { 0: ['umpli'], 1: ['umplis'], 2: ['umpli'], 3: ['umplim'], 4: ['umpliu'], 5: ['umplin'] },
        future: { 0: ['ompleré'], 1: ['ompleràs'], 2: ['omplerà'], 3: ['omplerem'], 4: ['omplereu'], 5: ['ompleran'] },
        imperfect: { 0: ['umplia'], 1: ['umplies'], 2: ['umplia'], 3: ['umpliàvem'], 4: ['umpliàveu'], 5: ['umplien'] },
        gerund: ['omplent', 'umplint']
    },
    'sentir': {
        present: { 0: ['senteixo'], 1: ['senteixes'], 2: ['senteix'], 3: ['sentem'], 4: ['senteu'], 5: ['senteixen'] },
        subjunctive: { 0: ['senta'], 1: ['sentas'], 2: ['senta'], 3: ['sentisquem'], 4: ['sentisqueu'], 5: ['sentan'] },
        future: { 0: ['senteré'], 1: ['senteràs'], 2: ['senterà'], 3: ['senterem'], 4: ['sentereu'], 5: ['senteran'] },
        imperfect: { 0: ['sentiva'], 1: ['sentives'], 2: ['sentiva'], 3: ['sentàvem'], 4: ['sentàveu'], 5: ['sentivan'] },
        gerund: ['sentent', 'sentant']
    },
    'assentir': {
        present: { 0: ['assento'], 1: ['assents'], 2: ['assent'], 3: ['assentem'], 4: ['assenteu'], 5: ['assenten'] },
        subjunctive: { 0: ['assenta'], 1: ['assentas'], 2: ['assenta'], 3: ['assentim'], 4: ['assentiu'], 5: ['assentan'] },
        future: { 0: ['assenteré'], 1: ['assenteràs'], 2: ['assenterà'], 3: ['assenterem'], 4: ['assentereu'], 5: ['assenteran'] },
        imperfect: { 0: ['assentiva'], 1: ['assentives'], 2: ['assentiva'], 3: ['assentàvem'], 4: ['assentàveu'], 5: ['assentivan'] },
        gerund: ['assentent', 'assentant']
    },
    'dissentir': {
        present: { 0: ['dissento'], 1: ['dissents'], 2: ['dissent'], 3: ['dissentem'], 4: ['dissenteu'], 5: ['dissenten'] },
        subjunctive: { 0: ['dissenta'], 1: ['dissentas'], 2: ['dissenta'], 3: ['dissentim'], 4: ['dissentiu'], 5: ['dissentan'] },
        future: { 0: ['dissenteré'], 1: ['dissenteràs'], 2: ['dissenterà'], 3: ['dissenterem'], 4: ['dissentereu'], 5: ['dissenteran'] },
        imperfect: { 0: ['dissentiva'], 1: ['dissentives'], 2: ['dissentiva'], 3: ['dissentàvem'], 4: ['dissentàveu'], 5: ['dissentivan'] },
        gerund: ['dissentent', 'dissentant']
    },
    'bullir': {
        present: { 0: ['bulleixo'], 1: ['bulleixes'], 2: ['bulleix'], 3: ['bullem'], 4: ['bulleu'], 5: ['bulleixen'] },
        subjunctive: { 0: ['bulla'], 1: ['bullas'], 2: ['bulla'], 3: ['bullisquem'], 4: ['bullisqueu'], 5: ['bullan'] },
        future: { 0: ['bulleré'], 1: ['bulleràs'], 2: ['bullerà'], 3: ['bullerem'], 4: ['bullereu'], 5: ['bulleran'] },
        imperfect: { 0: ['bulliva'], 1: ['bullives'], 2: ['bulliva'], 3: ['bulliàvem'], 4: ['bulliàveu'], 5: ['bullivan'] },
        gerund: ['bullent', 'bullant']
    },
    'cruixir': {
        present: { 0: ['cruixeixo'], 1: ['cruixeixes'], 2: ['cruixeix'], 3: ['cruixem'], 4: ['cruixeu'], 5: ['cruixeixen'] },
        subjunctive: { 0: ['cruixa'], 1: ['cruixas'], 2: ['cruixa'], 3: ['cruixisquem'], 4: ['cruixisqueu'], 5: ['cruixan'] },
        future: { 0: ['cruixeré'], 1: ['cruixeràs'], 2: ['cruixerà'], 3: ['cruixerem'], 4: ['cruixereu'], 5: ['cruixeran'] },
        imperfect: { 0: ['cruixiva'], 1: ['cruixives'], 2: ['cruixiva'], 3: ['cruixàvem'], 4: ['cruixàveu'], 5: ['cruixivan'] },
        gerund: ['cruixent', 'cruixant']
    },
    'grunyir': {
        present: { 0: ['grunyeixo'], 1: ['grunyeixes'], 2: ['grunyeix'], 3: ['grunyem'], 4: ['grunyeu'], 5: ['grunyeixen'] },
        subjunctive: { 0: ['grunyeixi'], 1: ['grunyeixis'], 2: ['grunyeixi'], 3: ['grunyem'], 4: ['grunyeu'], 5: ['grunyeixin'] },
        future: { 0: ['grunyeré'], 1: ['grunyeràs'], 2: ['grunyerà'], 3: ['grunyerem'], 4: ['grunyereu'], 5: ['grunyeran'] },
        imperfect: { 0: ['grunyiva'], 1: ['grunyives'], 2: ['grunyiva'], 3: ['grunyàvem'], 4: ['grunyàveu'], 5: ['grunyivan'] },
        gerund: ['grunyent', 'grunyxant']
    },
    'apprendre': {
        present: { 0: ['aprendo'], 1: ['aprenes'], 2: ['aprene'], 3: ['aprendem'], 4: ['aprendeu'], 5: ['aprendon'] },
        subjunctive: { 0: ['aprendi'], 1: ['aprendis'], 2: ['aprendi'], 3: ['aprendem'], 4: ['aprendeu'], 5: ['aprendin'] },
        future: { 0: ['aprenderé'], 1: ['aprenderàs'], 2: ['aprenderà'], 3: ['aprenderem'], 4: ['aprendereu'], 5: ['aprenderan'] },
        imperfect: { 0: ['aprendia'], 1: ['aprendies'], 2: ['aprendia'], 3: ['aprendiem'], 4: ['aprendieu'], 5: ['aprendien'] },
        gerund: ['aprendent', 'aprenguent']
    },
    'volver': { // Traduit par Tornar
        present: { 0: ['torn'], 1: ['tornis'], 2: ['torni'], 3: ['tornim'], 4: ['torniu'], 5: ['tornin'] },
        subjunctive: { 0: ['torna'], 1: ['tornas'], 2: ['torna'], 3: ['tornem'], 4: ['torneu'], 5: ['tornan'] },
        future: { 0: ['tornare'], 1: ['tornares'], 2: ['tornare'], 3: ['tornàrem'], 4: ['tornàreu'], 5: ['tornaren'] },
        imperfect: { 0: ['tornaria'], 1: ['tornaries'], 2: ['tornaria'], 3: ['tornariem'], 4: ['tornarieu'], 5: ['tornarien'] },
        gerund: ['tornent', 'torniant']
    },
    'vestir-se': {
        present: { 0: ['em vesto'], 1: ['et vestes'], 2: ['es veste'], 3: ['ens vestem'], 4: ['us vesteu'], 5: ['es vesten'] },
        subjunctive: { 0: ['em vesta'], 1: ['et vestas'], 2: ['es vesta'], 3: ['ens vestisquem'], 4: ['us vestisqueu'], 5: ['es vestan'] },
        future: { 0: ['em vesteré'], 1: ['et vesteràs'], 2: ['es vesterà'], 3: ['ens vesterem'], 4: ['us vestereu'], 5: ['es vesteran'] },
        imperfect: { 0: ['em vestiva'], 1: ['et vestives'], 2: ['es vestiva'], 3: ['ens vestàvem'], 4: ['us vestàveu'], 5: ['es vestivan'] },
        gerund: ['vestent-se', 'vestiant-se']
    },
    'portar': {
        present: { 0: ['port'], 1: ['portis'], 2: ['porti'], 3: ['portim'], 4: ['portiu'], 5: ['portin'] },
        subjunctive: { 0: ['porta'], 1: ['portas'], 2: ['porta'], 3: ['portem'], 4: ['torneu'], 5: ['portan'] },
        future: { 0: ['portare'], 1: ['portares'], 2: ['portare'], 3: ['portàrem'], 4: ['portàreu'], 5: ['portaren'] },
        imperfect: { 0: ['portaria'], 1: ['portaries'], 2: ['portaria'], 3: ['portariem'], 4: ['portarieu'], 5: ['portarien'] },
        gerund: ['portent', 'portiant']
    },
    'dutxar-se': {
        present: { 0: ['em dutxo'], 1: ['et dutxis'], 2: ['es dutxi'], 3: ['ens dutxim'], 4: ['us dutxiu'], 5: ['es dutxin'] },
        subjunctive: { 0: ['em dutxa'], 1: ['et dutxas'], 2: ['es dutxa'], 3: ['ens dutxem'], 4: ['us dutxeu'], 5: ['es dutxan'] },
        future: { 0: ['em dutxare'], 1: ['et dutxares'], 2: ['es dutxare'], 3: ['ens dutxàrem'], 4: ['us dutxàreu'], 5: ['es dutxaren'] },
        imperfect: { 0: ['em dutxia'], 1: ['et dutxies'], 2: ['es dutxia'], 3: ['ens dutxiem'], 4: ['us dutxieu'], 5: ['es dutxien'] },
        gerund: ['dutxent-se', 'dutxiant-se']
    },
    'perdre': {
        present: { 0: ['perdeixo'], 1: ['perdes'], 2: ['perde'], 3: ['perdim'], 4: ['perdiu'], 5: ['perdon'] },
        subjunctive: { 0: ['perda'], 1: ['perdas'], 2: ['perda'], 3: ['perdem'], 4: ['perdeu'], 5: ['perdan'] },
        future: { 0: ['perderé'], 1: ['perderàs'], 2: ['perderà'], 3: ['perderem'], 4: ['perdereu'], 5: ['perderan'] },
        imperfect: { 0: ['perdia'], 1: ['perdiva'], 2: ['perdieva'], 3: ['perdiàvem'], 4: ['perdiàveu'], 5: ['perdivan'] },
        gerund: ['perdent', 'perdiant']
    },
    'córrer': {
        present: { 0: ['correixo'], 1: ['correixes'], 2: ['correix'], 3: ['corrrim'], 4: ['corrriu'], 5: ['correixen'] },
        subjunctive: { 0: ['corra'], 1: ['corras'], 2: ['corra'], 3: ['correm'], 4: ['correu'], 5: ['corran'] },
        future: { 0: ['correré'], 1: ['correràs'], 2: ['correrà'], 3: ['correrem'], 4: ['correreu'], 5: ['correran'] },
        imperfect: { 0: ['corriva'], 1: ['corrives'], 2: ['corriva'], 3: ['corriàvem'], 4: ['corriàveu'], 5: ['corrivan'] },
        gerund: ['corrant', 'corrient']
    },
    'estar': {
        present: { 0: ['esto'], 1: ['estes'], 2: ['este'], 3: ['estamos'], 4: ['estais'], 5: ['esten'] },
        subjunctive: { 0: ['este'], 1: ['estes'], 2: ['este'], 3: ['estem'], 4: ['esteu'], 5: ['esten'] },
        future: { 0: ['estarem'], 1: ['estareu'], 2: ['estaran'], 3: ['estaré'], 4: ['estaràs'], 5: ['estarà'] },
        imperfect: { 0: ['estaba'], 1: ['estabes'], 2: ['estaba'], 3: ['estàvem'], 4: ['estàveu'], 5: ['estaban'] },
        gerund: ['estando', 'estent']
    },
    'vendre': {
        present: { 0: ['vendo'], 1: ['vendes'], 2: ['vende'], 3: ['vendem'], 4: ['vendeu'], 5: ['vendon'] },
        subjunctive: { 0: ['venda'], 1: ['vendas'], 2: ['venda'], 3: ['venguem'], 4: ['vengueu'], 5: ['vendan'] },
        future: { 0: ['venderé'], 1: ['venderàs'], 2: ['venderà'], 3: ['venderem'], 4: ['vendereu'], 5: ['venderan'] },
        imperfect: { 0: ['vendia'], 1: ['vendies'], 2: ['vendia'], 3: ['vendiem'], 4: ['vendieu'], 5: ['vendien'] },
        gerund: ['venguent', 'vendent']
    },
    'prendre': {
        present: { 0: ['prendo'], 1: ['prendes'], 2: ['prende'], 3: ['prendem'], 4: ['prendeu'], 5: ['prendon'] },
        subjunctive: { 0: ['prenda'], 1: ['prendas'], 2: ['prenda'], 3: ['prendem'], 4: ['prendeu'], 5: ['prendan'] },
        future: { 0: ['prenderé'], 1: ['prenderàs'], 2: ['prenderà'], 3: ['prenderem'], 4: ['prendereu'], 5: ['prenderan'] },
        imperfect: { 0: ['prendia'], 1: ['prendies'], 2: ['prendia'], 3: ['prendiem'], 4: ['prendieu'], 5: ['prendien'] },
        gerund: ['prendent', 'prenguent']
    }
};
