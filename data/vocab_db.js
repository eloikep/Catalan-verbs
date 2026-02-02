    // --- 1. FRUITS & LÉGUMES ---
const FRUITS_BDD = [
    { cat: 'fruits', fr: 'la pomme', fr_p: 'les pommes', es: 'la manzana', es_p: 'las manzanas', ca: 'poma', plural: 'pomes', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'le citron', fr_p: 'les citrons', es: 'el limón', es_p: 'los limones', ca: 'llimona', plural: 'llimones', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'l\'abricot', fr_p: 'les abricots', es: 'el albaricoque', es_p: 'los albaricoques', ca: 'albercoc', plural: 'albercocs', gender: 'm', vowel: true },
    { cat: 'fruits', fr: 'la banane', fr_p: 'les bananes', es: 'el plátano', es_p: 'los plátanos', ca: 'plàtan', plural: 'plàtans', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'l\'orange', fr_p: 'les oranges', es: 'la naranja', es_p: 'las naranjas', ca: 'taronja', plural: 'taronges', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'la fraise', fr_p: 'les fraises', es: 'la fresa', es_p: 'las fresas', ca: 'maduixa', plural: 'maduixes', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'la poire', fr_p: 'les poires', es: 'la pera', es_p: 'las peras', ca: 'pera', plural: 'peres', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'le raisin', fr_p: 'les raisins', es: 'la uva', es_p: 'las uvas', ca: 'raïm', plural: 'raïms', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'la cerise', fr_p: 'les cerises', es: 'la cereza', es_p: 'las cerezas', ca: 'cirera', plural: 'cireres', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'la pastèque', fr_p: 'les pastèques', es: 'la sandía', es_p: 'las sandías', ca: 'síndria', plural: 'síndries', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'la pêche', fr_p: 'les pêches', es: 'el melocotón', es_p: 'los melocotones', ca: 'préssec', plural: 'préssecs', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'l\'ananas', fr_p: 'les ananas', es: 'la piña', es_p: 'las piñas', ca: 'pinya', plural: 'pinyes', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'la prune', fr_p: 'les prunes', es: 'la ciruela', es_p: 'las ciruelas', ca: 'pruna', plural: 'prunes', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'la framboise', fr_p: 'les framboises', es: 'la frambuesa', es_p: 'las frambuesas', ca: 'gerd', plural: 'gerds', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'la tomate', fr_p: 'les tomates', es: 'el tomate', es_p: 'los tomates', ca: 'tomàquet', plural: 'tomàquets', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'la pomme de terre', fr_p: 'les pommes de terre', es: 'la patata', es_p: 'las patatas', ca: 'patata', plural: 'patates', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'la carotte', fr_p: 'les carottes', es: 'la zanahoria', es_p: 'las zanahorias', ca: 'pastanaga', plural: 'pastanagues', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'l\'oignon', fr_p: 'les oignons', es: 'la cebolla', es_p: 'las cebollas', ca: 'ceba', plural: 'cebes', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'l\'ail', fr_p: 'les aulx', es: 'el ajo', es_p: 'los ajos', ca: 'all', plural: 'alls', gender: 'm', vowel: true },
    { cat: 'fruits', fr: 'le poivron', fr_p: 'les poivrons', es: 'el pimiento', es_p: 'los pimientos', ca: 'pebrot', plural: 'pebrots', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'l\'aubergine', fr_p: 'les aubergines', es: 'la berenjena', es_p: 'las berenjenas', ca: 'albergínia', plural: 'albergínies', gender: 'f', vowel: true },
    { cat: 'fruits', fr: 'la courgette', fr_p: 'les courgettes', es: 'el calabacín', es_p: 'los calabacines', ca: 'calabassó', plural: 'calabassons', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'le concombre', fr_p: 'les concombres', es: 'el pepino', es_p: 'los pepinos', ca: 'cogombre', plural: 'cogombres', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'le haricot', fr_p: 'les haricots', es: 'la judía', es_p: 'las judías', ca: 'mongeta', plural: 'mongetes', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'le petit pois', fr_p: 'les petits pois', es: 'el guisante', es_p: 'los guisantes', ca: 'pèsol', plural: 'pèsols', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'le champignon', fr_p: 'les champignons', es: 'la seta', es_p: 'las setas', ca: 'bolet', plural: 'bolets', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'l\'épinard', fr_p: 'les épinards', es: 'la espinaca', es_p: 'las espinacas', ca: 'espinac', plural: 'espinacs', gender: 'm', vowel: true },
    { cat: 'fruits', fr: 'le chou', fr_p: 'les choux', es: 'la col', es_p: 'las coles', ca: 'col', plural: 'cols', gender: 'f', vowel: false },
    { cat: 'fruits', fr: 'le maïs', fr_p: 'les maïs', es: 'el maíz', es_p: 'los maíces', ca: 'blat de moro', plural: 'blats de moro', gender: 'm', vowel: false },
    { cat: 'fruits', fr: 'l\'avocat', fr_p: 'les avocats', es: 'el aguacate', es_p: 'los aguacates', ca: 'advocat', plural: 'advocats', gender: 'm', vowel: true }
];


/// PREPOSITIONS
const PREPO_BDD = [
    { cat: 'prepo', fr: 'sur', es: 'sobre / encima de', ca: 'sobre', type: 'invariable' },
    { cat: 'prepo', fr: 'sous', es: 'debajo de', ca: 'sota', type: 'invariable' },
    { cat: 'prepo', fr: 'dans', es: 'en / dentro de', ca: 'dins', type: 'invariable' },
    { cat: 'prepo', fr: 'dehors', es: 'fuera', ca: 'fora', type: 'invariable' },
    { cat: 'prepo', fr: 'devant', es: 'delante de', ca: 'davant', type: 'invariable' },
    { cat: 'prepo', fr: 'derrière', es: 'detrás de', ca: 'darrere', type: 'invariable' },
    { cat: 'prepo', fr: 'à côté de', es: 'al lado de', ca: 'al costat de', type: 'invariable' },
    { cat: 'prepo', fr: 'entre', es: 'entre', ca: 'entre', type: 'invariable' },
    { cat: 'prepo', fr: 'près de', es: 'cerca de', ca: 'a prop de', type: 'invariable' },
    { cat: 'prepo', fr: 'loin de', es: 'lejos de', ca: 'lluny de', type: 'invariable' },
    { cat: 'prepo', fr: 'à droite', es: 'a la derecha', ca: 'a la dreta', type: 'invariable' },
    { cat: 'prepo', fr: 'à gauche', es: 'a la izquierda', ca: 'a l\'esquerra', type: 'invariable' },
    { cat: 'prepo', fr: 'en face de', es: 'en frente de', ca: 'davant de', type: 'invariable' },
    { cat: 'prepo', fr: 'autour de', es: 'alrededor de', ca: 'al voltant de', type: 'invariable' },
    { cat: 'prepo', fr: 'au-dessus de', es: 'por encima de', ca: 'per damunt de', type: 'invariable' },
    { cat: 'prepo', fr: 'au-dessous de', es: 'por debajo de', ca: 'per sota de', type: 'invariable' },
    { cat: 'prepo', fr: 'vers', es: 'hacia', ca: 'cap a', type: 'invariable' },
    { cat: 'prepo', fr: 'jusqu\'à', es: 'hasta', ca: 'fins a', type: 'invariable' },
    { cat: 'prepo', fr: 'pendant', es: 'durante', ca: 'durant', type: 'invariable' },
    { cat: 'prepo', fr: 'après', es: 'después', ca: 'després', type: 'invariable' },
    { cat: 'prepo', fr: 'avant', es: 'antes', ca: 'abans', type: 'invariable' },
    { cat: 'prepo', fr: 'avec', es: 'con', ca: 'amb', type: 'invariable' },
    { cat: 'prepo', fr: 'sans', es: 'sin', ca: 'sense', type: 'invariable' },
    { cat: 'prepo', fr: 'pour', es: 'para', ca: 'per a', type: 'invariable' },
    { cat: 'prepo', fr: 'par', es: 'por', ca: 'per', type: 'invariable' },
    { cat: 'prepo', fr: 'contre', es: 'contra', ca: 'contra', type: 'invariable' },
    { cat: 'prepo', fr: 'pendant que', es: 'mientras', ca: 'mentre', type: 'invariable' },
    { cat: 'prepo', fr: 'chaque', es: 'cada', ca: 'cada', type: 'invariable' },
    { cat: 'prepo', fr: 'partout', es: 'en todas partes', ca: 'arreu', type: 'invariable' },
    { cat: 'prepo', fr: 'quelque part', es: 'en alguna parte', ca: 'en algun lloc', type: 'invariable' }
];


/// VILLE ET COMMERCES
const CITY_BDD = [
    { cat: 'city', fr: 'la boulangerie', fr_p: 'les boulangeries', es: 'la panadería', es_p: 'las panaderías', ca: 'fleca', plural: 'fleques', gender: 'f', vowel: false },
    { cat: 'city', fr: 'la boucherie', fr_p: 'les boucheries', es: 'la carnicería', es_p: 'las carnicerías', ca: 'carnisseria', plural: 'carnisseries', gender: 'f', vowel: false },
    { cat: 'city', fr: 'la pharmacie', fr_p: 'les pharmacies', es: 'la farmacia', es_p: 'las farmacias', ca: 'farmàcia', plural: 'farmàcies', gender: 'f', vowel: false },
    { cat: 'city', fr: 'l\'école', fr_p: 'les écoles', es: 'la escuela', es_p: 'las escuelas', ca: 'escola', plural: 'escoles', gender: 'f', vowel: true },
    { cat: 'city', fr: 'la gare', fr_p: 'les gares', es: 'la estación', es_p: 'las estaciones', ca: 'estació', plural: 'estacions', gender: 'f', vowel: true },
    { cat: 'city', fr: 'la mairie', fr_p: 'les mairies', es: 'el ayuntamiento', es_p: 'los ayuntamientos', ca: 'ajuntament', plural: 'ajuntaments', gender: 'm', vowel: true },
    { cat: 'city', fr: 'le marché', fr_p: 'les marchés', es: 'el mercado', es_p: 'los mercados', ca: 'mercat', plural: 'mercats', gender: 'm', vowel: false },
    { cat: 'city', fr: 'l\'hôpital', fr_p: 'les hôpitaux', es: 'el hospital', es_p: 'los hospitales', ca: 'hospital', plural: 'hospitals', gender: 'm', vowel: true },
    { cat: 'city', fr: 'la bibliothèque', fr_p: 'les bibliothèques', es: 'la biblioteca', es_p: 'las bibliotecas', ca: 'biblioteca', plural: 'biblioteques', gender: 'f', vowel: false },
    { cat: 'city', fr: 'l\'église', fr_p: 'les églises', es: 'la iglesia', es_p: 'las iglesias', ca: 'església', plural: 'esglésies', gender: 'f', vowel: true },
    { cat: 'city', fr: 'le magasin', fr_p: 'les magasins', es: 'la tienda', es_p: 'las tiendas', ca: 'botiga', plural: 'botigues', gender: 'f', vowel: false },
    { cat: 'city', fr: 'la poissonnerie', fr_p: 'les poissonneries', es: 'la pescadería', es_p: 'las pescaderías', ca: 'peixateria', plural: 'peixateries', gender: 'f', vowel: false },
    { cat: 'city', fr: 'la quincaillerie', fr_p: 'les quincailleries', es: 'la ferretería', es_p: 'las ferreterías', ca: 'ferreteria', plural: 'ferreteries', gender: 'f', vowel: false },
    { cat: 'city', fr: 'le primeur', fr_p: 'les primeurs', es: 'la frutería', es_p: 'las fruterías', ca: 'fruiteria', plural: 'fruiteries', gender: 'f', vowel: false },
    { cat: 'city', fr: 'la librairie', fr_p: 'les librairies', es: 'la librería', es_p: 'las librerías', ca: 'llibreria', plural: 'llibreries', gender: 'f', vowel: false },
    { cat: 'city', fr: 'la place', fr_p: 'les places', es: 'la plaza', es_p: 'las plazas', ca: 'plaça', plural: 'places', gender: 'f', vowel: false },
    { cat: 'city', fr: 'la rue', fr_p: 'les rues', es: 'la calle', es_p: 'las calles', ca: 'carrer', plural: 'carrers', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le pont', fr_p: 'les ponts', es: 'el puente', es_p: 'los puentes', ca: 'pont', plural: 'ponts', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le château', fr_p: 'les châteaux', es: 'el castillo', es_p: 'los castillos', ca: 'castell', plural: 'castells', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le musée', fr_p: 'les musées', es: 'el museo', es_p: 'los museos', ca: 'museu', plural: 'museus', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le cinéma', fr_p: 'les cinémas', es: 'el cine', es_p: 'los cines', ca: 'cinema', plural: 'cinemes', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le théâtre', fr_p: 'les théâtres', es: 'el teatro', es_p: 'los teatros', ca: 'teatre', plural: 'teatres', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le restaurant', fr_p: 'les restaurants', es: 'el restaurante', es_p: 'los restaurantes', ca: 'restaurant', plural: 'restaurants', gender: 'm', vowel: false },
    { cat: 'city', fr: 'la poste', fr_p: 'les postes', es: 'el correo', es_p: 'los correos', ca: 'correus', plural: 'correus', gender: 'm', vowel: false },
    { cat: 'city', fr: 'la banque', fr_p: 'les banques', es: 'el banco', es_p: 'los bancos', ca: 'banc', plural: 'bancs', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le parc', fr_p: 'les parcs', es: 'el parque', es_p: 'los parques', ca: 'parc', plural: 'parcs', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le jardin', fr_p: 'les jardins', es: 'el jardín', es_p: 'los jardines', ca: 'jardí', plural: 'jardins', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le port', fr_p: 'les ports', es: 'el puerto', es_p: 'los puertos', ca: 'port', plural: 'ports', gender: 'm', vowel: false },
    { cat: 'city', fr: 'le bureau de tabac', fr_p: 'les bureaux de tabac', es: 'el estanco', es_p: 'los estancos', ca: 'estanc', plural: 'estancs', gender: 'm', vowel: true },
    { cat: 'city', fr: 'la station service', fr_p: 'les stations service', es: 'la gasolinera', es_p: 'las gasolineras', ca: 'benzinera', plural: 'benzineres', gender: 'f', vowel: false }
];

/// CORPS HUMAIN
const BODY_BDD = [
    { cat: 'body', fr: 'le corps', fr_p: 'les corps', es: 'el cuerpo', es_p: 'los cuerpos', ca: 'cos', plural: 'cossos', gender: 'm', vowel: false },
    { cat: 'body', fr: 'la tête', fr_p: 'les têtes', es: 'la cabeza', es_p: 'las cabezas', ca: 'cap', plural: 'caps', gender: 'm', vowel: false },
    { cat: 'body', fr: 'le visage', fr_p: 'les visages', es: 'la cara', es_p: 'las caras', ca: 'cara', plural: 'cares', gender: 'f', vowel: false },
    { cat: 'body', fr: 'l\'œil', fr_p: 'les yeux', es: 'el ojo', es_p: 'los ojos', ca: 'ull', plural: 'ulls', gender: 'm', vowel: true },
    { cat: 'body', fr: 'l\'oreille', fr_p: 'les oreilles', es: 'la oreja', es_p: 'las orejas', ca: 'orella', plural: 'orelles', gender: 'f', vowel: true },
    { cat: 'body', fr: 'le nez', fr_p: 'les nez', es: 'la nariz', es_p: 'las narices', ca: 'nas', plural: 'nassos', gender: 'm', vowel: false },
    { cat: 'body', fr: 'la bouche', fr_p: 'les bouches', es: 'la boca', es_p: 'las bocas', ca: 'boca', plural: 'boques', gender: 'f', vowel: false },
    { cat: 'body', fr: 'la dent', fr_p: 'les dents', es: 'el diente', es_p: 'los dientes', ca: 'dent', plural: 'dents', gender: 'f', vowel: false },
    { cat: 'body', fr: 'la langue', fr_p: 'les langues', es: 'la lengua', es_p: 'las lenguas', ca: 'llengua', plural: 'llengües', gender: 'f', vowel: false },
    { cat: 'body', fr: 'le cou', fr_p: 'les cous', es: 'el cuello', es_p: 'los cuellos', ca: 'coll', plural: 'colls', gender: 'm', vowel: false },
    { cat: 'body', fr: 'l\'épaule', fr_p: 'les épaules', es: 'el hombro', es_p: 'los hombros', ca: 'espatlla', plural: 'espatlles', gender: 'f', vowel: true },
    { cat: 'body', fr: 'le bras', fr_p: 'les bras', es: 'el brazo', es_p: 'los brazos', ca: 'braç', plural: 'braços', gender: 'm', vowel: false },
    { cat: 'body', fr: 'le coude', fr_p: 'les coudes', es: 'el codo', es_p: 'los codos', ca: 'colze', plural: 'colzes', gender: 'm', vowel: false },
    { cat: 'body', fr: 'la main', fr_p: 'les mains', es: 'la mano', es_p: 'las manos', ca: 'mà', plural: 'mans', gender: 'f', vowel: false },
    { cat: 'body', fr: 'le doigt', fr_p: 'les doigts', es: 'el dedo', es_p: 'los dedos', ca: 'dit', plural: 'dits', gender: 'm', vowel: false },
    { cat: 'body', fr: 'l\'ongle', fr_p: 'les ongles', es: 'la uña', es_p: 'las uñas', ca: 'ungla', plural: 'ungles', gender: 'f', vowel: true },
    { cat: 'body', fr: 'la poitrine', fr_p: 'les poitrines', es: 'el pecho', es_p: 'los pechos', ca: 'pit', plural: 'pits', gender: 'm', vowel: false },
    { cat: 'body', fr: 'le ventre', fr_p: 'les ventres', es: 'la barriga', es_p: 'las barrigas', ca: 'panxa', plural: 'panxes', gender: 'f', vowel: false },
    { cat: 'body', fr: 'le dos', fr_p: 'les dos', es: 'la espalda', es_p: 'las espaldas', ca: 'esquena', plural: 'esquenes', gender: 'f', vowel: true },
    { cat: 'body', fr: 'la jambe', fr_p: 'les jambes', es: 'la pierna', es_p: 'las piernas', ca: 'cama', plural: 'cames', gender: 'f', vowel: false },
    { cat: 'body', fr: 'le genou', fr_p: 'les genoux', es: 'la rodilla', es_p: 'las rodillas', ca: 'genoll', plural: 'genolls', gender: 'm', vowel: false },
    { cat: 'body', fr: 'le pied', fr_p: 'les pieds', es: 'el pie', es_p: 'los pies', ca: 'peu', plural: 'peus', gender: 'm', vowel: false },
    { cat: 'body', fr: 'le cheveu', fr_p: 'les cheveux', es: 'el pelo', es_p: 'los pelos', ca: 'cabell', plural: 'cabells', gender: 'm', vowel: false },
    { cat: 'body', fr: 'le cœur', fr_p: 'les cœurs', es: 'el corazón', es_p: 'los corazones', ca: 'cor', plural: 'cors', gender: 'm', vowel: false },
    { cat: 'body', fr: 'le sang', fr_p: 'les sangs', es: 'la sangre', es_p: 'las sangres', ca: 'sang', plural: 'sangs', gender: 'f', vowel: false },
    { cat: 'body', fr: 'l\'os', fr_p: 'les os', es: 'el hueso', es_p: 'los huesos', ca: 'os', plural: 'ossos', gender: 'm', vowel: true },
    { cat: 'body', fr: 'le muscle', fr_p: 'les muscles', es: 'el músculo', es_p: 'los músculos', ca: 'múscul', plural: 'músculs', gender: 'm', vowel: false },
    { cat: 'body', fr: 'la peau', fr_p: 'les peaux', es: 'la piel', es_p: 'las pieles', ca: 'pell', plural: 'pells', gender: 'f', vowel: false },
    { cat: 'body', fr: 'le cerveau', fr_p: 'les cerveaux', es: 'el cerebro', es_p: 'los cerebros', ca: 'cervell', plural: 'cervells', gender: 'm', vowel: false },
    { cat: 'body', fr: 'la gorge', fr_p: 'les gorges', es: 'la garganta', es_p: 'las gargantas', ca: 'gola', plural: 'goles', gender: 'f', vowel: false }
];


/// OBJETS DE LA MAISON

const HOUSE_BDD = [
    { cat: 'house', fr: 'la maison', fr_p: 'les maisons', es: 'la casa', es_p: 'las casas', ca: 'casa', plural: 'cases', gender: 'f', vowel: false },
    { cat: 'house', fr: 'la chambre', fr_p: 'les chambres', es: 'la habitación', es_p: 'las habitaciones', ca: 'habitació', plural: 'habitacions', gender: 'f', vowel: true },
    { cat: 'house', fr: 'la cuisine', fr_p: 'les cuisines', es: 'la cocina', es_p: 'las cocinas', ca: 'cuina', plural: 'cuines', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le salon', fr_p: 'les salons', es: 'el salón', es_p: 'los salones', ca: 'saló', plural: 'salons', gender: 'm', vowel: false },
    { cat: 'house', fr: 'la salle de bain', fr_p: 'les salles de bain', es: 'el baño', es_p: 'los baños', ca: 'bany', plural: 'banys', gender: 'm', vowel: false },
    { cat: 'house', fr: 'la table', fr_p: 'les tables', es: 'la mesa', es_p: 'las mesas', ca: 'taula', plural: 'taules', gender: 'f', vowel: false },
    { cat: 'house', fr: 'la chaise', fr_p: 'les chaises', es: 'la silla', es_p: 'las sillas', ca: 'cadira', plural: 'cadires', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le lit', fr_p: 'les lits', es: 'la cama', es_p: 'las camas', ca: 'llit', plural: 'llits', gender: 'm', vowel: false },
    { cat: 'house', fr: 'l\'armoire', fr_p: 'les armoires', es: 'el armario', es_p: 'los armarios', ca: 'armari', plural: 'armaris', gender: 'm', vowel: true },
    { cat: 'house', fr: 'le canapé', fr_p: 'les canapés', es: 'el sofá', es_p: 'los sofás', ca: 'sofà', plural: 'sofàs', gender: 'm', vowel: false },
    { cat: 'house', fr: 'la fenêtre', fr_p: 'les fenêtres', es: 'la ventana', es_p: 'las ventanas', ca: 'finestra', plural: 'finestres', gender: 'f', vowel: false },
    { cat: 'house', fr: 'la porte', fr_p: 'les portes', es: 'la puerta', es_p: 'las puertas', ca: 'porta', plural: 'portes', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le mur', fr_p: 'les murs', es: 'la pared', es_p: 'las paredes', ca: 'paret', plural: 'parets', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le sol', fr_p: 'les sols', es: 'el suelo', es_p: 'los suelos', ca: 'terra', plural: 'terres', gender: 'm', vowel: false },
    { cat: 'house', fr: 'le toit', fr_p: 'les toits', es: 'el techo / tejado', es_p: 'los techos', ca: 'teulada', plural: 'teulades', gender: 'f', vowel: false },
    { cat: 'house', fr: 'l\'escalier', fr_p: 'les escaliers', es: 'la escalera', es_p: 'las escaleras', ca: 'escala', plural: 'escales', gender: 'f', vowel: true },
    { cat: 'house', fr: 'le miroir', fr_p: 'les miroirs', es: 'el espejo', es_p: 'los espejos', ca: 'mirall', plural: 'miralls', gender: 'm', vowel: false },
    { cat: 'house', fr: 'le tapis', fr_p: 'les tapis', es: 'la alfombra', es_p: 'las alfombras', ca: 'catifa', plural: 'catifes', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le rideau', fr_p: 'les rideaux', es: 'la cortina', es_p: 'las cortinas', ca: 'cortina', plural: 'cortines', gender: 'f', vowel: false },
    { cat: 'house', fr: 'la lampe', fr_p: 'les lampes', es: 'la lámpara', es_p: 'las lámparas', ca: 'llum', plural: 'llums', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le frigo', fr_p: 'les frigos', es: 'la nevera', es_p: 'las neveras', ca: 'nevera', plural: 'neveres', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le four', fr_p: 'les fours', es: 'el horno', es_p: 'los hornos', ca: 'forn', plural: 'forns', gender: 'm', vowel: false },
    { cat: 'house', fr: 'le lave-linge', fr_p: 'les lave-linge', es: 'la lavadora', es_p: 'las lavadoras', ca: 'rentadora', plural: 'rentadores', gender: 'f', vowel: false },
    { cat: 'house', fr: 'la vaisselle', fr_p: 'les vaisselles', es: 'la vajilla', es_p: 'las vajillas', ca: 'vaixella', plural: 'vaixelles', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le verre', fr_p: 'les verres', es: 'el vaso', es_p: 'los vasos', ca: 'got', plural: 'gots', gender: 'm', vowel: false },
    { cat: 'house', fr: 'l\'assiette', fr_p: 'les assiettes', es: 'el plato', es_p: 'los platos', ca: 'plat', plural: 'plats', gender: 'm', vowel: false },
    { cat: 'house', fr: 'la fourchette', fr_p: 'les fourchettes', es: 'el tenedor', es_p: 'los tenedores', ca: 'forquilla', plural: 'forquilles', gender: 'f', vowel: false },
    { cat: 'house', fr: 'le couteau', fr_p: 'les couteaux', es: 'el cuchillo', es_p: 'los cuchillos', ca: 'ganivet', plural: 'ganivets', gender: 'm', vowel: false },
    { cat: 'house', fr: 'la cuillère', fr_p: 'les cuillères', es: 'la cuchara', es_p: 'las cucharas', ca: 'cullera', plural: 'culleres', gender: 'f', vowel: false },
    { cat: 'house', fr: 'la serviette', fr_p: 'les serviettes', es: 'la toalla', es_p: 'las toallas', ca: 'tovallola', plural: 'tovalloles', gender: 'f', vowel: false }
];



/// ANIMAUX
const ANIMALS_BDD = [
    { cat: 'animals', fr: 'le chien', fr_p: 'les chiens', es: 'el perro', es_p: 'los perros', ca: 'gos', plural: 'gossos', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'le chat', fr_p: 'les chats', es: 'el gato', es_p: 'los gatos', ca: 'gat', plural: 'gats', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'l\'oiseau', fr_p: 'les oiseaux', es: 'el pájaro', es_p: 'los pájaros', ca: 'ocell', plural: 'ocells', gender: 'm', vowel: true },
    { cat: 'animals', fr: 'le cheval', fr_p: 'les chevaux', es: 'el caballo', es_p: 'los caballos', ca: 'cavall', plural: 'cavalls', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'la vache', fr_p: 'les vaches', es: 'la vaca', es_p: 'las vacas', ca: 'vaca', plural: 'vaques', gender: 'f', vowel: false },
    { cat: 'animals', fr: 'le cochon', fr_p: 'les cochons', es: 'el cerdo', es_p: 'los cerdos', ca: 'porc', plural: 'porcs', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'le mouton', fr_p: 'les moutons', es: 'la oveja', es_p: 'las ovejas', ca: 'ovella', plural: 'ovelles', gender: 'f', vowel: true },
    { cat: 'animals', fr: 'le lapin', fr_p: 'les lapins', es: 'el conejo', es_p: 'los conejos', ca: 'conill', plural: 'conills', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'le poisson', fr_p: 'les poissons', es: 'el pez', es_p: 'los peces', ca: 'peix', plural: 'peixos', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'le lion', fr_p: 'les lions', es: 'el león', es_p: 'los leones', ca: 'lleó', plural: 'lleons', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'l\'éléphant', fr_p: 'les éléphants', es: 'el elefante', es_p: 'los elefantes', ca: 'elefant', plural: 'elefants', gender: 'm', vowel: true },
    { cat: 'animals', fr: 'le singe', fr_p: 'les singes', es: 'el mono', es_p: 'los monos', ca: 'mico', plural: 'micos', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'l\'ours', fr_p: 'les ours', es: 'el oso', es_p: 'los osos', ca: 'os', plural: 'ossos', gender: 'm', vowel: true },
    { cat: 'animals', fr: 'le loup', fr_p: 'les loups', es: 'el lobo', es_p: 'los lobos', ca: 'llop', plural: 'llops', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'la souris', fr_p: 'les souris', es: 'el ratón', es_p: 'los ratones', ca: 'ratolí', plural: 'ratolins', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'le serpent', fr_p: 'les serpents', es: 'la serpiente', es_p: 'las serpientes', ca: 'serp', plural: 'serps', gender: 'f', vowel: false },
    { cat: 'animals', fr: 'la grenouille', fr_p: 'les grenouilles', es: 'la rana', es_p: 'las ranas', ca: 'granota', plural: 'granotes', gender: 'f', vowel: false },
    { cat: 'animals', fr: 'l\'araignée', fr_p: 'les araignées', es: 'la araña', es_p: 'las arañas', ca: 'aranya', plural: 'aranyes', gender: 'f', vowel: true },
    { cat: 'animals', fr: 'l\'abeille', fr_p: 'les abeilles', es: 'la abeja', es_p: 'las abejas', ca: 'abella', plural: 'abelles', gender: 'f', vowel: true },
    { cat: 'animals', fr: 'la mouche', fr_p: 'les mouches', es: 'la mosca', es_p: 'las moscas', ca: 'mosca', plural: 'mosques', gender: 'f', vowel: false },
    { cat: 'animals', fr: 'le papillon', fr_p: 'les papillons', es: 'la mariposa', es_p: 'las mariposas', ca: 'papallona', plural: 'papallones', gender: 'f', vowel: false },
    { cat: 'animals', fr: 'le poulet', fr_p: 'les poulets', es: 'el pollo', es_p: 'los pollos', ca: 'pollastre', plural: 'pollastres', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'le canard', fr_p: 'les canards', es: 'el pato', es_p: 'los patos', ca: 'ànec', plural: 'ànecs', gender: 'm', vowel: true },
    { cat: 'animals', fr: 'le tigre', fr_p: 'les tigres', es: 'el tigre', es_p: 'los tigres', ca: 'tigre', plural: 'tigres', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'la girafe', fr_p: 'les girafes', es: 'la jirafa', es_p: 'las jirafas', ca: 'girafa', plural: 'girafes', gender: 'f', vowel: false },
    { cat: 'animals', fr: 'le singe', fr_p: 'les singes', es: 'el simio', es_p: 'los simios', ca: 'simi', plural: 'simis', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'le renard', fr_p: 'les renards', es: 'el zorro', es_p: 'los zorros', ca: 'guineu', plural: 'guineus', gender: 'f', vowel: false },
    { cat: 'animals', fr: 'le dauphin', fr_p: 'les dauphins', es: 'el delfín', es_p: 'los delfines', ca: 'dofí', plural: 'dofins', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'le requin', fr_p: 'les requins', es: 'el tiburón', es_p: 'los tiburones', ca: 'tauró', plural: 'taurons', gender: 'm', vowel: false },
    { cat: 'animals', fr: 'la fourmi', fr_p: 'les fourmis', es: 'la hormiga', es_p: 'las hormigas', ca: 'formiga', plural: 'formigues', gender: 'f', vowel: false }
];



/// NOURRITURE
const FOOD_BDD = [
    { cat: 'food', fr: 'le pain', fr_p: 'les pains', es: 'el pan', es_p: 'los panes', ca: 'pa', plural: 'pans', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le fromage', fr_p: 'les fromages', es: 'el queso', es_p: 'los quesos', ca: 'formatge', plural: 'formatges', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le lait', fr_p: 'les laits', es: 'la leche', es_p: 'las leches', ca: 'llet', plural: 'llets', gender: 'f', vowel: false },
    { cat: 'food', fr: 'l\'œuf', fr_p: 'les œufs', es: 'el huevo', es_p: 'los huevos', ca: 'ou', plural: 'ous', gender: 'm', vowel: true },
    { cat: 'food', fr: 'le beurre', fr_p: 'les beurres', es: 'la mantequilla', es_p: 'las mantequillas', ca: 'mantega', plural: 'mantegues', gender: 'f', vowel: false },
    { cat: 'food', fr: 'le riz', fr_p: 'les riz', es: 'el arroz', es_p: 'los arroces', ca: 'arròs', plural: 'arrossos', gender: 'm', vowel: true },
    { cat: 'food', fr: 'les pâtes', fr_p: 'les pâtes', es: 'la pasta', es_p: 'las pastas', ca: 'pasta', plural: 'pastes', gender: 'f', vowel: false },
    { cat: 'food', fr: 'la viande', fr_p: 'les viandes', es: 'la carne', es_p: 'las carnes', ca: 'carn', plural: 'carns', gender: 'f', vowel: false },
    { cat: 'food', fr: 'le poulet', fr_p: 'les poulets', es: 'el pollo', es_p: 'los pollos', ca: 'pollastre', plural: 'pollastres', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le poisson', fr_p: 'les poissons', es: 'el pez/pescado', es_p: 'los peces', ca: 'peix', plural: 'peixos', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le sucre', fr_p: 'les sucres', es: 'el azúcar', es_p: 'los azúcares', ca: 'sucre', plural: 'sucres', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le sel', fr_p: 'les sels', es: 'la sal', es_p: 'las sales', ca: 'sal', plural: 'sals', gender: 'f', vowel: false },
    { cat: 'food', fr: 'l\'huile', fr_p: 'les huiles', es: 'el aceite', es_p: 'los aceites', ca: 'oli', plural: 'olis', gender: 'm', vowel: true },
    { cat: 'food', fr: 'le vinaigre', fr_p: 'les vinaigres', es: 'el vinagre', es_p: 'los vinagres', ca: 'vinagre', plural: 'vinagres', gender: 'm', vowel: false },
    { cat: 'food', fr: 'la farine', fr_p: 'les farines', es: 'la harina', es_p: 'las harinas', ca: 'farina', plural: 'farines', gender: 'f', vowel: false },
    { cat: 'food', fr: 'le yaourt', fr_p: 'les yaourts', es: 'el yogur', es_p: 'los yogures', ca: 'iogurt', plural: 'iogurts', gender: 'm', vowel: true },
    { cat: 'food', fr: 'le miel', fr_p: 'les miels', es: 'la miel', es_p: 'las mieles', ca: 'mel', plural: 'mels', gender: 'f', vowel: false },
    { cat: 'food', fr: 'la confiture', fr_p: 'les confitures', es: 'la mermelada', es_p: 'las mermeladas', ca: 'melmelada', plural: 'melmelades', gender: 'f', vowel: false },
    { cat: 'food', fr: 'le chocolat', fr_p: 'les chocolats', es: 'el chocolate', es_p: 'los chocolates', ca: 'xocolata', plural: 'xocolates', gender: 'f', vowel: false },
    { cat: 'food', fr: 'le biscuit', fr_p: 'les biscuits', es: 'la galleta', es_p: 'las galletas', ca: 'galeta', plural: 'galetes', gender: 'f', vowel: false },
    { cat: 'food', fr: 'l\'eau', fr_p: 'les eaux', es: 'el agua', es_p: 'las aguas', ca: 'aigua', plural: 'aigües', gender: 'f', vowel: true },
    { cat: 'food', fr: 'le vin', fr_p: 'les vins', es: 'el vino', es_p: 'los vinos', ca: 'vi', plural: 'vins', gender: 'm', vowel: false },
    { cat: 'food', fr: 'la bière', fr_p: 'les bières', es: 'la cerveza', es_p: 'las cervezas', ca: 'cervesa', plural: 'cerveses', gender: 'f', vowel: false },
    { cat: 'food', fr: 'le jus', fr_p: 'les jus', es: 'el zumo', es_p: 'los zumos', ca: 'suc', plural: 'sucs', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le café', fr_p: 'les cafés', es: 'el café', es_p: 'los cafés', ca: 'cafè', plural: 'cafès', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le thé', fr_p: 'les thés', es: 'el té', es_p: 'los tés', ca: 'te', plural: 'tes', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le lait végétal', fr_p: 'les laits végétaux', es: 'la leche vegetal', es_p: 'las leches vegetales', ca: 'beguda vegetal', plural: 'begudes vegetals', gender: 'f', vowel: false },
    { cat: 'food', fr: 'la soupe', fr_p: 'les soupes', es: 'la sopa', es_p: 'las sopas', ca: 'sopa', plural: 'sopes', gender: 'f', vowel: false },
    { cat: 'food', fr: 'le jambon', fr_p: 'les jambons', es: 'el jamón', es_p: 'los jamones', ca: 'pernil', plural: 'pernils', gender: 'm', vowel: false },
    { cat: 'food', fr: 'le saucisson', fr_p: 'les saucissons', es: 'el embutido', es_p: 'los embutidos', ca: 'embotit', plural: 'embotits', gender: 'm', vowel: true }
];

///FAMILLE

const FAMILY_BDD = [
    { cat: 'family', fr: 'la famille', fr_p: 'les familles', es: 'la familia', es_p: 'las familias', ca: 'família', plural: 'famílies', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le père', fr_p: 'les pères', es: 'el padre', es_p: 'los padres', ca: 'pare', plural: 'pares', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la mère', fr_p: 'les mères', es: 'la madre', es_p: 'las madres', ca: 'mare', plural: 'mares', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le fils', fr_p: 'les fils', es: 'el hijo', es_p: 'los hijos', ca: 'fill', plural: 'fills', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la fille', fr_p: 'les filles', es: 'la hija', es_p: 'las hijas', ca: 'filla', plural: 'filles', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le frère', fr_p: 'les frères', es: 'el hermano', es_p: 'los hermanos', ca: 'germà', plural: 'germans', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la sœur', fr_p: 'les sœurs', es: 'la hermana', es_p: 'las hermanas', ca: 'germana', plural: 'germanes', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le grand-père', fr_p: 'les grands-pères', es: 'el abuelo', es_p: 'los abuelos', ca: 'avi', plural: 'avis', gender: 'm', vowel: true },
    { cat: 'family', fr: 'la grand-mère', fr_p: 'les grands-mères', es: 'la abuela', es_p: 'las abuelas', ca: 'àvia', plural: 'àvies', gender: 'f', vowel: true },
    { cat: 'family', fr: 'le petit-fils', fr_p: 'les petits-fils', es: 'el nieto', es_p: 'los nietos', ca: 'net', plural: 'nets', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la petite-fille', fr_p: 'les petites-filles', es: 'la nieta', es_p: 'las nietas', ca: 'neta', plural: 'netes', gender: 'f', vowel: false },
    { cat: 'family', fr: 'l\'oncle', fr_p: 'les oncles', es: 'el tío', es_p: 'los tíos', ca: 'oncle', plural: 'oncles', gender: 'm', vowel: true },
    { cat: 'family', fr: 'la tante', fr_p: 'les tantes', es: 'la tía', es_p: 'las tías', ca: 'tia', plural: 'ties', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le cousin', fr_p: 'les cousins', es: 'el primo', es_p: 'los primos', ca: 'cosí', plural: 'cosins', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la cousine', fr_p: 'les cousines', es: 'la prima', es_p: 'las primas', ca: 'cosina', plural: 'cosines', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le neveu', fr_p: 'les neveux', es: 'el sobrino', es_p: 'los sobrinos', ca: 'nebot', plural: 'nebots', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la nièce', fr_p: 'les nièces', es: 'la sobrina', es_p: 'las sobrinas', ca: 'neboda', plural: 'nebodes', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le mari', fr_p: 'les maris', es: 'el marido', es_p: 'los maridos', ca: 'marit', plural: 'marits', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la femme (épouse)', fr_p: 'les femmes', es: 'la mujer', es_p: 'las mujeres', ca: 'dona', plural: 'dones', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le beau-père', fr_p: 'les beaux-pères', es: 'el suegro', es_p: 'los suegros', ca: 'sogre', plural: 'sogres', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la belle-mère', fr_p: 'les belles-mères', es: 'la suegra', es_p: 'las suegras', ca: 'sogra', plural: 'sogres', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le gendre', fr_p: 'les gendres', es: 'el yerno', es_p: 'los yernos', ca: 'gendre', plural: 'gendres', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la belle-fille (bru)', fr_p: 'les belles-filles', es: 'la nuera', es_p: 'las nueras', ca: 'nora', plural: 'nores', gender: 'f', vowel: false },
    { cat: 'family', fr: 'le bébé', fr_p: 'les bébés', es: 'el bebé', es_p: 'los bebés', ca: 'nadó', plural: 'nadons', gender: 'm', vowel: false },
    { cat: 'family', fr: 'l\'enfant', fr_p: 'les enfants', es: 'el niño', es_p: 'los niños', ca: 'nen', plural: 'nens', gender: 'm', vowel: false },
    { cat: 'family', fr: 'le jumeau', fr_p: 'les jumeaux', es: 'el gemelo', es_p: 'los gemelos', ca: 'bessó', plural: 'bessons', gender: 'm', vowel: false },
    { cat: 'family', fr: 'le parrain', fr_p: 'les parrains', es: 'el padrino', es_p: 'los padrinos', ca: 'padrí', plural: 'padrins', gender: 'm', vowel: false },
    { cat: 'family', fr: 'la marraine', fr_p: 'les marraines', es: 'la madrina', es_p: 'las madrinas', ca: 'madrina', plural: 'madrines', gender: 'f', vowel: false },
    { cat: 'family', fr: 'l\'homme', fr_p: 'les hommes', es: 'el hombre', es_p: 'los hombres', ca: 'home', plural: 'homes', gender: 'm', vowel: true },
    { cat: 'family', fr: 'la dame', fr_p: 'les dames', es: 'la señora', es_p: 'las señoras', ca: 'senyora', plural: 'senyores', gender: 'f', vowel: false }
];


// METIERS

const JOBS_BDD = [
    // --- MÉTIERS (30 mots) ---
    { cat: 'jobs', fr: 'le professeur', fr_p: 'les professeurs', es: 'el profesor', es_p: 'los profesores', ca: 'professor', plural: 'professors', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le médecin', fr_p: 'les médecins', es: 'el médico', es_p: 'los médicos', ca: 'metge', plural: 'metges', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'l\'infirmier', fr_p: 'les infirmiers', es: 'el enfermero', es_p: 'los enfermeros', ca: 'infermer', plural: 'infermers', gender: 'm', vowel: true },
    { cat: 'jobs', fr: 'le policier', fr_p: 'les policiers', es: 'el policía', es_p: 'los policías', ca: 'policia', plural: 'policies', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le pompier', fr_p: 'les pompiers', es: 'el bombero', es_p: 'los bomberos', ca: 'bomber', plural: 'bombers', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le boulanger', fr_p: 'les boulangers', es: 'el panadero', es_p: 'los panaderos', ca: 'flequer', plural: 'flequers', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le cuisinier', fr_p: 'les cuisiniers', es: 'el cocinero', es_p: 'los cocineros', ca: 'cuiner', plural: 'cuiners', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le serveur', fr_p: 'les serveurs', es: 'el camarero', es_p: 'los camareros', ca: 'cambrer', plural: 'cambrers', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'l\'avocat', fr_p: 'les avocats', es: 'el abogado', es_p: 'los abogados', ca: 'advocat', plural: 'advocats', gender: 'm', vowel: true },
    { cat: 'jobs', fr: 'le conducteur', fr_p: 'les conducteurs', es: 'el conductor', es_p: 'los conductores', ca: 'conductor', plural: 'conductors', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'l\'ingénieur', fr_p: 'les ingénieurs', es: 'el ingeniero', es_p: 'los ingenieros', ca: 'enginyer', plural: 'enginyers', gender: 'm', vowel: true },
    { cat: 'jobs', fr: 'le charpentier', fr_p: 'les charpentiers', es: 'el carpintero', es_p: 'los carpinteros', ca: 'fuster', plural: 'fusters', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le peintre', fr_p: 'les peintres', es: 'el pintor', es_p: 'los pintores', ca: 'pintor', plural: 'pintors', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le jardinier', fr_p: 'les jardiniers', es: 'el jardinero', es_p: 'los jardineros', ca: 'jardiner', plural: 'jardiners', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le vendeur', fr_p: 'les vendeurs', es: 'el vendedor', es_p: 'los vendedores', ca: 'venedor', plural: 'venedors', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'l\'écrivain', fr_p: 'les écrivains', es: 'el escritor', es_p: 'los escritores', ca: 'escriptor', plural: 'escriptors', gender: 'm', vowel: true },
    { cat: 'jobs', fr: 'le musicien', fr_p: 'les musiciens', es: 'el músico', es_p: 'los músicos', ca: 'músic', plural: 'músics', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le photographe', fr_p: 'les photographes', es: 'el fotógrafo', es_p: 'los fotógrafos', ca: 'fotògraf', plural: 'fotògrafs', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'l\'étudiant', fr_p: 'les étudiants', es: 'el estudiante', es_p: 'los estudiantes', ca: 'estudiant', plural: 'estudiants', gender: 'm', vowel: true },
    { cat: 'jobs', fr: 'le coiffeur', fr_p: 'les coiffeurs', es: 'el peluquero', es_p: 'los peluqueros', ca: 'perruquer', plural: 'perruquers', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le boucher', fr_p: 'les bouchers', es: 'el carnicero', es_p: 'los carniceros', ca: 'carnisser', plural: 'carnissers', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le mécanicien', fr_p: 'les mécaniciens', es: 'el mecánico', es_p: 'los mecánicos', ca: 'mecànic', plural: 'mecànics', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'l\'électricien', fr_p: 'les électriciens', es: 'el electricista', es_p: 'los electricistas', ca: 'electricista', plural: 'electricistes', gender: 'm', vowel: true },
    { cat: 'jobs', fr: 'le plombier', fr_p: 'les plombiers', es: 'el fontanero', es_p: 'los fontaneros', ca: 'fontaner', plural: 'fontaners', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le dentiste', fr_p: 'les dentistes', es: 'el dentista', es_p: 'los dentistas', ca: 'dentista', plural: 'dentistes', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le vétérinaire', fr_p: 'les vétérinaires', es: 'el veterinario', es_p: 'los veterinarios', ca: 'veterinari', plural: 'veterinaris', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'l\'acteur', fr_p: 'les acteurs', es: 'el actor', es_p: 'los actores', ca: 'actor', plural: 'actors', gender: 'm', vowel: true },
    { cat: 'jobs', fr: 'le fermier', fr_p: 'les fermiers', es: 'el granjero', es_p: 'los granjeros', ca: 'granter', plural: 'granters', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le maçon', fr_p: 'les maçons', es: 'el albañil', es_p: 'los albañiles', ca: 'paleta', plural: 'paletes', gender: 'm', vowel: false },
    { cat: 'jobs', fr: 'le pilote', fr_p: 'les pilotes', es: 'el piloto', es_p: 'los pilotos', ca: 'pilot', plural: 'pilots', gender: 'm', vowel: false },
]
    // --- TRANSPORTS (30 mots) ---
const TRANSP_BDD = [
    { cat: 'transp', fr: 'la voiture', fr_p: 'les voitures', es: 'el coche', es_p: 'los coches', ca: 'cotxe', plural: 'cotxes', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le vélo', fr_p: 'les vélos', es: 'la bicicleta', es_p: 'las bicicletas', ca: 'bicicleta', plural: 'bicicletes', gender: 'f', vowel: false },
    { cat: 'transp', fr: 'le bus', fr_p: 'les bus', es: 'el autobús', es_p: 'los autobuses', ca: 'autobús', plural: 'autobusos', gender: 'm', vowel: true },
    { cat: 'transp', fr: 'le train', fr_p: 'les trains', es: 'el tren', es_p: 'los trenes', ca: 'tren', plural: 'trens', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'l\'avion', fr_p: 'les avions', es: 'el avión', es_p: 'los aviones', ca: 'avió', plural: 'avions', gender: 'm', vowel: true },
    { cat: 'transp', fr: 'le bateau', fr_p: 'les bateaux', es: 'el barco', es_p: 'los barcos', ca: 'vaixell', plural: 'vaixells', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le métro', fr_p: 'les métros', es: 'el metro', es_p: 'los metros', ca: 'metro', plural: 'metros', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'la moto', fr_p: 'les motos', es: 'la moto', es_p: 'las motos', ca: 'moto', plural: 'motos', gender: 'f', vowel: false },
    { cat: 'transp', fr: 'le camion', fr_p: 'les camions', es: 'el camión', es_p: 'los camiones', ca: 'camió', plural: 'camions', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le tramway', fr_p: 'les tramways', es: 'el tranvía', es_p: 'los tranvías', ca: 'tramvia', plural: 'tramvies', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le taxi', fr_p: 'les taxis', es: 'el taxi', es_p: 'los taxis', ca: 'taxi', plural: 'taxis', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'l\'hélicoptère', fr_p: 'les hélicoptères', es: 'el helicóptero', es_p: 'los helicópteros', ca: 'helicòpter', plural: 'helicòpters', gender: 'm', vowel: true },
    { cat: 'transp', fr: 'la trottinette', fr_p: 'les trottinettes', es: 'el patinete', es_p: 'los patinetes', ca: 'patinet', plural: 'patinets', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'la fusée', fr_p: 'les fusées', es: 'el cohete', es_p: 'los cohetes', ca: 'coet', plural: 'coets', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le paquebot', fr_p: 'les paquebots', es: 'el crucero', es_p: 'los cruceros', ca: 'creuer', plural: 'creuers', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le canoë', fr_p: 'les canoës', es: 'la canoa', es_p: 'las canoas', ca: 'canoa', plural: 'canoes', gender: 'f', vowel: false },
    { cat: 'transp', fr: 'le tracteur', fr_p: 'les tracteurs', es: 'el tractor', es_p: 'los tractores', ca: 'tractor', plural: 'tractors', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'l\'ambulance', fr_p: 'les ambulances', es: 'la ambulancia', es_p: 'las ambulancias', ca: 'ambulància', plural: 'ambulàncies', gender: 'f', vowel: true },
    { cat: 'transp', fr: 'la dépanneuse', fr_p: 'les dépanneuses', es: 'la grúa', es_p: 'las grúas', ca: 'grua', plural: 'grues', gender: 'f', vowel: false },
    { cat: 'transp', fr: 'la montgolfière', fr_p: 'les montgolfières', es: 'el globo', es_p: 'los globos', ca: 'globus', plural: 'globus', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le sous-marin', fr_p: 'les sous-marins', es: 'el submarino', es_p: 'los submarinos', ca: 'submarí', plural: 'submarins', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le ferry', fr_p: 'les ferries', es: 'el ferry', es_p: 'los ferries', ca: 'ferri', plural: 'ferris', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'la camionnette', fr_p: 'les camionnettes', es: 'la furgoneta', es_p: 'las furgonetas', ca: 'furgoneta', plural: 'furgonetes', gender: 'f', vowel: false },
    { cat: 'transp', fr: 'le skateboard', fr_p: 'les skateboards', es: 'el monopatín', es_p: 'los monopatines', ca: 'monopatí', plural: 'monopatins', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le carrosse', fr_p: 'les carrosses', es: 'el carruaje', es_p: 'los carruajes', ca: 'carrossa', plural: 'carrosses', gender: 'f', vowel: false },
    { cat: 'transp', fr: 'le yacht', fr_p: 'les yachts', es: 'el yate', es_p: 'los yates', ca: 'iot', plural: 'iots', gender: 'm', vowel: true },
    { cat: 'transp', fr: 'la caravane', fr_p: 'les caravanes', es: 'la caravana', es_p: 'las caravanas', ca: 'caravana', plural: 'caravanes', gender: 'f', vowel: false },
    { cat: 'transp', fr: 'le téléphérique', fr_p: 'les téléphériques', es: 'el teleférico', es_p: 'los teleféricos', ca: 'telefèric', plural: 'telefèrics', gender: 'm', vowel: false },
    { cat: 'transp', fr: 'le deltaplane', fr_p: 'les deltaplanes', es: 'el ala delta', es_p: 'las alas delta', ca: 'ala delta', plural: 'ales delta', gender: 'f', vowel: true },
    { cat: 'transp', fr: 'le traîneau', fr_p: 'les traîneaux', es: 'el trineo', es_p: 'los trineos', ca: 'trineu', plural: 'trineus', gender: 'm', vowel: false }
];

// Concaténation des DB
const VOCAB_DB = [
    ...FRUITS_BDD,
    ...ANIMALS_BDD,
    ...BODY_BDD,
    ...CITY_BDD,
    ...FAMILY_BDD,
    ...FOOD_BDD,
    ...HOUSE_BDD,
    ...JOBS_BDD,
    ...PREPO_BDD,
    ...TRANSP_BDD
];


/**
 * Base de données des pièges manuels.
 * s: pièges pour le singulier, p: pièges pour le pluriel.
 * Les pièges ne contiennent PAS l'article, il sera ajouté par le moteur.
 */


    // --- 1. FRUITS & LÉGUMES ---
const TRAPS_FRUITS = {
    // --- FRUITS ---
    'poma': { s: ['pome', 'pumma', 'pomma'], p: ['pomas', 'pumes', 'pummes'] },
    'llimona': { s: ['limona', 'llimone', 'llimonaa'], p: ['limones', 'llimonas', 'llimonnes'] },
    'albercoc': { s: ['albercoch', 'albercocq', 'albercocat'], p: ['albercoques', 'albercocs', 'albercochs'] },
    'plàtan': { s: ['platan', 'platàn', 'platano'], p: ['platans', 'platanos', 'platannes'] },
    'taronja': { s: ['tarongia', 'taronia', 'naranya'], p: ['taronges', 'tarongias', 'tarongas'] },
    'maduixa': { s: ['maduixe', 'maduisa', 'maduixa'], p: ['maduixes', 'maduixas', 'maduises'] },
    'pera': { s: ['pere', 'perra', 'perea'], p: ['peres', 'peras', 'perres'] },
    'raïm': { s: ['raim', 'raím', 'rahim'], p: ['raïms', 'raims', 'rahims'] },
    'cirera': { s: ['sirera', 'cirere', 'chirera'], p: ['cireres', 'sireres', 'cireras'] },
    'síndria': { s: ['sindria', 'sindria', 'sandia'], p: ['síndries', 'sindrias', 'sindries'] },
    'préssec': { s: ['pressec', 'presec', 'préssech'], p: ['préssecs', 'presecs', 'pressechs'] },
    'pinya': { s: ['piña', 'pinye', 'pina'], p: ['pinyes', 'piñas', 'pines'] },
    'pruna': { s: ['prua', 'prune', 'prunna'], p: ['prunes', 'prunas', 'prunnes'] },
    'gerd': { s: ['gert', 'jerd', 'ger'], p: ['gerds', 'gerts', 'jerds'] },
    'advocat': { s: ['abogat', 'advocat', 'alvocat'], p: ['advocats', 'abogats', 'alvocats'] },

    // --- LÉGUMES ---
    'tomàquet': { s: ['tomaquet', 'tomaca', 'tomaque'], p: ['tomàquets', 'tomaquets', 'tomacas'] },
    'patata': { s: ['patate', 'patat', 'patata'], p: ['patates', 'patatas', 'patatttes'] },
    'pastanaga': { s: ['pastanaja', 'pastanaya', 'pastanaga'], p: ['pastanagues', 'pastanagas', 'pastanajes'] },
    'ceba': { s: ['cebe', 'seba', 'ceba'], p: ['cebes', 'sebes', 'cebas'] },
    'all': { s: ['al', 'ahl', 'ai'], p: ['alls', 'als', 'ahls'] },
    'pebrot': { s: ['peprot', 'pebroth', 'piment'], p: ['pebrots', 'peprots', 'piments'] },
    'albergínia': { s: ['alberginia', 'albergina', 'alverginia'], p: ['albergínies', 'alberginias', 'alverginies'] },
    'calabassó': { s: ['calabasso', 'calabassu', 'calabazo'], p: ['calabassons', 'calabassos', 'calabazos'] },
    'cogombre': { s: ['cogombere', 'cugombre', 'cogonbre'], p: ['cogombres', 'cugombres', 'cogonbres'] },
    'mongeta': { s: ['monjeta', 'mungeta', 'mongeta'], p: ['mongetes', 'monjetes', 'mongetas'] },
    'pèsol': { s: ['pesol', 'pessol', 'pesul'], p: ['pèsols', 'pesols', 'pessols'] },
    'bolet': { s: ['bullet', 'bolet', 'boleta'], p: ['bolets', 'bullets', 'boletes'] },
    'espinac': { s: ['espinach', 'espinac', 'espinaca'], p: ['espinacs', 'espinachs', 'espinacas'] },
    'col': { s: ['coll', 'cole', 'kohl'], p: ['cols', 'colls', 'coles'] },
    'blat de moro': { s: ['blat de moru', 'blad de moro', 'blat de mure'], p: ['blats de moro', 'blats de moru', 'blads de moro'] }
};

/// PREPOSITIONS
const TRAPS_PREPO = {
    'sobre': { s: ['subre', 'sobre de', 'sobra'] },
    'sota': { s: ['suta', 'sota de', 'sote'] },
    'dins': { s: ['dintra', 'dens', 'dins de'] },
    'fora': { s: ['fura', 'fora de', 'fure'] },
    'davant': { s: ['davan', 'devant', 'davans'] },
    'darrere': { s: ['detras', 'darrera', 'darere'] },
    'al costat de': { s: ['al costat', 'al coustat de', 'al costat da'] },
    'entre': { s: ['enter', 'intra', 'entre de'] },
    'a prop de': { s: ['aprop de', 'a prop', 'prop de'] },
    'lluny de': { s: ['llun de', 'lluny', 'luny de'] },
    'a la dreta': { s: ['a la drecha', 'a la drete', 'a la dret'] },
    'a l\'esquerra': { s: ['a la esquerra', 'a l\'esquerre', 'a l\'izquerra'] },
    'al voltant de': { s: ['al voltant', 'al vulte de', 'al voltan de'] },
    'cap a': { s: ['caps a', 'hacia', 'cap'] },
    'fins a': { s: ['fins', 'fina a', 'hasta'] },
    'durant': { s: ['duran', 'durat', 'mentre'] },
    'després': { s: ['despres', 'despreus', 'despuis'] },
    'abans': { s: ['abant', 'abans de', 'antes'] },
    'amb': { s: ['ambé', 'an', 'amb la'] },
    'sense': { s: ['sens', 'sensa', 'sin'] },
    'per a': { s: ['pera', 'per a de', 'pàra'] },
    'per': { s: ['perque', 'par', 'per de'] },
    'contra': { s: ['contri', 'contra de', 'conture'] },
    'mentre': { s: ['mentres', 'mientra', 'mentre de'] },
    'cada': { s: ['cade', 'cadascun', 'quada'] },
    'arreu': { s: ['arreu de', 'arreus', 'partot'] },
    'en algun lloc': { s: ['algun lloc', 'en algun llocs', 'alguns llocs'] }
};



/// VILLE ET COMMERCES

const TRAPS_CITY = {
    'fleca': { s: ['fleque', 'fleka', 'panaderia'], p: ['flecas', 'flekes', 'fleques'] },
    'carnisseria': { s: ['carniceria', 'carnisseria', 'carnisaria'], p: ['carnisseries', 'carnisserias', 'carnisarias'] },
    'farmàcia': { s: ['farmacia', 'farmàcia', 'farmacie'], p: ['farmàcies', 'farmacies', 'farmacias'] },
    'escola': { s: ['escole', 'scola', 'escuela'], p: ['escoles', 'escolas', 'escollas'] },
    'estació': { s: ['estacio', 'estassió', 'estacion'], p: ['estacions', 'estacios', 'estacions'] },
    'ajuntament': { s: ['ajuntament', 'ayuntament', 'ajuntamen'], p: ['ajuntaments', 'ajuntamens', 'ayuntaments'] },
    'biblioteca': { s: ['viblioteca', 'biblioteque', 'biblioteca'], p: ['biblioteques', 'bibliotecas', 'viblioteques'] },
    'església': { s: ['esglesia', 'església', 'iglesia'], p: ['esglésies', 'esglesies', 'esglésias'] },
    'botiga': { s: ['votiya', 'botique', 'botiga'], p: ['botigues', 'botigas', 'botiyes'] },
    'peixateria': { s: ['peixeteria', 'peixateria', 'pescateria'], p: ['peixateries', 'peixaterias', 'peixeteries'] },
    'ferreteria': { s: ['ferreteri', 'farrateria', 'ferreteria'], p: ['ferreteries', 'ferreterias', 'farrateries'] },
    'fruiteria': { s: ['fruteria', 'fruiteria', 'fruitaria'], p: ['fruiteries', 'fruiterias', 'fruiteries'] },
    'llibreria': { s: ['libreria', 'llibreria', 'llibraria'], p: ['llibreries', 'llibrerias', 'llibreries'] },
    'plaça': { s: ['plassa', 'placa', 'plaza'], p: ['places', 'placas', 'plasses'] },
    'carrer': { s: ['carrera', 'carer', 'calle'], p: ['carrers', 'carers', 'carreres'] },
    'museu': { s: ['museo', 'musseu', 'museue'], p: ['museus', 'musseus', 'museos'] },
    'cinema': { s: ['cine', 'sinema', 'ciname'], p: ['cinemes', 'cines', 'sinemes'] },
    'teatre': { s: ['teatro', 'teatra', 'teatre'], p: ['teatres', 'teatros', 'teatras'] },
    'jardí': { s: ['jardi', 'jardín', 'jardine'], p: ['jardins', 'jardis', 'jardines'] },
    'estanc': { s: ['estanquet', 'estanch', 'estanc'], p: ['estancs', 'estancqs', 'estanchs'] },
    'benzinera': { s: ['gasolinera', 'benzinere', 'vunzinera'], p: ['benzineres', 'benzineras', 'vunzineres'] }
};

/// CORPS HUMAIN 

const TRAPS_BODY = {
    // --- TÊTE ET VISAGE ---
    'cos': { s: ['corp', 'cós', 'corps'], p: ['cossos', 'coses', 'cors'] },
    'cap': { s: ['càp', 'cab', 'cape'], p: ['caps', 'capses', 'cappes'] },
    'cara': { s: ['care', 'carra', 'caro'], p: ['cares', 'caras', 'carres'] },
    'ull': { s: ['uy', 'uil', 'uyll'], p: ['ulls', 'uylls', 'uils'] },
    'orella': { s: ['oreya', 'urella', 'oreja'], p: ['orelles', 'oreyas', 'urelles'] },
    'nas': { s: ['nàs', 'naz', 'nass'], p: ['nassos', 'nasos', 'nases'] },
    'boca': { s: ['boque', 'bucca', 'voca'], p: ['boques', 'bocas', 'bucces'] },
    'dent': { s: ['den', 'denta', 'dend'], p: ['dents', 'dentes', 'denz'] },
    'llengua': { s: ['lengua', 'llengue', 'llengüa'], p: ['llengües', 'llenguas', 'lengües'] },
    'coll': { s: ['col', 'cull', 'collo'], p: ['colls', 'cols', 'culls'] },
    'cabell': { s: ['cabeil', 'cabellu', 'pelo'], p: ['cabells', 'cabeils', 'cabellues'] },
    'cervell': { s: ['servei', 'cervel', 'cervello'], p: ['cervells', 'serveis', 'cervels'] },
    'gola': { s: ['gole', 'golla', 'gorja'], p: ['goles', 'golas', 'golles'] },

    // --- TRONC ET MEMBRES ---
    'espatlla': { s: ['espatla', 'espatllia', 'espatlla'], p: ['espatlles', 'espatles', 'espatllies'] },
    'braç': { s: ['bras', 'brac', 'brazo'], p: ['braços', 'bracos', 'brasses'] },
    'colze': { s: ['colse', 'colzo', 'culze'], p: ['colzes', 'colses', 'colzos'] },
    'mà': { s: ['ma', 'màn', 'mano'], p: ['manos', 'mantes', 'manes'] },
    'dit': { s: ['dith', 'did', 'dito'], p: ['dits', 'diths', 'ditos'] },
    'ungla': { s: ['uña', 'uncla', 'ungle'], p: ['ungles', 'unyas', 'uncles'] },
    'pit': { s: ['pith', 'pitt', 'pecho'], p: ['pits', 'piths', 'pittes'] },
    'panxa': { s: ['pansa', 'panxe', 'barriga'], p: ['panxes', 'pansas', 'panxas'] },
    'esquena': { s: ['esquene', 'eskena', 'esquena'], p: ['esquenes', 'esquenas', 'eskenes'] },
    'cama': { s: ['came', 'gamma', 'pierna'], p: ['cames', 'camas', 'gammes'] },
    'genoll': { s: ['genoy', 'jenoll', 'rodilla'], p: ['genolls', 'genoys', 'jenolls'] },
    'peu': { s: ['peun', 'peo', 'peuw'], p: ['peus', 'peuns', 'peos'] },

    // --- INTERNE ET PEAU ---
    'cor': { s: ['core', 'corr', 'coron'], p: ['cors', 'cores', 'corrs'] },
    'sang': { s: ['sanch', 'sangre', 'sanc'], p: ['sans', 'sanchs', 'sangres'] },
    'os': { s: ['òs', 'oss', 'hueso'], p: ['ossos', 'osos', 'òssos'] },
    'múscul': { s: ['muscul', 'mussul', 'musclo'], p: ['músculs', 'musculs', 'musclos'] },
    'pell': { s: ['pel', 'peil', 'pelle'], p: ['pells', 'pels', 'peils'] }
};



/// OBJETS DE LA MAISON
const TRAPS_HOUSE = {
    'casa': { s: ['case', 'cassa', 'cass'], p: ['casas', 'casses', 'casse'] },
    'habitació': { s: ['habitacio', 'habitassió', 'habitacion'], p: ['habitacions', 'habitacios', 'habitassions'] },
    'cuina': { s: ['cuine', 'quina', 'cuinaa'], p: ['cuines', 'cuinas', 'quines'] },
    'saló': { s: ['salo', 'salon', 'salóo'], p: ['salons', 'salos', 'salones'] },
    'bany': { s: ['bañ', 'banh', 'banyy'], p: ['banys', 'baños', 'banhs'] },
    'taula': { s: ['taule', 'tabla', 'taul'], p: ['taules', 'taulas', 'taulles'] },
    'cadira': { s: ['cadire', 'cadiraa', 'silla'], p: ['cadires', 'cadiras', 'cadirres'] },
    'llit': { s: ['lit', 'llith', 'llito'], p: ['llits', 'lits', 'llittes'] },
    'armari': { s: ['armari', 'almari', 'armario'], p: ['armaris', 'almaris', 'armarios'] },
    'sofà': { s: ['sofa', 'sofae', 'sofàa'], p: ['sofàs', 'sofas', 'sofanes'] },
    'finestra': { s: ['finestre', 'finestraa', 'ventana'], p: ['finestres', 'finestras', 'finestrees'] },
    'paret': { s: ['pared', 'pareth', 'parete'], p: ['parets', 'pareds', 'paretes'] },
    'terra': { s: ['terre', 'terro', 'suelo'], p: ['terres', 'terras', 'terrees'] },
    'teulada': { s: ['teulade', 'tejada', 'teuladaa'], p: ['teulades', 'teuladas', 'teulades'] },
    'escala': { s: ['escale', 'scala', 'escalon'], p: ['escales', 'escalas', 'escalles'] },
    'mirall': { s: ['mirai', 'mirallu', 'espejo'], p: ['miralls', 'mirais', 'mirallues'] },
    'catifa': { s: ['catife', 'alfombra', 'catiffa'], p: ['catifes', 'catifas', 'catiffes'] },
    'cortina': { s: ['cortine', 'curtina', 'cortinaa'], p: ['cortines', 'curtines', 'cortinas'] },
    'llum': { s: ['lum', 'lluma', 'llume'], p: ['llums', 'lums', 'llumes'] },
    'nevera': { s: ['nevere', 'nevarra', 'neveraa'], p: ['neveres', 'neveras', 'nevarres'] },
    'forn': { s: ['furn', 'forne', 'horno'], p: ['forns', 'furns', 'hornos'] },
    'rentadora': { s: ['lavadora', 'rentadore', 'rentadoraa'], p: ['rentadores', 'lavadoras', 'rentadoras'] },
    'vaixella': { s: ['vaixela', 'vaixellia', 'vajilla'], p: ['vaixelles', 'vaixelas', 'vajilles'] },
    'got': { s: ['god', 'goth', 'vaso'], p: ['gots', 'gods', 'vasos'] },
    'plat': { s: ['plath', 'plato', 'platt'], p: ['plats', 'plathes', 'platos'] },
    'forquilla': { s: ['forquila', 'forquilia', 'tenedor'], p: ['forquilles', 'forquilas', 'forquilies'] },
    'ganivet': { s: ['ganiveth', 'ganivet', 'cuchillo'], p: ['ganivets', 'ganiveths', 'ganivetes'] },
    'cullera': { s: ['cullere', 'culleraa', 'cuchara'], p: ['culleres', 'culleras', 'culleres'] },
    'tovallola': { s: ['tovallola', 'tuallola', 'toalla'], p: ['tovalloles', 'tualloles', 'toalles'] }
};

///ANIMAUX
const TRAPS_ANIMALS = {
    'gos': { s: ['gós', 'goos', 'gosso'], p: ['gosos', 'gosses', 'gossos p'] },
    'gat': { s: ['gad', 'gath', 'gato'], p: ['gats', 'gads', 'gatos'] },
    'ocell': { s: ['ocel', 'usayl', 'ocellu'], p: ['ocells', 'ocels', 'usayls'] },
    'cavall': { s: ['cavai', 'caval', 'caballo'], p: ['cavalls', 'cavais', 'cavals'] },
    'vaca': { s: ['vaque', 'vacka', 'vacaa'], p: ['vaques', 'vacas', 'vaquas'] },
    'ovella': { s: ['oveya', 'uvella', 'oveja'], p: ['ovelles', 'oveyas', 'ovellas'] },
    'conill': { s: ['conit', 'conitll', 'conil'], p: ['conills', 'conits', 'conils'] },
    'peix': { s: ['peitx', 'peis', 'pexe'], p: ['peixos', 'peixs', 'peisos'] },
    'lleó': { s: ['lleo', 'leon', 'lleone'], p: ['lleons', 'lleos', 'leones'] },
    'os': { s: ['òs', 'oss', 'oso'], p: ['ossos', 'osos', 'òssos'] },
    'ratolí': { s: ['ratoli', 'ratolin', 'ratolín'], p: ['ratolins', 'ratolis', 'ratolines'] },
    'serp': { s: ['serpe', 'sarp', 'serpiente'], p: ['serps', 'serpes', 'sarps'] },
    'granota': { s: ['granote', 'rana', 'granotaa'], p: ['granotes', 'granotas', 'granotes'] },
    'aranya': { s: ['araña', 'aranye', 'arana'], p: ['aranyes', 'arañas', 'aranes'] },
    'abella': { s: ['abeya', 'abeja', 'abellu'], p: ['abelles', 'abeyas', 'abellas'] },
    'mosca': { s: ['mosque', 'musca', 'moscaa'], p: ['mosques', 'moscas', 'musques'] },
    'papallona': { s: ['papallone', 'mariposa', 'papayona'], p: ['papallones', 'papallonas', 'papayones'] },
    'pollastre': { s: ['poyastre', 'pollastre', 'pollo'], p: ['pollastres', 'poyastres', 'pollastros'] },
    'ànec': { s: ['anec', 'ànech', 'pato'], p: ['ànecs', 'anecs', 'ànechs'] },
    'guineu': { s: ['guineo', 'guineuh', 'zorro'], p: ['guineus', 'guineos', 'guineues'] },
    'dofí': { s: ['dofi', 'dofin', 'delfin'], p: ['dofins', 'dofis', 'dofines'] },
    'tauró': { s: ['tauro', 'tauron', 'tiburon'], p: ['taurons', 'tauros', 'taurones'] },
    'formiga': { s: ['formigue', 'hormiga', 'formiya'], p: ['formigues', 'formigas', 'formiyes'] }
};

///NOURRITURE
const TRAPS_FOOD = {
    'pa': { s: ['pan', 'pà', 'pau'], p: ['pans', 'pas', 'pannes'] },
    'formatge': { s: ['formatje', 'formage', 'formatxe'], p: ['formatges', 'formatjes', 'formages'] }, // Corrigé doublon
    'llet': { s: ['lleit', 'leche', 'lled'], p: ['llets', 'lleits', 'leches'] },
    'ou': { s: ['uou', 'huevo', 'uov'], p: ['ous', 'oues', 'uoves'] },
    'mantega': { s: ['mantequilla', 'mantegue', 'mantegua'], p: ['mantegues', 'mantegas', 'manteges'] }, // Corrigé doublon
    'arròs': { s: ['arros', 'arroz', 'arros s'], p: ['arrossos', 'arrosos', 'arroces'] },
    'pasta': { s: ['paste', 'passta', 'pastta'], p: ['pastes', 'pastas', 'passtes'] }, // Corrigé doublon
    'pollastre': { s: ['pollo', 'poyastre', 'pollastre s'], p: ['pollastres', 'poyastres', 'pollastros'] },
    'peix': { s: ['peitx', 'peis', 'pexe'], p: ['peixos', 'peixs', 'peisos'] },
    'oli': { s: ['oyli', 'olis', 'aceite'], p: ['olis', 'oylis', 'olies'] },
    'iogurt': { s: ['yogurt', 'iogur', 'jogurt'], p: ['iogurts', 'yogures', 'iogurs'] }, // Corrigé doublon
    'melmelada': { s: ['marmelada', 'mermelada', 'melmelade'], p: ['melmelades', 'marmelades', 'melmeladas'] },
    'xocolata': { s: ['chocolata', 'xocolat', 'xocolate'], p: ['xocolates', 'chocolates', 'xocolatas'] },
    'aigua': { s: ['aigue', 'agua', 'aygua'], p: ['aigües', 'aiguas', 'aygües'] },
    'cervesa': { s: ['cerveza', 'cervese', 'servesa'], p: ['cerveses', 'cervezas', 'serveses'] },
    'suc': { s: ['sumo', 'zumo', 'succh'], p: ['sucs', 'sumos', 'sucques'] },
    'cafè': { s: ['cafe', 'café', 'cafée'], p: ['cafès', 'cafes', 'cafés'] },
    'pernil': { s: ['parnil', 'jamon', 'pernill'], p: ['pernils', 'perniles', 'parnils'] },
    'embotit': { s: ['embutit', 'ambotit', 'embutid'], p: ['embotits', 'embutits', 'ambotits'] } // Corrigé doublon
};


///FAMILLE
const TRAPS_FAMILY = {
    'família': { s: ['familia', 'família', 'famili'], p: ['famílies', 'familias', 'families'] },
    'pare': { s: ['paree', 'parre', 'pari'], p: ['pares', 'parres', 'parires'] },
    'mare': { s: ['maree', 'marre', 'mari'], p: ['mares', 'marres', 'marires'] },
    'fill': { s: ['fiy', 'fil', 'fillu'], p: ['fills', 'fiyes', 'fils'] },
    'filla': { s: ['fiya', 'fille', 'fillaa'], p: ['filles', 'fiyas', 'fillas'] },
    'germà': { s: ['germa', 'germàn', 'jermà'], p: ['germans', 'germàns', 'jermans'] },
    'germana': { s: ['jermana', 'germane', 'germana s'], p: ['germanes', 'jermanes', 'germanas'] },
    'avi': { s: ['abi', 'aví', 'avue'], p: ['avis', 'abis', 'avues'] },
    'àvia': { s: ['avia', 'àvia s', 'avue'], p: ['àvies', 'avias', 'avies'] },
    'tia': { s: ['tía', 'tie', 'tiee'], p: ['ties', 'tías', 'tiees'] },
    'cosí': { s: ['cosi', 'cousí', 'primo'], p: ['cosins', 'cosis', 'cousins'] },
    'nebot': { s: ['nevot', 'neboth', 'sobrino'], p: ['nebots', 'nevots', 'nebothes'] },
    'neboda': { s: ['nevoda', 'nebode', 'sobrina'], p: ['nebodes', 'nevodas', 'nebodes'] },
    'nadó': { s: ['nado', 'bebe', 'nadón'], p: ['nadons', 'nados', 'bebes'] },
    'home': { s: ['ome', 'homo', 'humme'], p: ['homes', 'omes', 'homos'] },
    'senyora': { s: ['señora', 'senyore', 'senyoraa'], p: ['senyores', 'señoras', 'senyoras'] }
};


///METIERS

const TRAPS_JOBS = {
    'professor': { s: ['profesor', 'professó', 'professore'], p: ['professores', 'professors', 'profesors'] },
    'metge': { s: ['metxe', 'medico', 'metje'], p: ['metges', 'metxes', 'medicos'] },
    'infermer': { s: ['enfermer', 'inferme', 'infermèr'], p: ['infermers', 'enfermers', 'infermèrs'] },
    'policia': { s: ['pulisia', 'polici', 'policía'], p: ['policies', 'policias', 'pulisies'] },
    'bomber': { s: ['bombero', 'bomve', 'bombèr'], p: ['bombers', 'bomberos', 'bomvès'] },
    'flequer': { s: ['panader', 'fleque', 'flequèr'], p: ['flequers', 'panaders', 'flequès'] },
    'cuiner': { s: ['cuiner', 'cociner', 'cuine'], p: ['cuiners', 'cociners', 'cuines'] },
    'cambrer': { s: ['camarer', 'cambrè', 'cambrere'], p: ['cambrers', 'camarers', 'cambrès'] },
    'advocat': { s: ['abocat', 'advocad', 'abogado'], p: ['advocats', 'abocats', 'advocads'] },
    'conductor': { s: ['conductó', 'condutor', 'conductere'], p: ['conductors', 'conductos', 'condutores'] },
    'enginyer': { s: ['enginyè', 'ingenyer', 'enginyere'], p: ['enginyers', 'ingenyers', 'enginyeres'] },
    'fuster': { s: ['fusté', 'carpinter', 'fuste'], p: ['fusters', 'fustés', 'carpinters'] },
    'pintor': { s: ['pinto', 'pintore', 'pintòr'], p: ['pintors', 'pintos', 'pintores'] },
    'jardiner': { s: ['jardinèr', 'jardinero', 'jardine'], p: ['jardiners', 'jardinèrs', 'jardineros'] },
    'venedor': { s: ['venedó', 'vendedor', 'venedore'], p: ['venedors', 'venedóos', 'vendedores'] },
    'escriptor': { s: ['escritor', 'escritó', 'escriptore'], p: ['escriptors', 'escritors', 'escriptores'] },
    'músic': { s: ['music', 'musico', 'mùsic'], p: ['músics', 'musics', 'musicos'] },
    'fotògraf': { s: ['fotograf', 'fotografo', 'fotògrafu'], p: ['fotògrafs', 'fotografs', 'fotografos'] },
    'estudiant': { s: ['estudian', 'estudiat', 'estudiante'], p: ['estudiants', 'estudians', 'estudiants'] },
    'perruquer': { s: ['peluquer', 'perruquèr', 'perruque'], p: ['perruquers', 'peluquers', 'perruquès'] },
    'carnisser': { s: ['carnicero', 'carnissèr', 'carnise'], p: ['carnissers', 'carniceros', 'carnissès'] },
    'mecànic': { s: ['mecanic', 'mecanico', 'mecànich'], p: ['mecànics', 'mecanics', 'mecanicos'] },
    'electricista': { s: ['alectricista', 'electriciste', 'electrisista'], p: ['electricistes', 'electrisistes', 'electricistas'] },
    'fontaner': { s: ['funtaner', 'fontanero', 'fontane'], p: ['fontaners', 'funtaners', 'fontaneros'] },
    'dentista': { s: ['dentiste', 'dentisto', 'dantissta'], p: ['dentistes', 'dentistas', 'dentistos'] },
    'veterinari': { s: ['veterinari', 'veterinario', 'vaterinari'], p: ['veterinaris', 'veterinarios', 'vaterinaris'] },
    'actor': { s: ['actó', 'actore', 'actorr'], p: ['actors', 'actóos', 'actores'] },
    'granter': { s: ['granjer', 'granté', 'grantere'], p: ['granters', 'granjers', 'grantés'] },
    'paleta': { s: ['palete', 'albañil', 'pallata'], p: ['paletes', 'paletas', 'pallates'] },
    'pilot': { s: ['pilote', 'piloto', 'piloth'], p: ['pilots', 'pilotes', 'pilotos'] }
};

/// TRANSPORTS 

const TRAPS_TRANSP = {
    'cotxe': { s: ['coche', 'cotxe', 'cotxea'], p: ['coches', 'cotxes', 'cotxas'] },
    'bicicleta': { s: ['biciclete', 'vici', 'bicicletta'], p: ['bicicletes', 'bicicletas', 'vicietes'] },
    'autobús': { s: ['autobus', 'autobuss', 'bus'], p: ['autobusos', 'autobuses', 'autobussos'] },
    'tren': { s: ['trene', 'trem', 'trenh'], p: ['trens', 'trenes', 'trems'] },
    'avió': { s: ['avio', 'avion', 'avión'], p: ['avions', 'avios', 'aviones'] },
    'vaixell': { s: ['vaixel', 'barco', 'vaixeill'], p: ['vaixells', 'vaixels', 'barcos'] },
    'metro': { s: ['metru', 'metró', 'metroe'], p: ['metros', 'metrus', 'metrones'] },
    'moto': { s: ['motu', 'moti', 'motoa'], p: ['motos', 'motus', 'moties'] },
    'camió': { s: ['camio', 'camion', 'camiò'], p: ['camions', 'camios', 'camiones'] },
    'tramvia': { s: ['tranvia', 'tramvie', 'tramviaa'], p: ['tramvies', 'tramvias', 'tranvies'] },
    'taxi': { s: ['tasi', 'taxie', 'tassi'], p: ['taxis', 'tasies', 'tassies'] },
    'helicòpter': { s: ['helicopter', 'elicopter', 'helicòptere'], p: ['helicòpters', 'helicopters', 'elicopters'] },
    'patinet': { s: ['patinete', 'patined', 'patineth'], p: ['patinets', 'patinetes', 'patineds'] },
    'coet': { s: ['cohet', 'cuet', 'coete'], p: ['coets', 'cohets', 'cuets'] },
    'creuer': { s: ['crucero', 'creuèr', 'creuere'], p: ['creuers', 'cruceros', 'creuères'] },
    'canoa': { s: ['canoe', 'canoo', 'canòa'], p: ['canoes', 'canoas', 'canoes'] },
    'tractor': { s: ['tractó', 'tractore', 'traktor'], p: ['tractors', 'tractoors', 'traktors'] },
    'ambulància': { s: ['ambulancia', 'ambulancie', 'ambulança'], p: ['ambulàncies', 'ambulancias', 'ambulancies'] },
    'grua': { s: ['grue', 'gruua', 'grúa'], p: ['grues', 'gruas', 'gruues'] },
    'globus': { s: ['globo', 'globusse', 'glubus'], p: ['globus', 'globos', 'glubus'] },
    'submarí': { s: ['submari', 'submarin', 'submarino'], p: ['submarins', 'submaris', 'submarines'] },
    'ferri': { s: ['ferry', 'ferrie', 'ferrim'], p: ['ferris', 'ferries', 'ferrims'] },
    'furgoneta': { s: ['furgonete', 'furgonetta', 'furgonetaa'], p: ['furgonetes', 'furgonetas', 'furgonettas'] },
    'monopatí': { s: ['monopati', 'monopatin', 'monopatín'], p: ['monopatins', 'monopatis', 'monopatines'] },
    'carrossa': { s: ['carrossa', 'carruaje', 'carrosa'], p: ['carrosses', 'carruajes', 'carroses'] },
    'iot': { s: ['yacht', 'yate', 'iote'], p: ['iots', 'yachts', 'yates'] },
    'caravana': { s: ['caravane', 'caravanna', 'caraban'], p: ['caravanes', 'caravanas', 'carabans'] },
    'telefèric': { s: ['teleferic', 'teleferico', 'telefèrich'], p: ['telefèrics', 'teleferics', 'telefericos'] },
    'ala delta': { s: ['ale delta', 'ala delte', 'alla delta'], p: ['ales delta', 'alas delta', 'ales deltes'] },
    'trineu': { s: ['trineo', 'trineuh', 'trineue'], p: ['trineus', 'trineos', 'trineuhs'] }
};

// Concaténation des DB pièges
const TRAPS_VOCAB_DB = {
    ...TRAPS_FRUITS,
    ...TRAPS_PREPO,
    ...TRAPS_CITY,
    ...TRAPS_BODY,
    ...TRAPS_HOUSE,
    ...TRAPS_ANIMALS,
    ...TRAPS_FOOD,
    ...TRAPS_FAMILY,
    ...TRAPS_JOBS,
    ...TRAPS_TRANSP
};
