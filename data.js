// ============================================================
//  DATA.JS — Contenu de révision UE & Crises (Sciences Po)
//  Basé sur la fiche de 46 pages
// ============================================================

// ---- THÈMES ------------------------------------------------
const THEMES = [
  { id: "intro",       label: "Intro & Chronologie",        icon: "📜" },
  { id: "instit",      label: "Institutions",               icon: "🏛️" },
  { id: "eco",         label: "Crises éco & financières",   icon: "💶" },
  { id: "geo",         label: "Géopolitique & Ukraine",     icon: "🌍" },
  { id: "migration",   label: "Migration & Élargissement",  icon: "🚪" },
  { id: "climat",      label: "Green Deal & Numérique",     icon: "🌿" },
  { id: "industrie",   label: "Autonomie industrielle",     icon: "🏭" },
  { id: "etatdroit",   label: "État de droit",              icon: "⚖️" },
  { id: "avenir",      label: "Euroscepticisme & Avenir",   icon: "🔮" },
];

// ---- QCM : 105 QUESTIONS -----------------------------------
const QUESTIONS = [

  // === INTRO & CHRONOLOGIE (12) ===
  {
    theme: "intro",
    question: "Qui a prononcé la phrase « J'ai toujours pensé que l'Europe se ferait dans les crises » ?",
    options: ["Jacques Delors", "Robert Schuman", "Jean Monnet", "Pierre Moscovici"],
    answer: 2,
    explanation: "Jean Monnet, père fondateur de l'Europe, est l'auteur de cette phrase matrice du cours. La formule complète : « L'Europe se fera dans les crises et elle sera la somme des solutions apportées à ces crises »."
  },
  {
    theme: "intro",
    question: "Quelle définition l'UE revendique-t-elle selon Jacques Delors, cité par Moscovici ?",
    options: ["Un État fédéral européen", "Une fédération d'États-nations", "Une organisation internationale classique", "Un marché commun élargi"],
    answer: 1,
    explanation: "« Nous sommes une fédération d'États-nations » — Jacques Delors. L'UE est un ovni institutionnel, à mi-chemin entre l'organisation internationale et l'État-nation."
  },
  {
    theme: "intro",
    question: "En quelle année le Parlement français rejette-t-il la Communauté Européenne de Défense (CED) ?",
    options: ["1950", "1952", "1954", "1957"],
    answer: 2,
    explanation: "1954 : le Parlement français rejette la CED, jugeant prématuré le réarmement allemand. Cet échec tue le projet de défense européenne pour 70 ans."
  },
  {
    theme: "intro",
    question: "La crise de la « chaise vide » de 1965 est provoquée par quel désaccord ?",
    options: ["Le financement de la PAC", "L'adhésion du Royaume-Uni", "La création de la BCE", "Le traité de Maastricht"],
    answer: 0,
    explanation: "De Gaulle refuse que la PAC soit davantage décidée au niveau européen. La France retire ses représentants du Conseil des ministres pendant 6 mois. Le Compromis de Luxembourg (1966) reconnaît un veto de fait des États sur les questions vitales."
  },
  {
    theme: "intro",
    question: "Quel est le résultat du référendum français sur le Traité de Maastricht (1992) ?",
    options: ["68 % oui", "62 % oui", "51 % oui / 49 % non", "55 % non"],
    answer: 2,
    explanation: "51 % oui / 49 % non. Un résultat très serré qui révèle les premiers clivages sociaux : ouvriers/ruraux contre, éduqués/urbains pour — préfigurant la carte du RN."
  },
  {
    theme: "intro",
    question: "Quel événement déclenche la crise des dettes souveraines en Europe ?",
    options: ["La faillite de Lehman Brothers", "La révélation des comptes falsifiés de la Grèce", "La démission de la Commission Santer", "Le Brexit"],
    answer: 1,
    explanation: "Octobre 2009 : le gouvernement Papandréou révèle que le déficit grec est de 12,7 % (révisé à 15,4 %) et non 3,7 %. Cette révélation déclenche la crise des dettes souveraines."
  },
  {
    theme: "intro",
    question: "Quel concept, popularisé par Juncker et théorisé par Edgar Morin, décrit l'interconnexion de crises systémiques qui s'amplifient mutuellement ?",
    options: ["Polycrise", "Méga-crise", "Crise existentielle", "Crise systémique"],
    answer: 0,
    explanation: "La polycrise : succession ininterrompue de crises économiques, sociales, sanitaires, géopolitiques et énergétiques depuis les années 2000. Notion popularisée par Jean-Claude Juncker, théorisée par Edgar Morin."
  },
  {
    theme: "intro",
    question: "Quel est le résultat du référendum sur le traité constitutionnel européen en France en 2005 ?",
    options: ["55 % non", "61,5 % non", "52 % non", "48 % non"],
    answer: 0,
    explanation: "55 % de non en France, 61,5 % aux Pays-Bas. Tous les électorats votent non sauf : retraités, cadres sup, jeunes, métropoles. Sarkozy fera ratifier le traité de Lisbonne par le Parlement en 2007."
  },
  {
    theme: "intro",
    question: "Combien de défis pour l'UE Moscovici identifie-t-il dans son cours ?",
    options: ["3", "4", "5", "7"],
    answer: 2,
    explanation: "5 défis : (1) crise démocratique des institutions, (2) économie atone, (3) inégalités sociales, (4) changement climatique, (5) voix dissonante dans le concert mondial."
  },
  {
    theme: "intro",
    question: "Quelle formule marque l'incapacité européenne à peser géopolitiquement, selon Mark Eyskens ?",
    options: ["L'Europe est un géant endormi", "L'Europe est un géant économique, un nain politique et un ver militaire", "L'Europe parle d'une voix mais agit à 27", "L'Europe se fait dans les crises"],
    answer: 1,
    explanation: "« Europe is an economic giant, a political dwarf and a military worm » — Mark Eyskens, ex-Premier ministre belge. Prononcée pendant la guerre du Golfe, la formule reste d'actualité."
  },
  {
    theme: "intro",
    question: "Le 24 février 2022, quelle action de la Russie constitue un tournant géopolitique majeur pour l'UE ?",
    options: ["L'annexion de la Crimée", "L'invasion à grande échelle de l'Ukraine", "L'exclusion du Conseil de l'Europe", "La rupture du gazoduc Nord Stream"],
    answer: 1,
    explanation: "24 février 2022 : invasion russe à grande échelle de l'Ukraine. Tournant majeur : 19+ paquets de sanctions, +138 Md€ d'aide UE, plan ReArm Europe (800 Md€), candidature ukrainienne à l'UE."
  },
  {
    theme: "intro",
    question: "Quelle innovation historique le plan NextGenerationEU (2020) introduit-il pour la première fois ?",
    options: ["La création de la BCE", "Un emprunt commun de l'UE sur les marchés", "Le vote à la majorité qualifiée", "La politique agricole commune"],
    answer: 1,
    explanation: "Pour la première fois, la Commission emprunte sur les marchés au nom de l'UE (750 Md€). Les Allemands acceptent une « union de transferts » — rupture avec le tabou des eurobonds."
  },

  // === INSTITUTIONS (16) ===
  {
    theme: "instit",
    question: "Combien d'institutions officielles compte l'UE selon l'Article 13 TUE ?",
    options: ["5", "6", "7", "9"],
    answer: 2,
    explanation: "7 institutions : Parlement européen, Conseil européen, Conseil de l'UE, Commission européenne, CJUE, BCE, Cour des comptes."
  },
  {
    theme: "instit",
    question: "Quel est le seul organe de l'UE élu directement par les citoyens ?",
    options: ["Le Conseil européen", "La Commission européenne", "Le Parlement européen", "Le Comité des Régions"],
    answer: 2,
    explanation: "Le Parlement européen est élu au suffrage universel direct depuis 1979. Il compte 720 députés depuis 2024. Simone Veil en fut la première présidente."
  },
  {
    theme: "instit",
    question: "Combien de députés européens la France compte-t-elle depuis 2024 ?",
    options: ["74", "76", "79", "81"],
    answer: 2,
    explanation: "79 députés français depuis les élections de juin 2024 — la France en a gagné 4 par rapport à 2019."
  },
  {
    theme: "instit",
    question: "Qui détient le monopole de l'initiative législative au sein de l'UE ?",
    options: ["Le Parlement européen", "Le Conseil européen", "La Commission européenne", "La CJUE"],
    answer: 2,
    explanation: "La Commission européenne détient le monopole de l'initiative législative (art. 17 TUE, 294 TFUE). Elle représente l'intérêt général de l'Union."
  },
  {
    theme: "instit",
    question: "Quelle jurisprudence fondatrice de 1963 consacre l'effet direct du droit de l'UE ?",
    options: ["Costa c/ ENEL", "Van Gend & Loos", "Cassis de Dijon", "Francovich"],
    answer: 1,
    explanation: "Van Gend & Loos (1963) : la CJUE consacre l'effet direct du droit de l'UE. Costa c/ ENEL (1964) consacre quant à lui la primauté du droit européen sur les droits nationaux."
  },
  {
    theme: "instit",
    question: "Quelle est la règle de vote à la majorité qualifiée au Conseil de l'UE depuis le Traité de Nice ?",
    options: ["50 % des États représentant 50 % de la population", "55 % des États représentant ≥ 65 % de la population", "2/3 des États représentant 75 % de la population", "Unanimité des États membres"],
    answer: 1,
    explanation: "Depuis Nice : majorité qualifiée = 55 % des États membres représentant au moins 65 % de la population de l'UE."
  },
  {
    theme: "instit",
    question: "Dans combien de domaines les États conservent-ils un droit de veto (unanimité) ?",
    options: ["2", "3", "5", "7"],
    answer: 1,
    explanation: "3 domaines où l'unanimité est requise : (i) politique étrangère et de sécurité, (ii) fiscalité, (iii) politiques sociales. C'est pourquoi un SMIC européen est impossible sans unanimité."
  },
  {
    theme: "instit",
    question: "Qui est la présidente du Parlement européen en 2024-2029 ?",
    options: ["Christine Lagarde", "Ursula von der Leyen", "Roberta Metsola", "Kaja Kallas"],
    answer: 2,
    explanation: "Roberta Metsola (PPE, Maltaise) est présidente du Parlement européen. Ursula von der Leyen (PPE, Allemande) est présidente de la Commission. Christine Lagarde préside la BCE."
  },
  {
    theme: "instit",
    question: "Combien de commissaires composent la Commission européenne ?",
    options: ["20", "25", "27", "30"],
    answer: 2,
    explanation: "27 commissaires — un par État membre. Mais ils ne représentent pas les intérêts de leur État : principe de collégialité, les décisions sont prises à l'unanimité."
  },
  {
    theme: "instit",
    question: "Quel groupe politique domine la Commission von der Leyen II (2024-2029) ?",
    options: ["S&D (socialistes)", "PPE (conservateurs)", "Renew Europe", "ECR"],
    answer: 1,
    explanation: "44 % du PPE — Commission la plus à droite de l'histoire. Tournée vers l'Est, avec des portefeuilles régaliens confiés au Nord (défense = Kaja Kallas, Estonie)."
  },
  {
    theme: "instit",
    question: "Quel groupe arrive en 3e position au Parlement européen après les élections de 2024 ?",
    options: ["ECR", "Les Verts", "Patriotes pour l'Europe", "Renew Europe"],
    answer: 2,
    explanation: "Patriotes pour l'Europe (86 eurodéputés, 3e force), fondé par Orbán, dominé par le RN français. Devant les Verts (53) et l'ECR (78)."
  },
  {
    theme: "instit",
    question: "Quel est le minimum requis pour former un groupe politique au Parlement européen ?",
    options: ["15 députés de 5 États", "20 députés de 6 États", "23 députés de 7 États", "25 députés de 5 États"],
    answer: 2,
    explanation: "Minimum 23 députés issus d'au moins 7 États membres (un quart des pays) pour former un groupe politique au Parlement européen."
  },
  {
    theme: "instit",
    question: "Quel traité a institutionnalisé le Conseil européen en lui donnant un statut officiel ?",
    options: ["Traité de Nice (2001)", "Traité de Lisbonne (2007/2009)", "Traité de Maastricht (1992)", "Traité d'Amsterdam (1997)"],
    answer: 1,
    explanation: "Le Conseil européen est né informellement en 1974 (sous Giscard d'Estaing) mais n'a été institutionnalisé qu'avec le Traité de Lisbonne (2007/2009)."
  },
  {
    theme: "instit",
    question: "Combien de sièges le groupe S&D (socialistes) détient-il au Parlement européen en 2024 ?",
    options: ["143", "136", "120", "112"],
    answer: 1,
    explanation: "136 députés (vs 143 en 2019). Les socialistes sont les grands perdants des élections 2024. Avant 2019, PPE + S&D suffisaient à former une majorité à eux seuls."
  },
  {
    theme: "instit",
    question: "Quelle procédure de décision aboutit à un accord en 1ère lecture via des « trilogues » ?",
    options: ["La procédure de consultation", "La procédure d'approbation", "La procédure législative ordinaire", "La coopération renforcée"],
    answer: 2,
    explanation: "La procédure législative ordinaire (art. 289 et 294 TFUE) : Commission propose → Parlement vote → Conseil décide. Les trilogues sont des négociations informelles entre les 3 institutions."
  },
  {
    theme: "instit",
    question: "Quel taux de participation aux élections européennes a été enregistré en 2024 ?",
    options: ["42 %", "46 %", "51 %", "58 %"],
    answer: 2,
    explanation: "51 % en 2024 — hausse significative sur 10 ans, contredisant l'idée d'un désintérêt croissant des citoyens pour les élections européennes."
  },

  // === CRISES ÉCO & FINANCIÈRES (15) ===
  {
    theme: "eco",
    question: "Quel est le premier plan d'aide à la Grèce (mai 2010) et son montant ?",
    options: ["80 Md€", "110 Md€", "130 Md€", "86 Md€"],
    answer: 1,
    explanation: "110 Md€ : 80 Md€ zone euro (prêts bilatéraux) + 30 Md€ FMI. En échange, 40 Md€ de réduction des dépenses sont imposés à la Grèce."
  },
  {
    theme: "eco",
    question: "Quel montant constitue le 3e plan d'aide à la Grèce (août 2015) ?",
    options: ["110 Md€", "130 Md€", "86 Md€", "78 Md€"],
    answer: 2,
    explanation: "86 Md€ (août 2015), suite au référendum Tsipras (« oxi » à 61 %). Entre 2008 et 2018, la Grèce a perdu 25 % de son PIB ; le chômage a atteint 28 % (60 % chez les jeunes)."
  },
  {
    theme: "eco",
    question: "Quelle institution tripartite négocie les mémorandums d'austérité avec les pays sous programme ?",
    options: ["La BCE, la Cour des comptes et le FMI", "La Commission, la BCE et le FMI (Troïka)", "Le Conseil, la Commission et la BCE", "Le FMI, la Banque mondiale et l'OCDE"],
    answer: 1,
    explanation: "La Troïka : Commission européenne + BCE + FMI. Elle négocie et surveille les Memorandums of Understanding (MoU) imposant l'austérité aux pays sous programme."
  },
  {
    theme: "eco",
    question: "Quelle est la formule exacte prononcée par Mario Draghi le 26 juillet 2012 à Londres ?",
    options: ["We will do everything possible to save the euro", "The ECB is ready to do whatever it takes to preserve the euro", "Europe will overcome this crisis", "The euro is irreversible"],
    answer: 1,
    explanation: "« The ECB is ready to do whatever it takes to preserve the euro. And believe me, it will be enough. » Cette phrase calme instantanément les marchés sans qu'un seul euro ne soit dépensé."
  },
  {
    theme: "eco",
    question: "Quel mécanisme permanent, doté d'une capacité de prêt de 500 Md€, remplace le FESF en 2012 ?",
    options: ["FESF", "MESF", "MES", "Six-Pack"],
    answer: 2,
    explanation: "Le MES (Mécanisme Européen de Stabilité, sept. 2012) : outil permanent, capital autorisé 700 Md€, capacité de prêt effective 500 Md€. Il remplace le FESF (instrument temporaire)."
  },
  {
    theme: "eco",
    question: "Quel texte de 2012 instaure la « règle d'or » budgétaire avec un déficit structurel max de 0,5 % du PIB ?",
    options: ["Six-Pack", "Two-Pack", "TSCG", "Pacte de Stabilité et de Croissance"],
    answer: 2,
    explanation: "TSCG (Traité sur la Stabilité, la Coordination et la Gouvernance), signé le 2 mars 2012 : déficit structurel max 0,5 % du PIB (1 % si dette < 60 % PIB)."
  },
  {
    theme: "eco",
    question: "Quel est le montant total de NextGenerationEU et sa répartition subventions/prêts ?",
    options: ["500 Md€ : 300 subventions + 200 prêts", "750 Md€ : 390 subventions + 360 prêts", "750 Md€ : 500 subventions + 250 prêts", "1 000 Md€ : 600 subventions + 400 prêts"],
    answer: 1,
    explanation: "750 Md€ : 390 Md€ de subventions + 360 Md€ de prêts. Les subventions étaient initialement proposées à 500 Md€ mais ont été réduites sous pression des États frugaux."
  },
  {
    theme: "eco",
    question: "Quels pays bénéficient le plus de la Facilité pour la Reprise et la Résilience (RRF) ?",
    options: ["France et Allemagne", "Italie (191 Md€) et Espagne (140 Md€)", "Grèce et Portugal", "Pologne et Roumanie"],
    answer: 1,
    explanation: "Italie (191 Md€) et Espagne (140 Md€) sont les principaux bénéficiaires. La France reçoit ~40 Md€ de subventions."
  },
  {
    theme: "eco",
    question: "Quel économiste a théorisé « l'austérité expansive » (confidence fairy), invalidée depuis par le FMI ?",
    options: ["Paul Krugman", "Mark Blyth", "Alberto Alesina", "Joseph Stiglitz"],
    answer: 2,
    explanation: "Alberto Alesina (Harvard) défend l'idée que couper dans les dépenses stimule la croissance via la 'confidence fairy'. Invalidé en 2013 par Blanchard et Leigh (FMI) qui reconnaissent avoir sous-estimé les multiplicateurs budgétaires."
  },
  {
    theme: "eco",
    question: "Quel livre de Reinhart & Rogoff (2010), dont l'erreur Excel a été révélée en 2013, théorisait que la croissance s'effondre au-delà de 90 % de dette/PIB ?",
    options: ["Austerity: The History of a Dangerous Idea", "This Time is Different", "The Return of Depression Economics", "End This Depression Now"],
    answer: 1,
    explanation: "Reinhart & Rogoff, « This Time is Different » (2010). L'étude fut invalidée par Thomas Herndon (UMass Amherst) en 2013 : erreur Excel, sélection biaisée, le seuil de 90 % n'existe pas."
  },
  {
    theme: "eco",
    question: "Combien de pays utilisent l'euro aujourd'hui (2024-2025) ?",
    options: ["17", "19", "20", "22"],
    answer: 2,
    explanation: "20 États membres de la zone euro. La Croatie est entrée en 2023. 75 % des citoyens de la zone euro se déclarent satisfaits de leur appartenance à l'euro."
  },
  {
    theme: "eco",
    question: "Quel mécanisme de surveillance créé en 2013 permet à la BCE de superviser directement les 130 plus grandes banques ?",
    options: ["MRU (Mécanisme de Résolution Unique)", "MSU (Mécanisme de Surveillance Unique)", "SEAD (Système Européen d'Assurance des Dépôts)", "MES (Mécanisme Européen de Stabilité)"],
    answer: 1,
    explanation: "Le MSU (Mécanisme de Surveillance Unique, 2013) : 1er pilier de l'Union bancaire. La BCE supervise directement les 130 plus grandes banques. Le pilier manquant reste le SEAD, bloqué par l'Allemagne."
  },
  {
    theme: "eco",
    question: "Quel est le budget annuel de l'UE en 2025, exprimé en pourcentage du RNB européen ?",
    options: ["0,5 % du RNB", "1,08 % du RNB", "2,5 % du RNB", "5 % du RNB"],
    answer: 1,
    explanation: "199 Md€ d'engagements pour 2025, soit environ 1,08 % du RNB de l'UE — très limité comparé aux budgets nationaux (environ 40 % du PIB pour les États)."
  },
  {
    theme: "eco",
    question: "Quel « paradoxe européen » caractérise la situation financière de l'UE ?",
    options: ["Trop d'investissement, pas assez d'épargne", "Taux d'épargne élevé (~12 %) mais manque d'investissement en capital-risque", "Excédent commercial mais déficit d'innovation", "Fort PIB mais faible croissance"],
    answer: 1,
    explanation: "L'épargne des Européens (~12 % du revenu disponible vs 4 % aux US) est investie dans des entreprises à faible valeur ajoutée et finance largement des entreprises hors d'Europe. D'où l'Union de l'Épargne et de l'Investissement (UEI)."
  },
  {
    theme: "eco",
    question: "Quel accord de libre-échange de 1992 étend la zone de libre-échange de l'UE à l'Islande, la Norvège et le Liechtenstein ?",
    options: ["Accord de Schengen", "Espace économique européen (EEE)", "Accord de stabilisation et d'association", "Union douanière européenne"],
    answer: 1,
    explanation: "L'Espace économique européen (EEE, 1992) étend le marché unique à 3 pays de l'AELE : Islande, Norvège et Liechtenstein. Ces pays adoptent l'acquis communautaire pour les domaines couverts."
  },

  // === GÉOPOLITIQUE & UKRAINE (12) ===
  {
    theme: "geo",
    question: "Quel événement de 1932-1933 en Ukraine constitue un trauma fondateur de la nation ukrainienne ?",
    options: ["La révolution bolchévique", "L'Holodomor (famine artificielle)", "L'annexion par l'URSS", "La collectivisation forcée des kolkhozes"],
    answer: 1,
    explanation: "L'Holodomor (1932-1933) : famine artificielle organisée par Staline, liée à la collectivisation forcée. Entre 3,5 et 7 millions de morts ukrainiens (environ 4 millions). Trauma fondateur de la nation."
  },
  {
    theme: "geo",
    question: "Par quel accord (1994) l'Ukraine renonce-t-elle à son arsenal nucléaire ?",
    options: ["Accords de Minsk", "Mémorandum de Budapest", "Traité de Lisbonne", "Accord de Maïdan"],
    answer: 1,
    explanation: "Mémorandum de Budapest (1994) : l'Ukraine renonce à son arsenal nucléaire en échange de garanties de sécurité des États-Unis, du Royaume-Uni et de la Russie."
  },
  {
    theme: "geo",
    question: "Combien de paquets de sanctions l'UE a-t-elle adoptés contre la Russie depuis février 2022 ?",
    options: ["10", "13", "19+", "25+"],
    answer: 3,
    explanation: "25+ trains de sanctions au total depuis février 2022 (les sources récentes évoquent ce chiffre). Moscovici recommande de mobiliser le chiffre de 19 paquets dans les dissertations."
  },
  {
    theme: "geo",
    question: "Quel est le montant total de l'aide de l'UE et de ses États membres à l'Ukraine depuis 2022 ?",
    options: ["67 Md€", "100 Md€", "+138 Md€", "+200 Md€"],
    answer: 2,
    explanation: "+138 Md€ d'aide totale UE + États membres (67 Md€ financière/humanitaire + 48,5 Md€ militaire). Les Européens sont les premiers pourvoyeurs d'aide à l'Ukraine, devant les États-Unis."
  },
  {
    theme: "geo",
    question: "Pour la première fois en 2022, quel article du Traité de Lisbonne (clause de défense mutuelle) avait déjà été invoqué après les attentats de Paris (2015) ?",
    options: ["Article 50 TUE", "Article 42-7 TUE", "Article 7 TUE", "Article 17 TUE"],
    answer: 1,
    explanation: "Article 42-7 TUE (clause de défense mutuelle) : utilisé pour la 1ère fois après les attentats de novembre 2015 à Paris. Effets militaires restés limités — les États restaient souverains dans leur réponse."
  },
  {
    theme: "geo",
    question: "Quel plan, annoncé en mars 2025, prévoit un potentiel de 800 Md€ pour la défense européenne ?",
    options: ["PESCO", "Plan ReArm Europe / SAFE", "Facilité européenne pour la paix", "Boussole stratégique"],
    answer: 1,
    explanation: "Plan ReArm Europe / SAFE (mars 2025) : assouplissement des règles budgétaires, fonds SAFE de 150 Md€ pour l'industrie de défense. Total potentiel de 800 Md€ si les États mobilisent leurs marges nationales."
  },
  {
    theme: "geo",
    question: "Quelle déclaration franco-britannique de 1998 fonde la Politique Européenne de Sécurité et de Défense (PESD) ?",
    options: ["Déclarations de Petersberg", "Accord de Saint-Malo", "Boussole stratégique", "Traité de Bruxelles"],
    answer: 1,
    explanation: "Accord de Saint-Malo (1998) : déclaration franco-britannique fondatrice de la PESD. Tony Blair = pivot. C'est la base de la politique de défense européenne actuelle."
  },
  {
    theme: "geo",
    question: "Combien de ports européens (dont les 3 plus grands) sont partiellement contrôlés par des opérateurs chinois ?",
    options: ["7", "10", "14", "20"],
    answer: 2,
    explanation: "Des opérateurs chinois sont présents dans 14 ports européens, dont les 3 plus grands du continent : Rotterdam, Anvers et Hambourg. Investissements réalisés dans le cadre des Nouvelles Routes de la Soie (lancées en 2013)."
  },
  {
    theme: "geo",
    question: "Quelle est la position officielle de l'UE vis-à-vis de la Chine, formulée en 2019 ?",
    options: ["Allié stratégique", "Rival systémique uniquement", "À la fois partenaire stratégique, rival systémique et concurrent économique majeur", "Puissance hostile"],
    answer: 2,
    explanation: "Pour l'UE, la Chine est simultanément : partenaire stratégique, rival systémique ET concurrent économique majeur. L'UE avance sur une ligne de crête entre « derisking » et découplage total."
  },
  {
    theme: "geo",
    question: "Combien de millions d'Ukrainiens l'UE a-t-elle accueillis depuis l'invasion de 2022 ?",
    options: ["4 millions", "8 millions", "14 millions", "20 millions"],
    answer: 2,
    explanation: "14 millions d'Ukrainiens accueillis depuis 2022 ; 4,3 millions sont sous protection temporaire (directive 2001/55/CE activée pour la 1ère fois). 4 millions sont restés durablement dans l'UE."
  },
  {
    theme: "geo",
    question: "Quel concept, porté par la France depuis 2013, désigne la capacité de l'UE à agir de façon autonome dans les domaines stratégiques ?",
    options: ["Souveraineté européenne", "Autonomie stratégique", "Puissance douce (soft power)", "Défense collective"],
    answer: 1,
    explanation: "L'autonomie stratégique = capacité à agir de manière autonome en matière de défense, sécurité économique, technologies critiques, énergie. Concept porté par la France, repris par la Commission von der Leyen."
  },
  {
    theme: "geo",
    question: "Qu'est-ce que le plan REPowerEU (mai 2022) vise à accomplir ?",
    options: ["Doubler la capacité nucléaire européenne", "Se passer du gaz russe à horizon 2027", "Créer une armée européenne", "Financer la reconstruction ukrainienne"],
    answer: 1,
    explanation: "REPowerEU (18 mai 2022) : 20 Md€ de subventions supplémentaires, objectif EnR rehaussé de 40 % à 45 % à horizon 2030, assouplissement des règles d'aides d'État. Objectif : sortir du gaz russe d'ici 2027."
  },

  // === MIGRATION & ÉLARGISSEMENT (12) ===
  {
    theme: "migration",
    question: "Combien d'arrivées l'Europe a-t-elle enregistrées en 2015 lors de la crise migratoire ?",
    options: ["650 000", "1,2 million", "2,5 millions", "3,6 millions"],
    answer: 1,
    explanation: "1,2 million d'arrivées en 2015 (1,5 million selon certaines sources) par la Grèce et l'Italie. 3,6 millions est le total des demandes d'asile entre 2014 et 2017."
  },
  {
    theme: "migration",
    question: "Quel est le principe fondamental du système de Dublin en matière d'asile ?",
    options: ["Le pays le plus proche de l'origine du demandeur est responsable", "L'État de première entrée est responsable du traitement de la demande d'asile", "Le pays d'accueil choisi par le demandeur est compétent", "La Commission désigne le pays compétent"],
    answer: 1,
    explanation: "Dublin III (Règlement 604/2013) : l'État de première entrée est responsable. Ce système s'est révélé inopérant en 2015 avec la saturation de la Grèce et de l'Italie."
  },
  {
    theme: "migration",
    question: "En quelle année l'Accord de Schengen est-il signé ?",
    options: ["1979", "1985", "1992", "1997"],
    answer: 1,
    explanation: "1985 : signature de l'Accord de Schengen (intergouvernemental, hors traités UE). Il entre en vigueur en 1995 avec la Convention de Schengen. Aujourd'hui : 29 pays membres."
  },
  {
    theme: "migration",
    question: "Quand est adopté le Nouveau Pacte sur la Migration et l'Asile ?",
    options: ["Juin 2022", "Décembre 2023", "14 mai 2024", "Juin 2026"],
    answer: 2,
    explanation: "Adopté le 14 mai 2024, mise en œuvre prévue en juin 2026. Il comprend 10 instruments législatifs (9 règlements et 1 directive). Il maintient la logique de Dublin tout en instaurant une « solidarité obligatoire mais flexible »."
  },
  {
    theme: "migration",
    question: "Quel accord de 2016 prévoit le versement de 3 milliards d'euros à la Turquie pour bloquer les flux migratoires ?",
    options: ["Accord de Petersberg", "Accord UE-Turquie de mars 2016", "Pacte de migration de 2024", "Accord de Minsk"],
    answer: 1,
    explanation: "Accord UE-Turquie (mars 2016) : 3 Md€ versés pour bloquer les flux. La Turquie accueille plus de 3,5 millions de réfugiés syriens sur son territoire. Partenaire « incontournable mais désagréable »."
  },
  {
    theme: "migration",
    question: "Quels sont les 4 critères de Copenhague (1993) pour adhérer à l'UE ?",
    options: ["Politique, économique, acquis communautaire, contribution budgétaire", "Politique, économique, acquis communautaire, capacité administrative (Madrid 1995)", "Géographique, linguistique, économique, politique", "OTAN, démocratie, marché libre, droits de l'homme"],
    answer: 1,
    explanation: "(i) Critique politique (démocratie, État de droit), (ii) Critère économique (marché viable), (iii) Acquis communautaire, (iv) Critère de Madrid (1995) : capacité administrative et judiciaire."
  },
  {
    theme: "migration",
    question: "Combien de pays composent l'espace Schengen aujourd'hui (2025) ?",
    options: ["22", "25", "27", "29"],
    answer: 3,
    explanation: "29 pays : les 27 membres de l'UE sauf Irlande et Chypre, plus la Norvège, l'Islande et la Suisse. Bulgarie et Roumanie ont rejoint totalement en 2025."
  },
  {
    theme: "migration",
    question: "Quel est l'objectif d'effectifs de Frontex d'ici 2027 ?",
    options: ["5 000 gardes-frontières", "7 500 gardes-frontières", "10 000 gardes-frontières", "15 000 gardes-frontières"],
    answer: 2,
    explanation: "10 000 garde-frontières d'ici 2027. Budget Frontex : 6 M€ en 2005 → 845 M€ en 2024. Frontex a été réformée en 2016 puis 2019 et est devenue l'Agence européenne de garde-frontières et de garde-côtes."
  },
  {
    theme: "migration",
    question: "Quel était le résultat du référendum hongrois de 2016 contre les quotas migratoires et pourquoi était-il invalide ?",
    options: ["75 % contre, mais le quorum était de 60 %", "98 % d'approbation, mais participation < 50 % (invalide)", "62 % contre, résultat annulé par la CJUE", "85 % contre, mais non reconnu par l'UE"],
    answer: 1,
    explanation: "98 % d'approbation au référendum anti-quotas, mais la participation était inférieure à 50 % — le référendum était donc invalide selon la loi hongroise."
  },
  {
    theme: "migration",
    question: "Quand l'Ukraine et la Moldavie ont-elles obtenu le statut de candidat à l'UE ?",
    options: ["Mars 2022", "Juin 2022", "Décembre 2023", "Juin 2024"],
    answer: 1,
    explanation: "Juin 2022 : statut de candidat pour l'Ukraine et la Moldavie. Les négociations d'adhésion ont débuté le 25 juin 2024. La Géorgie a obtenu ce statut en décembre 2023."
  },
  {
    theme: "migration",
    question: "Quelle formule de l'économiste François Perroux résume la tension entre élargissement et approfondissement ?",
    options: ["Plus d'Europe, moins de souveraineté", "L'Europe perd en intensité ce qu'elle gagne en extension", "L'élargissement précède toujours l'approfondissement", "La géographie détermine la politique"],
    answer: 1,
    explanation: "« L'Europe perd en intensité ce qu'elle gagne en extension » — François Perroux. Cette tension classique structure le débat élargissement vs approfondissement depuis les origines."
  },
  {
    theme: "migration",
    question: "Quel résultat du référendum sur le Brexit (23 juin 2016) a surpris le monde entier ?",
    options: ["52 % Leave", "51,9 % Leave / 48,1 % Remain", "55 % Leave", "48 % Leave (victoire du Remain)"],
    answer: 1,
    explanation: "51,9 % Leave / 48,1 % Remain, participation 72,2 %. Contre toute attente, le Leave l'emporte. Écosse (62 % Remain) et Londres (59,9 % Remain) votaient rester, mais l'Angleterre rurale et le Pays de Galles ont voté leave."
  },

  // === GREEN DEAL & NUMÉRIQUE (11) ===
  {
    theme: "climat",
    question: "Quel est l'objectif de neutralité climatique de l'UE fixé par le Pacte Vert ?",
    options: ["Neutralité en 2040", "Neutralité en 2050, -55 % d'émissions en 2030", "Neutralité en 2045, -40 % en 2030", "Neutralité en 2060, -50 % en 2035"],
    answer: 1,
    explanation: "Pacte Vert (Green Deal, décembre 2019) : neutralité climatique à l'horizon 2050 et -55 % d'émissions par rapport à 1990 d'ici 2030. La Loi européenne sur le climat (juin 2021) rend ces objectifs juridiquement contraignants."
  },
  {
    theme: "climat",
    question: "Quelle mesure emblématique du paquet « Fit for 55 » concerne le secteur automobile ?",
    options: ["Interdiction des voitures diesel en 2030", "Interdiction de la vente de véhicules thermiques en 2035", "Taxe CO2 sur les véhicules polluants dès 2025", "Obligation de 50 % de VE dans les flottes d'entreprise"],
    answer: 1,
    explanation: "Le paquet « Fit for 55 » (juillet 2021) prévoit l'interdiction de la vente de véhicules thermiques neufs à partir de 2035 — mesure emblématique du Green Deal."
  },
  {
    theme: "climat",
    question: "Qu'est-ce que le CBAM (Carbon Border Adjustment Mechanism) ?",
    options: ["Un fonds d'aide aux pays en développement pour le climat", "Un mécanisme d'ajustement carbone aux frontières de l'UE", "Un système d'échange de quotas d'émissions", "Une taxe sur les énergies fossiles au sein de l'UE"],
    answer: 1,
    explanation: "Le CBAM (entrée en vigueur transitoire le 1er octobre 2023, plein effet le 1er janvier 2026) : taxe carbone aux frontières de l'UE pour éviter la délocalisation des émissions vers des pays moins stricts."
  },
  {
    theme: "climat",
    question: "Quel règlement européen de 2016/2018 est devenu une référence mondiale sur la protection des données personnelles ?",
    options: ["Digital Services Act", "AI Act", "RGPD", "Digital Markets Act"],
    answer: 2,
    explanation: "Le RGPD (Règlement Général sur la Protection des Données, 2016/2018) est le cadre fondateur devenu référence mondiale — c'est l'« effet Bruxelles » théorisé par Anu Bradford."
  },
  {
    theme: "climat",
    question: "Combien de « Very Large Online Platforms » sont désignées par le Digital Services Act (2022) ?",
    options: ["7", "12", "19", "25"],
    answer: 2,
    explanation: "19 « Very Large Online Platforms » sont désignées par le DSA, soumises à des règles strictes sur la haine en ligne, la désinformation et la transparence des algorithmes."
  },
  {
    theme: "climat",
    question: "Quelles entreprises sont désignées comme « gatekeepers » par le Digital Markets Act (DMA, 2022) ?",
    options: ["Facebook, Twitter, TikTok, Netflix", "Apple, Google, Meta, Amazon, Microsoft, ByteDance, Booking", "Les 10 plus grandes entreprises mondiales par capitalisation", "Toute entreprise avec > 100 millions d'utilisateurs en Europe"],
    answer: 1,
    explanation: "Le DMA désigne 7 gatekeepers : Apple, Google, Meta, Amazon, Microsoft, ByteDance et Booking. Ces entreprises sont soumises à des obligations spécifiques pour préserver la concurrence."
  },
  {
    theme: "climat",
    question: "Quelle est la portée de l'AI Act européen (2024) ?",
    options: ["Il interdit toute utilisation de l'IA dans les services publics", "C'est la 1ère régulation mondiale sur l'IA, par approche par risques", "Il crée une agence européenne de l'IA avec 10 Md€", "Il interdit les IA génératives sauf dans le secteur médical"],
    answer: 1,
    explanation: "L'AI Act (2024) est la 1ère régulation au monde sur l'IA. Approche par risques : pratiques interdites, haut risque, IA générative, risque limité. Application progressive 2025-2027."
  },
  {
    theme: "climat",
    question: "Quel est l'objectif du Chips Act (2023) pour la production européenne de semi-conducteurs ?",
    options: ["10 % de la production mondiale en 2030", "20 % de la production mondiale en 2030", "40 % de la production mondiale en 2035", "50 % de la production mondiale en 2040"],
    answer: 1,
    explanation: "Chips Act (2023) : 43 Md€ pour atteindre 20 % de la production mondiale de semi-conducteurs en 2030 (vs 9 % aujourd'hui). Réponse à la dépendance vis-à-vis des puces asiatiques et américaines."
  },
  {
    theme: "climat",
    question: "Quel est le montant du programme Horizon Europe (2021-2027) pour la recherche et l'innovation ?",
    options: ["45 Md€", "70 Md€", "95,5 Md€", "120 Md€"],
    answer: 2,
    explanation: "Horizon Europe : 95,5 Md€ pour 2021-2027. C'est le plus grand programme de R&I jamais lancé par l'UE, succédant à Horizon 2020."
  },
  {
    theme: "climat",
    question: "Quels sont les 5 défis du Pacte Vert identifiés dans la fiche ?",
    options: ["Financement, technologie, industrie, social, géopolitique", "Divergences politiques, coût de transition, nouvelles dépendances, hiérarchisation des priorités, coût social", "Résistance des États, lobbies industriels, opinion publique, compétitivité, emploi", "Accord de Paris, énergie nucléaire, transports, agriculture, bâtiment"],
    answer: 1,
    explanation: "5 défis : (1) divergences politiques entre EM, (2) coût très important de la transition, (3) risque de nouvelles dépendances (terres rares chinoises), (4) hiérarchisation pas claire des priorités, (5) coût social mal appréhendé — risque de « gilets jaunes européens »."
  },
  {
    theme: "climat",
    question: "Quelle est la part de marché des producteurs chinois de batteries pour véhicules électriques ?",
    options: ["30 %", "42 %", "56 %", "70 %"],
    answer: 2,
    explanation: "56 % — près du double de leurs principaux concurrents (Coréens et Japonais combinés). Sur les 10 premiers producteurs mondiaux de batteries VE, 6 sont chinois."
  },

  // === AUTONOMIE INDUSTRIELLE (8) ===
  {
    theme: "industrie",
    question: "Quel rapport de 2024 estime les besoins d'investissement supplémentaires de l'UE à 800 Md€/an ?",
    options: ["Rapport Letta", "Rapport Draghi", "Rapport Wieser", "Rapport von der Leyen"],
    answer: 1,
    explanation: "Rapport Draghi (2024) : sans Union des Marchés de Capitaux fonctionnelle, pas de financement massif de l'innovation, de la défense et de la transition verte. Besoins estimés à 800 Md€/an supplémentaires."
  },
  {
    theme: "industrie",
    question: "Quel est l'objectif du Critical Raw Materials Act (CRM Act, 2024) pour l'extraction en Europe ?",
    options: ["5 % extraction, 20 % transformation, 15 % recyclage", "10 % extraction, 40 % transformation, 25 % recyclage", "20 % extraction, 60 % transformation, 30 % recyclage", "15 % extraction, 50 % transformation, 20 % recyclage"],
    answer: 1,
    explanation: "CRM Act (2024) : objectifs d'ici 2030 — 10 % extraction, 40 % transformation, 25 % recyclage en UE. Vise à sécuriser l'approvisionnement en lithium, cobalt et terres rares."
  },
  {
    theme: "industrie",
    question: "Quel mécanisme européen depuis 2019 permet de filtrer les investissements directs étrangers en provenance de pays tiers ?",
    options: ["CBAM", "Foreign Subsidies Regulation", "Mécanisme de filtrage des IDE", "Net Zero Industry Act"],
    answer: 2,
    explanation: "Mécanisme de filtrage des IDE (2019, entrée en vigueur 2020) : les États doivent notifier à la Commission les investissements étrangers susceptibles d'affecter la sécurité ou l'ordre public. Procédure révisée en 2024."
  },
  {
    theme: "industrie",
    question: "Quelle affaire emblématique illustre le débat entre champions européens et protection de la concurrence ?",
    options: ["Rachat de Nokia par Microsoft", "Veto Alstom-Siemens (2019)", "Fusion Air France-KLM", "Acquisition d'ARM par NVIDIA"],
    answer: 1,
    explanation: "Veto Alstom-Siemens (2019) par la DG Concurrence de la Commission : fusion bloquée au nom de la protection de la concurrence, malgré la volonté franco-allemande de créer un champion européen du ferroviaire face à la Chine."
  },
  {
    theme: "industrie",
    question: "Quel est le décrochage du PIB par habitant de l'UE par rapport aux États-Unis depuis 2001 ?",
    options: ["De 95 % à 85 %", "De 90 % à 73 %", "De 85 % à 65 %", "De 80 % à 60 %"],
    answer: 1,
    explanation: "PIB par tête européen comparé aux US : 90 % en 2001, 73 % aujourd'hui. La croissance moyenne de la zone euro est 2 fois inférieure à celle des États-Unis."
  },
  {
    theme: "industrie",
    question: "Que vise le Net Zero Industry Act (NZIA, 2024) ?",
    options: ["Atteindre 30 % de production d'énergies vertes en Europe", "40 % des technologies vertes clés produites en UE d'ici 2030", "Neutralité carbone de l'industrie européenne en 2035", "Interdire les importations de technologies vertes chinoises"],
    answer: 1,
    explanation: "NZIA (2024) : 40 % de la production européenne des technologies vertes propres en UE d'ici 2030. Réponse à l'IRA américain (369 Md$) et à la domination chinoise dans les secteurs verts."
  },
  {
    theme: "industrie",
    question: "Combien de produits l'UE a-t-elle identifiés comme relevant d'écosystèmes sensibles dont elle est fortement dépendante ?",
    options: ["52", "89", "137", "200"],
    answer: 2,
    explanation: "137 produits identifiés (6 % de la valeur des importations) dans des écosystèmes sensibles : semi-conducteurs, terres rares, médicaments... Vulnérabilité stratégique majeure."
  },
  {
    theme: "industrie",
    question: "Quelle est la stratégie industrielle de l'UE de 2020 (révisée 2021) articulée autour de 3 axes ?",
    options: ["Innovation, transition, compétitivité", "Résilience du marché unique, dépendances stratégiques, transitions verte et numérique", "Numérique, défense, agriculture", "Énergie, transport, industrie lourde"],
    answer: 1,
    explanation: "3 axes de la stratégie industrielle 2020/2021 : (1) Renforcer la résilience du marché unique, (2) Faire face aux dépendances stratégiques, (3) Accélérer les transitions verte et numérique."
  },

  // === ÉTAT DE DROIT (9) ===
  {
    theme: "etatdroit",
    question: "Quel concept Viktor Orbán revendique-t-il depuis son discours de Băile Tușnad (juillet 2014) ?",
    options: ["Démocratie chrétienne", "Démocratie directe", "Démocratie illibérale", "Souveraineté nationale absolue"],
    answer: 2,
    explanation: "Orbán revendique la « démocratie illibérale » ou l'« État illibéral, national ». Il s'inspire de la notion d'« État total » de Carl Schmitt : concentration des pouvoirs dans l'exécutif via affaiblissement des contre-pouvoirs."
  },
  {
    theme: "etatdroit",
    question: "En quelle année l'article 7 TUE a-t-il été activé contre la Pologne par la Commission ?",
    options: ["Décembre 2015", "Janvier 2016", "Décembre 2017", "Septembre 2018"],
    answer: 2,
    explanation: "Article 7 activé contre la Pologne en décembre 2017 (par la Commission) suite aux réformes judiciaires du PiS. Activé contre la Hongrie en septembre 2018 (par le Parlement). Jamais appliqué jusqu'à la sanction finale (vetos croisés HU/PL)."
  },
  {
    theme: "etatdroit",
    question: "Pourquoi l'article 7-2 TUE est-il qualifié de « bombe atomique non utilisable » ?",
    options: ["Il nécessite une décision de la CJUE", "Il requiert l'unanimité du Conseil (moins le pays concerné) — bloqué par vetos croisés HU/PL", "Il doit être ratifié par tous les parlements nationaux", "Il ne s'applique qu'en cas de guerre"],
    answer: 1,
    explanation: "Art. 7-2 : violation grave et persistante → unanimité du Conseil (moins le pays concerné) requise → suspension des droits de vote. Jamais appliqué : Hongrie et Pologne ont promis de se soutenir mutuellement via des vetos croisés."
  },
  {
    theme: "etatdroit",
    question: "Quel règlement de 2020 permet de suspendre les fonds européens en cas de violation de l'État de droit ?",
    options: ["Règlement Dublin III", "Règlement conditionnalité (UE, Euratom) 2020/2092", "Règlement Six-Pack", "Règlement sur les fonds structurels"],
    answer: 1,
    explanation: "Règlement de conditionnalité (UE, Euratom) 2020/2092 : adopté avec NextGenerationEU. Permet de suspendre ou réduire les fonds si des violations de l'État de droit portent atteinte aux intérêts financiers de l'UE."
  },
  {
    theme: "etatdroit",
    question: "Quel est le montant des fonds européens actuellement gelés pour la Hongrie ?",
    options: ["5 Md€", "12 Md€", "21 Md€", "35 Md€"],
    answer: 2,
    explanation: "21 Md€ de fonds restent gelés pour la Hongrie (cohésion, RRF) + 1 milliard € d'engagements irrévocablement retirés en 2025 via le mécanisme de conditionnalité."
  },
  {
    theme: "etatdroit",
    question: "Quelle mesure symbolique du gouvernement Orbán en 2019 illustre la restriction des libertés académiques ?",
    options: ["Fermeture de l'Université de Budapest", "Expulsion de la CEU (Université d'Europe centrale) vers Vienne", "Contrôle des universités par l'État", "Interdiction des cours en anglais"],
    answer: 1,
    explanation: "Fermeture effective de la CEU (Central European University, université Soros) en 2019 : contrainte de déménager à Vienne. Symbole de la restriction des libertés académiques en Hongrie."
  },
  {
    theme: "etatdroit",
    question: "Quelle loi polonaise d'octobre 2020 illustre le recul des droits fondamentaux sous le PiS ?",
    options: ["Loi sur les médias publics", "Loi sur l'avortement (interdiction quasi-totale)", "Loi sur la nationalité", "Loi anti-ONG"],
    answer: 1,
    explanation: "Octobre 2020 : le Tribunal constitutionnel (contrôlé par le PiS) prononce une interdiction quasi-totale de l'avortement. Décision immédiatement contestée dans la rue. Illustre la capture des contre-pouvoirs."
  },
  {
    theme: "etatdroit",
    question: "Quand a lieu l'alternance politique en Pologne marquant le retour d'un gouvernement pro-européen ?",
    options: ["Juin 2022", "Octobre 2023", "Janvier 2024", "Mars 2025"],
    answer: 1,
    explanation: "Octobre 2023 : victoire de la coalition Tusk aux élections polonaises. Donald Tusk devient Premier ministre. Début de la réversion des réformes contestées du PiS et retour de la Pologne dans le jeu européen."
  },
  {
    theme: "etatdroit",
    question: "Quelle décision de la CJUE en février 2022 valide définitivement le mécanisme de conditionnalité ?",
    options: ["La Cour condamne la Pologne et la Hongrie à des amendes", "L'Assemblée plénière de la CJUE rejette les recours HU/PL : le respect de l'État de droit est une condition préalable aux droits des traités", "La Cour suspend le mécanisme en attendant une révision", "La Cour renvoie la décision au Conseil"],
    answer: 1,
    explanation: "Arrêts CJUE du 16 février 2022 : l'Assemblée plénière rejette les recours de la Hongrie et de la Pologne. L'Union est compétente pour établir ces règles financières. Le respect de l'État de droit est une condition préalable à la jouissance des droits découlant des traités."
  },

  // === EUROSCEPTICISME & AVENIR (10) ===
  {
    theme: "avenir",
    question: "Quelle fraction approximative du Parlement européen l'extrême droite représente-t-elle depuis 2024 ?",
    options: ["10 %", "20 %", "Un petit tiers (~30 %)", "La majorité absolue"],
    answer: 2,
    explanation: "Environ 200 députés d'extrême droite sur 720, soit un peu moins d'un tiers. Répartis entre Patriotes pour l'Europe (86), ECR (78) et ENS (groupe AfD). Ces groupes restent très divisés entre eux."
  },
  {
    theme: "avenir",
    question: "Selon Moscovici, quelle est la principale leçon du Brexit pour les référendums européens ?",
    options: ["Les jeunes sont toujours pro-européens", "Sur un référendum européen, c'est toujours le non qui gagne", "L'information des citoyens est insuffisante", "Les référendums doivent être remplacés par des votes parlementaires"],
    answer: 1,
    explanation: "« Sur un référendum européen : c'est toujours le non qui gagne » (Moscovici). Plus facile de défendre le non que le oui. Cameron a perdu son pari — le Brexit est une illustration directe de cette maxime."
  },
  {
    theme: "avenir",
    question: "Quels 3 piliers de l'ordre post-1989 sont considérés comme effondrés aujourd'hui ?",
    options: ["ONU, G7, OTAN", "Ordre multilatéral fondé sur des règles, alliance transatlantique (OTAN), commerce mondial libre (GATT/OMC)", "Démocratie libérale, libre-échange, paix durable", "FMI, Banque mondiale, OMC"],
    answer: 1,
    explanation: "3 piliers effondrés : (i) ordre multilatéral fondé sur des règles (Bretton Woods, ONU paralysé), (ii) alliance de sécurité transatlantique (OTAN remise en cause), (iii) commerce mondial libre (OMC en « mort cérébrale »)."
  },
  {
    theme: "avenir",
    question: "Quelle formule de Moscovici résume le défi temporel de l'UE face aux crises ?",
    options: ["L'UE doit parler d'une seule voix", "L'UE doit apprendre à être cohérente dans l'urgence du temps long", "L'UE doit réformer ses institutions avant tout", "L'UE doit s'élargir avant de s'approfondir"],
    answer: 1,
    explanation: "« L'Europe n'a jamais été aussi cohérente que face aux crises, dans l'urgence du temps court (NextGenerationEU, sanctions Russie). L'enjeu : l'Union doit apprendre à être cohérente dans l'urgence du temps long. »"
  },
  {
    theme: "avenir",
    question: "Quelle initiative de Macron (octobre 2022) rassemble 47 pays européens membres et non-membres de l'UE ?",
    options: ["Alliance pour le multilatéralisme", "Communauté politique européenne (CPE)", "Forum de défense européen", "Conférence sur l'avenir de l'Europe"],
    answer: 1,
    explanation: "Communauté politique européenne (CPE), lancée à Prague en octobre 2022 : instance informelle rassemblant 47 pays (UE + non-UE, sauf Russie et Biélorussie). Objectif : coopération sur défense, énergie, crises sanitaires."
  },
  {
    theme: "avenir",
    question: "Quel scénario budgétaire européen décrit l'introduction de ressources propres significatives et d'une capacité d'endettement permanente ?",
    options: ["Scénario 1 — Statu quo maîtrisé", "Scénario 2 — Saut fédéral partiel", "Scénario 3 — Intégration par les marchés", "Scénario 4 — Fédéralisme total"],
    answer: 1,
    explanation: "Scénario 2 — Saut fédéral partiel : introduction de ressources propres significatives, capacité d'endettement permanente, flexibilité accrue. Avantage : autonomie économique. Limite : nécessite un compromis politique fort."
  },
  {
    theme: "avenir",
    question: "Quelle est la particularité de la relation de l'UE avec la Chine selon la fiche ?",
    options: ["La Chine est un allié stratégique de l'UE", "L'UE maintient une relation de découplage total avec la Chine", "La Chine est à la fois partenaire, rival systémique et concurrent pour l'UE", "L'UE et la Chine ont signé un accord de libre-échange"],
    answer: 2,
    explanation: "Pour l'UE, la Chine = à la fois partenaire stratégique, rival systémique et concurrent économique majeur. L'UE avance sur une ligne de crête pour limiter ses dépendances (« derisking » sans découplage total)."
  },
  {
    theme: "avenir",
    question: "Quels sont les 3 axes que Moscovici promeut pour l'avenir de l'Europe ?",
    options: ["Défense, économie, culture", "Intégration économique, plus de démocratie/transparence, apprendre le langage de la puissance", "Élargissement, réforme institutionnelle, budget accru", "Green Deal, numérique, défense"],
    answer: 1,
    explanation: "(1) Europe plus intégrée économiquement (souveraineté éco, budget, union bancaire), (2) Europe plus démocratique et transparente (passage à la majorité qualifiée en fiscalité), (3) Europe capable d'apprendre le langage de la puissance."
  },
  {
    theme: "avenir",
    question: "Quel économiste américain a théorisé la « fin de l'histoire » après 1989, une thèse aujourd'hui remise en question ?",
    options: ["Paul Krugman", "Francis Fukuyama", "Samuel Huntington", "Joseph Stiglitz"],
    answer: 1,
    explanation: "Francis Fukuyama et sa thèse de la « fin de l'histoire » (1989) : victoire définitive de la démocratie libérale. Aujourd'hui infirmée par le retour des logiques de puissance (Poutine, Xi Jinping, Trump)."
  },
  {
    theme: "avenir",
    question: "Quelle est la décision sortie du Conseil européen historique du 21 juillet 2020 après 4 jours et nuits de négociations ?",
    options: ["Le lancement du Green Deal", "L'adoption de NextGenerationEU (750 Md€)", "La réforme des institutions européennes", "Le plan ReArm Europe"],
    answer: 1,
    explanation: "Conseil européen du 21 juillet 2020 : adoption de NextGenerationEU (750 Md€). Première rupture historique avec le tabou de la dette commune — les Allemands acceptent pour la 1ère fois une « union de transferts »."
  },

  // === AUTONOMIE INDUSTRIELLE — nouvelles questions ===
  {
    theme: "industrie",
    question: "Quel rapport de septembre 2024 appelle à 800 Md€ d'investissements supplémentaires annuels pour la compétitivité européenne ?",
    options: ["Rapport Letta", "Rapport Draghi", "Rapport Wieser", "Rapport Moscovici"],
    answer: 1,
    explanation: "Le Rapport Draghi (sept. 2024) dresse un diagnostic alarmé sur le décrochage de la compétitivité européenne face aux États-Unis et à la Chine, et appelle à 800 Md€ d'investissements supplémentaires annuels en innovation, défense et transition verte."
  },
  {
    theme: "industrie",
    question: "Quel pays a proposé un « Buy European Act » sur le modèle du Buy American Act ?",
    options: ["L'Allemagne", "L'Italie", "La France", "L'Espagne"],
    answer: 2,
    explanation: "La France a proposé un « Buy European Act » visant à favoriser les produits européens dans les marchés publics, sur le modèle du Buy American Act américain. La proposition n'a pas fait l'unanimité au sein de l'UE."
  },
  {
    theme: "industrie",
    question: "Quelle proportion de la valeur d'un véhicule électrique réside dans sa batterie, créant une dépendance structurelle à la Chine ?",
    options: ["20 %", "30 %", "40 %", "55 %"],
    answer: 2,
    explanation: "40 % de la valeur d'un VE réside dans sa batterie. Or 6 des 10 premiers producteurs mondiaux de batteries pour VE sont chinois (56 % de part de marché) — dépendance stratégique majeure pour l'UE."
  },
  {
    theme: "industrie",
    question: "En quelle année a été créé l'Institut européen d'innovation et de technologie (IET) ?",
    options: ["2000", "2004", "2008", "2012"],
    answer: 2,
    explanation: "L'Institut européen d'innovation et de technologie (IET) a été créé en 2008. Il vise à stimuler l'innovation en reliant enseignement supérieur, recherche et entreprises (triangle de la connaissance)."
  },
  {
    theme: "industrie",
    question: "Quel est le principal outil de financement de la recherche et de l'innovation européenne avec un budget de 95,5 Md€ (2021-2027) ?",
    options: ["ESPRIT", "Horizon 2020", "Horizon Europe", "Digital Europe"],
    answer: 2,
    explanation: "Horizon Europe (lancé le 1er janvier 2021) : 95,5 Md€ pour 2021-2027 — principal programme de R&I de l'UE, succédant à 7 programmes-cadres depuis 1984."
  },
  {
    theme: "industrie",
    question: "Quels sont les 2 défis centraux identifiés par le Rapport Draghi pour l'Europe ?",
    options: ["Énergie et migration", "Innovation (rattraper le retard technologique) et industrie (en déclin)", "Défense et numérique", "Budget et gouvernance"],
    answer: 1,
    explanation: "Le Rapport Draghi (2024) identifie deux défis centraux : (1) l'innovation — rattraper le retard technologique face aux US et à la Chine ; (2) l'industrie — enrayer le déclin industriel européen."
  },
  {
    theme: "industrie",
    question: "Quel programme numérique doté de 7,6 Md€ soutient la transition numérique européenne pour 2021-2027 ?",
    options: ["Horizon Europe", "Digital Europe Programme", "Connecting Europe Facility", "InvestEU"],
    answer: 1,
    explanation: "Le programme Digital Europe (7,6 Md€ pour 2021-2027) soutient les investissements dans la transition numérique : IA, cloud, cybersécurité, compétences numériques et déploiement d'infrastructures."
  },
  {
    theme: "industrie",
    question: "Pourquoi l'ADN européen est-il décrit comme « anti-puissance » dans le contexte de l'autonomie stratégique ?",
    options: ["L'UE n'a pas d'armée propre", "Le projet européen a été fondé sur le rejet des logiques de puissance (nationalisme = guerre)", "Les États membres s'y opposent tous", "Le traité de Lisbonne l'interdit explicitement"],
    answer: 1,
    explanation: "Le projet européen, fondé sur la paix et la réconciliation post-1945, est fondamentalement hostile aux politiques de puissance. Agir comme une puissance n'est pas naturel pour l'UE — tous ses outils sont conçus pour l'interdépendance, pas la compétition géopolitique."
  },

  // === GREEN DEAL & NUMÉRIQUE — nouvelles questions ===
  {
    theme: "climat",
    question: "En quelle année le titre sur l'environnement a-t-il été ajouté aux traités européens ?",
    options: ["1972", "1979", "1986", "1992"],
    answer: 2,
    explanation: "L'Acte unique européen (1986) est le premier traité à ajouter un titre sur l'environnement. Avant cela, le Traité de Rome (1957) ne contenait aucune disposition environnementale."
  },
  {
    theme: "climat",
    question: "Quel est le coût annuel d'investissement nécessaire pour respecter les objectifs Fit for 55 ?",
    options: ["400 Md€/an", "700 Md€/an", "1 100 Md€/an", "2 000 Md€/an"],
    answer: 2,
    explanation: "1 100 Md€ doivent être investis annuellement pour respecter les objectifs Fit for 55 — une impasse à la fois politique et financière, qui explique les tensions autour du Green Deal."
  },
  {
    theme: "climat",
    question: "Quel est le numéro du programme d'action pour l'environnement en cours (2021-2030) ?",
    options: ["6e", "7e", "8e", "9e"],
    answer: 2,
    explanation: "L'UE s'est dotée de son 8e programme d'action pour l'environnement (2021-2030), avec 6 objectifs prioritaires dont la réduction des GES et la protection de la biodiversité."
  },
  {
    theme: "climat",
    question: "Quel risque social lié à la transition climatique est évoqué comme scénario à éviter ?",
    options: ["Exode rural massif", "Désindustrialisation accélérée", "Des « gilets jaunes européens »", "Montée du chômage technologique"],
    answer: 2,
    explanation: "Le coût social de la transition climatique est insuffisamment appréhendé — risque de provoquer des « gilets jaunes européens » si la transition n'est pas socialement juste. Le Fonds Social Climat (86,7 Md€) tente d'y répondre."
  },
  {
    theme: "climat",
    question: "Quel Livre blanc de 2020 vise à créer un écosystème européen d'excellence et de confiance autour de l'IA ?",
    options: ["Livre blanc sur la défense", "Livre blanc sur l'IA", "Livre blanc sur le numérique", "Livre blanc sur l'avenir de l'Europe"],
    answer: 1,
    explanation: "Livre blanc sur l'IA (2020) : la Commission propose de créer un écosystème d'excellence et de confiance européen, articulant innovation et régulation — troisième voie face aux modèles US (innovation sans contraintes) et chinois (contrôle étatique)."
  },
  {
    theme: "climat",
    question: "Quelle est la « troisième voie » européenne dans la régulation de l'IA face aux modèles américain et chinois ?",
    options: ["Interdire toute IA générative", "Créer une agence mondiale de l'IA", "Régulation par les risques + promotion de l'innovation (AI Act)", "Nationalisation des systèmes d'IA stratégiques"],
    answer: 2,
    explanation: "L'AI Act (2024) incarne la troisième voie européenne : régulation par les risques (interdiction, haut risque, IA générative, risque limité) sans bloquer l'innovation — face au modèle US (innovation sans contraintes) et chinois (contrôle étatique)."
  },
  {
    theme: "climat",
    question: "Quel Sommet international de 1992 marque le début des engagements climatiques européens dans le cadre de la CCNUCC ?",
    options: ["Sommet de Paris (1972)", "Sommet de Rio (1992)", "Protocole de Kyoto (1997)", "COP21 de Paris (2015)"],
    answer: 1,
    explanation: "Sommet de Rio (1992) : création de la CCNUCC (Convention-cadre des Nations unies sur les changements climatiques). Suivi du Protocole de Kyoto (1997) et de la mise en place du SEQE (ETS) en 2005."
  },

  // === SCÉNARIOS D'AVENIR — nouvelles questions ===
  {
    theme: "avenir",
    question: "Quel pourcentage de la population européenne vit sous le seuil de pauvreté selon le Rapport Draghi ?",
    options: ["10 %", "15 %", "20 %", "25 %"],
    answer: 2,
    explanation: "20 % de la population européenne vit sous le seuil de pauvreté (Rapport Draghi). Le coefficient de Gini de l'UE est de 30 — ces inégalités nourrissent le discours populiste et l'euroscepticisme."
  },
  {
    theme: "avenir",
    question: "Quelle sera approximativement la population française en 2040 ?",
    options: ["65 millions", "67 millions", "69,2 millions", "72 millions"],
    answer: 2,
    explanation: "69,2 millions d'habitants en France en 2040 (+2 M vs aujourd'hui), essentiellement grâce à l'immigration. Le vieillissement démographique est un défi structurel majeur, surtout en Europe de l'Est et du Sud."
  },
  {
    theme: "avenir",
    question: "Quelles sont les conditions du Scénario 1 (Europe forte) pour l'avenir de l'UE ?",
    options: ["Un accord commercial avec les US et la Chine", "Une convergence politique entre France, Allemagne, Pologne et États membres pro-européens", "L'élargissement à l'Ukraine d'ici 2030", "Un budget européen à 3 % du RNB"],
    answer: 1,
    explanation: "Le Scénario 1 (Europe forte) est conditionné à une convergence politique entre la France, l'Allemagne, la Pologne et les États membres pro-européens — renforcement de la défense, réformes institutionnelles, élargissement couplé à la majorité qualifiée."
  },
  {
    theme: "avenir",
    question: "Quel concept résume l'ambition nécessaire pour les dirigeants européens en faveur de l'intégration ?",
    options: ["Euro-réalisme", "Euro-scepticisme constructif", "Euro-volontarisme", "Fédéralisme pragmatique"],
    answer: 2,
    explanation: "L'euro-volontarisme : « On ne peut pas faire avancer l'Europe avec des discours timides — il faut être euro-volontariste. La France, pays fondateur, a un rôle clé à jouer. » Le leadership des dirigeants est présenté comme facteur déterminant de l'avenir européen."
  },
  {
    theme: "avenir",
    question: "Quels sont les 4 défis structurels identifiés pour l'avenir de l'UE ?",
    options: ["Défense, agriculture, numérique, énergie", "Langage de la puissance, défi éco/social/climatique, défi démocratique, croissance et souveraineté", "Migration, Brexit, État de droit, euroscepticisme", "Budget, élargissement, institutions, frontières"],
    answer: 1,
    explanation: "4 défis : (1) apprendre le langage de la puissance (Borrell), (2) défi économique, social et climatique (inégalités, vieillissement), (3) défi démocratique (désinformation, guerres hybrides), (4) défi de la croissance et de la souveraineté (réduire les dépendances)."
  },
  {
    theme: "avenir",
    question: "Quel est le Scénario 3 (noir) pour l'avenir de l'UE ?",
    options: ["Statu quo avec légère intégration", "Retrait britannique suivi d'autres États", "Crises internes et externes combinées : montée du populisme, isolement, retour en arrière chaotique", "Élargissement massif sans réforme institutionnelle"],
    answer: 2,
    explanation: "Scénario 3 (noir) : les crises internes et externes se combinent pour fragiliser la stabilité européenne. Montée de l'extrême droite, isolement international, retour en arrière chaotique — l'Europe pourrait devenir une cible face à des prédateurs."
  },
  {
    theme: "avenir",
    question: "Quelle nouvelle réalité géopolitique contraint l'UE à clarifier ses priorités stratégiques depuis janvier 2025 ?",
    options: ["L'adhésion de l'Ukraine à l'OTAN", "Le retour de Donald Trump à la Maison-Blanche", "La montée en puissance de la Turquie", "La crise des semi-conducteurs"],
    answer: 1,
    explanation: "Le retour de Donald Trump à la Maison-Blanche (janvier 2025) contraint l'UE à clarifier ses priorités : remise en cause de l'OTAN, pression tarifaire, affaiblissement du multilatéralisme, préférence pour les accords bilatéraux de puissance."
  },
];

// ---- DISSERTATIONS : 10 SUJETS ----------------------------
const DISSERTATIONS = [
  {
    titre: "L'Europe se fait-elle dans les crises ?",
    theme: "Intro & Chronologie",
    intro: "« J'ai toujours pensé que l'Europe se ferait dans les crises, et qu'elle se ferait par les crises » — Jean Monnet. Cette phrase matrice, citée par Moscovici en ouverture du cours, pose la question fondamentale : la crise est-elle le moteur indispensable de l'intégration européenne, ou révèle-t-elle au contraire les limites structurelles d'un projet politique sans gouvernement ?",
    parties: [
      {
        titre: "I. La crise comme moteur historique de l'intégration européenne",
        sousparties: [
          { titre: "A. Les crises fondatrices : de la guerre à l'intégration économique", points: ["Trauma de la Seconde Guerre mondiale → Traité de Paris (1951), Traité de Rome (1957)", "Logique des « petits pas » de Monnet : intégration sectorielle mène à l'union politique", "Chaque étape majeure naît d'une crise : CED (1954) → report de la défense, chaise vide (1965) → Compromis de Luxembourg"] },
          { titre: "B. Les grandes crises des années 2000 : approfondissement par nécessité", points: ["Rejet du traité constitutionnel (2005) → Traité de Lisbonne (2007)", "Crise financière (2008-2012) → MES, Union bancaire, TSCG, « Whatever it takes »", "Covid (2020) → rupture historique : NextGenerationEU, eurobonds acceptés, achats de vaccins collectifs"] }
        ]
      },
      {
        titre: "II. La polycrise révèle les limites structurelles du projet européen",
        sousparties: [
          { titre: "A. L'UE, machine de réaction mais pas d'anticipation", points: ["Réponses toujours tardives et imparfaites (Dublin échoue en 2015, réponse ukrainienne dépendante des US)", "Cohérente dans l'urgence du temps court, incapable dans le temps long (Moscovici)", "Tabou de la dette commune levé mais NextGenerationEU reste un « one off »"] },
          { titre: "B. Les crises qui fracturent : migration, État de droit, euroscepticisme", points: ["Crise migratoire 2015 : divisions entre États membres, échec des quotas (27 700 relocalisés sur 160 000)", "Crises de l'État de droit : Hongrie/Pologne défient l'UE de l'intérieur", "Brexit : preuve qu'un État peut quitter l'UE. Pour Moscovici : « un drame »"] }
        ]
      },
      {
        titre: "III. Quelle Europe pour demain ? De la polycrise à la puissance",
        sousparties: [
          { titre: "A. La polycrise comme opportunité de mutation", points: ["Guerre en Ukraine → ReArm Europe (800 Md€), candidature ukrainienne, fin de la neutralité scandinave", "Rivalité sino-américaine → autonomie stratégique, CBAM, Chips Act, CRM Act", "CFP 2028-2034 : 5 nouvelles ressources propres, fonds de compétitivité"] },
          { titre: "B. Vers une Europe apprenante le « langage de la puissance »", points: ["3 directions (Moscovici) : intégration éco, démocratie, puissance", "Communauté politique européenne (CPE, 2022) : 47 pays", "L'UE doit aller de la « somme des solutions » à une vision proactive"] }
        ]
      }
    ],
    citations: ["« L'Europe se fera dans les crises et elle sera la somme des solutions apportées à ces crises » — Jean Monnet", "« Whatever it takes » — Mario Draghi, 26 juillet 2012", "« L'Europe n'a jamais été aussi cohérente que dans l'urgence du temps court » — Moscovici"]
  },
  {
    titre: "L'Union économique et monétaire est-elle une zone monétaire optimale ?",
    theme: "Crises éco & financières",
    intro: "La création de l'euro en 1999 représente le saut le plus ambitieux de l'intégration européenne : une monnaie unique pour des économies très hétérogènes. La crise des dettes souveraines (2010-2015) a cruellement mis à l'épreuve cette architecture — révélant l'absence de mécanismes de stabilisation budgétaire, le manque de mobilité des travailleurs et les asymétries structurelles entre économies du Nord et du Sud.",
    parties: [
      {
        titre: "I. La construction incomplète de l'UEM : une union monétaire sans union budgétaire",
        sousparties: [
          { titre: "A. Les origines et l'architecture de l'euro", points: ["Étapes : Serpent monétaire (1972) → SME (1979) → Maastricht (1992) → BCE (1998) → euro scriptural (1999) → pièces (2002)", "Critères de convergence : déficit < 3 %, dette < 60 %, inflation modérée", "Zone euro : 20 pays, mais absence d'un budget fédéral, d'une fiscalité commune"] },
          { titre: "B. La théorie des zones monétaires optimales (Mundell) : un critère non rempli", points: ["Mundell (1961) : ZMO nécessite mobilité du travail, flexibilité des prix, mécanismes de transfert", "La zone euro manque de mobilité suffisante des facteurs et de mécanismes de péréquation", "Doom loop souverain/banques : cercle vicieux révélé par la crise grecque"] }
        ]
      },
      {
        titre: "II. La crise des dettes souveraines : révélateur des failles",
        sousparties: [
          { titre: "A. Les pays sous programme et les coûts humains de l'austérité", points: ["Grèce : 3 plans (110 Md€, 130 Md€, 86 Md€), -25 % PIB, chômage 28 %", "Portugal (78 Md€), Irlande (85 Md€), Espagne (100 Md€ recapitalisation bancaire)", "Débat académique : Alesina (austérité expansive) vs Krugman, Blyth, Stiglitz"] },
          { titre: "B. Les réponses institutionnelles et leurs limites", points: ["MES, Six-Pack, Two-Pack, TSCG, Union bancaire (pilier manquant : SEAD)", "« Whatever it takes » de Draghi (juillet 2012) : calme les marchés sans dépenser un euro", "Rôle ambigu de la Troïka : efficacité économique vs légitimité démocratique"] }
        ]
      },
      {
        titre: "III. Vers une zone monétaire plus robuste ?",
        sousparties: [
          { titre: "A. Les ruptures de NextGenerationEU", points: ["750 Md€ : première dette commune européenne (notation AAA)", "SURE : 100 Md€ protège 30 millions d'emplois", "Pas un « moment hamiltonien » (Spahn) mais rupture qualitative (Moscovici)"] },
          { titre: "B. L'Union de l'Épargne et de l'Investissement : le chantier ouvert", points: ["Paradoxe européen : taux d'épargne ~12 % mais sous-investissement chronique", "PIB/tête : 90 % des US en 2001 → 73 % aujourd'hui, croissance 2x inférieure", "Obstacles : absence d'actif sûr européen, fiscalité divergente, régimes d'insolvabilité"] }
        ]
      }
    ],
    citations: ["« Whatever it takes » — Mario Draghi, 26 juillet 2012", "« L'austérité est une idée dangereuse » — Mark Blyth", "NextGenerationEU : « rupture qualitative, pas encore un Hamilton Moment » — Moscovici"]
  },
  {
    titre: "L'Union européenne peut-elle apprendre le « langage de la puissance » ?",
    theme: "Géopolitique & Ukraine",
    intro: "« L'Europe est un géant économique, un nain politique et un ver militaire » — Mark Eyskens. Cette formule, prononcée pendant la guerre du Golfe, n'a jamais semblé aussi actuelle. Le projet européen, fondé sur la paix et l'interdépendance économique, est aujourd'hui bousculé par le retour de la guerre en Europe, le désengagement américain et la concurrence systémique sino-américaine.",
    parties: [
      {
        titre: "I. Un projet fondamentalement hostile aux politiques de puissance",
        sousparties: [
          { titre: "A. L'ADN pacifiste de la construction européenne", points: ["Traité de Rome (1957) : projet économique pour la paix", "Rejet de la CED (1954) : défense européenne morte dans l'œuf pour 70 ans", "OTAN comme « assurance-vie » permettant de délaisser la question militaire"] },
          { titre: "B. Une autonomie stratégique limitée", points: ["PESC depuis Maastricht (1992) : peu efficace sans unanimité", "Fragmentation industrielle : base de défense européenne très éclatée", "« Chantier qui reste sans plan d'architecte » (Louis Gautier)"] }
        ]
      },
      {
        titre: "II. La guerre en Ukraine comme électrochoc",
        sousparties: [
          { titre: "A. La réponse européenne : une capacité de réaction démontrée", points: ["19+ paquets de sanctions, +138 Md€ d'aide à l'Ukraine", "Activation pour la 1ère fois de la directive protection temporaire (4,3 M bénéficiaires)", "Facilité européenne pour la paix (FEP) : 6,5 Md€ d'équipements militaires (90 % létaux)"] },
          { titre: "B. Le plan ReArm Europe : tournant ou annonce ?", points: ["Mars 2025 : fonds SAFE (150 Md€), potentiel de 800 Md€ avec marges nationales", "Suède et Finlande rejoignent l'OTAN : fin de la neutralité scandinave", "Création d'un portefeuille « Défense » à la Commission (Andrius Kubilius, Lituanie)"] }
        ]
      },
      {
        titre: "III. Les obstacles structurels à la puissance européenne",
        sousparties: [
          { titre: "A. Les freins institutionnels et politiques", points: ["Défense = domaine régalien : unanimité requise au Conseil", "Fissures : Orbán (Hongrie), Fico (Slovaquie) bloquent l'aide à l'Ukraine", "Intrication capacitaire : sans les US (satellites, défense anti-balistique, dissuasion)"] },
          { titre: "B. Vers une Europe-puissance à géométrie variable ?", points: ["Coalition des volontaires (« willing ») : réalisme d'une Europe différenciée", "Communauté politique européenne (47 pays) : format innovant", "L'autonomie stratégique : soft power + hard power, avec le multilatéralisme comme ADN"] }
        ]
      }
    ],
    citations: ["« Europe is an economic giant, a political dwarf and a military worm » — Mark Eyskens", "« L'Europe doit apprendre le langage de la puissance » — Josep Borrell", "« Chantier qui reste sans plan d'architecte » — Louis Gautier"]
  },
  {
    titre: "La politique migratoire de l'UE est-elle à la hauteur des enjeux ?",
    theme: "Migration & Élargissement",
    intro: "En 2015, 1,2 million de personnes arrivent aux portes de l'Europe en une seule année. Cette crise révèle une réalité : l'UE s'est dotée d'un espace de libre circulation interne (Schengen) mais n'a jamais construit de véritable politique migratoire commune. Le Nouveau Pacte sur la Migration et l'Asile (mai 2024) constitue-t-il une réponse à la hauteur ou perpétue-t-il les mêmes logiques défaillantes ?",
    parties: [
      {
        titre: "I. Un espace Schengen sans politique commune : les limites du système de Dublin",
        sousparties: [
          { titre: "A. La construction de l'espace de libre circulation", points: ["Traité de Rome (1957) : 4 libertés, uniquement sous angle économique", "Accord de Schengen (1985), Convention (1995) : suppression des frontières intérieures", "Maastricht (1992) : citoyenneté européenne, 3e pilier JAI"] },
          { titre: "B. L'échec du système de Dublin en situation de crise", points: ["Principe : l'État de première entrée est responsable → pèse sur Grèce et Italie", "2015 : 160 000 relocalisations proposées, seulement 27 700 réalisées", "Hongrie : référendum anti-quotas (98 % contre, invalide car participation < 50 %)"] }
        ]
      },
      {
        titre: "II. Les 4 facteurs du retour des frontières depuis 2015",
        sousparties: [
          { titre: "A. Terrorisme, migration, commerce, Covid", points: ["33 attentats en 2017 → contrôles temporaires aux frontières intérieures Schengen", "Arrivées 2015 : 1,2 M → crise politique, montée identitaire (Orbán : « Europe chrétienne »)", "Commerce : barrières US/Chine → protection commerciale accrue dès 2019 (filtrage IDE)"] },
          { titre: "B. Les nouveaux outils de gestion des frontières", points: ["Frontex réformée : 10 000 gardes-frontières d'ici 2027, budget 6 M€ (2005) → 845 M€ (2024)", "EURODAC renforcé : empreintes + images faciales dès 6 ans, stockage 10 ans", "Externalisation : accords UE-Turquie (3 Md€), Libye, Tunisie, Soudan"] }
        ]
      },
      {
        titre: "III. Le Pacte 2024 : avancée ou perpétuation des logiques défaillantes ?",
        sousparties: [
          { titre: "A. Les innovations du Pacte", points: ["Solidarité obligatoire mais flexible : relocalisation ou 20 000 €/migrant non accueilli", "Procédure de filtrage 7 jours + procédure accélérée aux frontières (12 semaines)", "Au moins 30 000 relocalisations/an prévues"] },
          { titre: "B. Les critiques et limites", points: ["Maintien de la logique Dublin : poids sur pays de première entrée toujours présent", "Généralisation de la rétention y compris pour mineurs → risque de violation des droits", "Externalisation croissante : délégation à des partenaires aux pratiques contestées"] }
        ]
      }
    ],
    citations: ["« L'Europe perd en intensité ce qu'elle gagne en extension » — François Perroux", "Accord UE-Turquie : 3 Md€ pour bloquer les flux (mars 2016)", "Pacte 2024 : « solidarité obligatoire mais flexible »"]
  },
  {
    titre: "Le Green Deal européen face au « green backlash » : l'ambition climatique de l'UE est-elle menacée ?",
    theme: "Green Deal & Numérique",
    intro: "Le Pacte Vert européen (décembre 2019) promettait de faire de l'Europe le premier continent climatiquement neutre. Quelques années plus tard, les Verts ont perdu 19 sièges au Parlement, la Commission von der Leyen II est la plus à droite de l'histoire, et l'objectif d'interdiction des véhicules thermiques en 2035 est remis en question. L'ambition climatique peut-elle résister à la pression politique et économique ?",
    parties: [
      {
        titre: "I. Une ambition climatique pionnière ancrée dans les traités",
        sousparties: [
          { titre: "A. De Kyoto à la Loi européenne sur le climat", points: ["Protocole de Kyoto (1997) : SEQE (ETS) créé en 2005", "Accord de Paris (2015) : UE s'engage à -40 % d'émissions → relevé à -55 %", "Loi européenne sur le climat (juin 2021) : objectifs climatiques juridiquement contraignants"] },
          { titre: "B. Le paquet Fit for 55 : un arsenal législatif sans précédent", points: ["5 directives + 8 règlements adoptés en 2021-2022", "Interdiction véhicules thermiques (2035), réforme ETS, CBAM (1er oct. 2023)", "Fonds Social Climat (86,7 Md€) pour ménages vulnérables"] }
        ]
      },
      {
        titre: "II. Le green backlash : résistances politiques et économiques",
        sousparties: [
          { titre: "A. L'érosion électorale de 2024", points: ["Verts : de 72 à 53 sièges (- 19 siège), plus grands perdants des élections de 2024", "Commission von der Leyen II : 44 % PPE, tournant à droite sur le climat", "Renew Europe passe de 3e à 5e groupe : perte du pivot centriste"] },
          { titre: "B. Les 5 défis structurels du Green Deal", points: ["Divergences politiques entre EM sur Fit for 55", "Coût de la transition énorme → nouvelles ressources nécessaires", "Risque de nouvelles dépendances (terres rares chinoises, panneaux solaires)", "Hiérarchisation des priorités pas claire", "Coût social mal appréhendé → risque de « gilets jaunes européens »"] }
        ]
      },
      {
        titre: "III. Réorientation ou capitulation ? Les scénarios pour l'ambition climatique",
        sousparties: [
          { titre: "A. La géopolitique au service du climat : REPowerEU", points: ["Invasion russe → accélération de la sortie des énergies fossiles russes", "REPowerEU : EnR rehaussé à 45 %, 20 Md€ supplémentaires", "Net Zero Industry Act : 40 % des techs vertes produites en Europe d'ici 2030"] },
          { titre: "B. Maintenir le cap sans perdre le soutien populaire", points: ["CBAM : protection contre la concurrence déloyale à l'extérieur", "CFP 2028-2034 : recettes ETS (~9,6 Md€/an) comme ressource propre", "L'enjeu : articuler justice sociale et transition écologique pour éviter le backlash"] }
        ]
      }
    ],
    citations: ["« Green backlash » : recul écologique politique constaté aux élections 2024", "CBAM : entrée en vigueur transitoire 1er octobre 2023, plein effet 2026", "Loi européenne sur le climat (juin 2021) : objectifs juridiquement contraignants"]
  },
  {
    titre: "L'État de droit est-il soluble dans l'Union européenne ? Le cas Hongrie-Pologne",
    theme: "État de droit",
    intro: "« L'État illibéral » revendiqué par Viktor Orbán depuis 2014 constitue un défi sans précédent pour l'UE : un État membre qui respecte formellement les traités tout en démantelant systématiquement les contre-pouvoirs (justice, médias, société civile). Comment l'UE, qui ne dispose pas de police ni d'armée, peut-elle contraindre un État souverain à respecter ses valeurs fondamentales ?",
    parties: [
      {
        titre: "I. La démocratie illibérale comme stratégie politique cohérente",
        sousparties: [
          { titre: "A. Le modèle Orbán (Hongrie, depuis 2010)", points: ["2011 : 'Loi fondamentale', restriction Cour constitutionnelle, médias encadrés", "~90 % des médias hongrois aux mains d'oligarques proches du Fidesz", "Loi anti-ONG (2017), fermeture CEU (2019), référendum anti-quotas (2016)"] },
          { titre: "B. Le modèle PiS (Pologne, 2015-2023)", points: ["Réformes judiciaires : Tribunal constitutionnel, Chambre disciplinaire politique", "'Petite loi' et 'Grande loi' médias (2015-2016) : repolonisation des médias", "Loi avortement (oct. 2020) : interdiction quasi-totale par Tribunal constitutionnel"] }
        ]
      },
      {
        titre: "II. Les instruments européens de réponse et leurs limites",
        sousparties: [
          { titre: "A. L'arsenal juridique : de l'article 7 au mécanisme de conditionnalité", points: ["Art. 7-1 activé : PL (déc. 2017), HU (sept. 2018)", "Art. 7-2 jamais appliqué : unanimité bloquée par vetos croisés HU/PL", "Mécanisme de conditionnalité (déc. 2020) : fonds suspendus si violation de l'État de droit"] },
          { titre: "B. Les résultats concrets", points: ["21 Md€ gelés pour la Hongrie ; 1 Md€ d'engagements irrévocablement retirés (2025)", "CJUE (16 fév. 2022) : valide le mécanisme, rejette les recours HU/PL", "Pologne (oct. 2023) : alternance Tusk → retour dans le jeu européen"] }
        ]
      },
      {
        titre: "III. Au-delà du cas HU/PL : une menace systémique pour l'UE",
        sousparties: [
          { titre: "A. L'illibéralisme comme tendance européenne", points: ["Portugal (Chega 9 %), Italie (Meloni / ECR), France (RN : + de 40 % aux européennes)", "ECR (78 sièges) + Patriotes (86) + ENS : ~200 élus d'extrême droite au PE", "Affaiblissement du couple franco-allemand et des partis traditionnels"] },
          { titre: "B. Réformes institutionnelles nécessaires", points: ["Passage à la majorité qualifiée sur les questions fiscales et étrangères", "Renforcement du mécanisme de conditionnalité (rapport PE déc. 2025)", "Conditionnalité de l'adhésion : vigilance accrue sur les critères de Copenhague"] }
        ]
      }
    ],
    citations: ["« Démocratie illibérale » — Viktor Orbán, discours de Băile Tușnad, juillet 2014", "CJUE, 16 février 2022 : « le respect de l'État de droit est une condition préalable à la jouissance des droits découlant des traités »", "Art. 7 TUE : « bombe atomique non utilisable »"]
  },
  {
    titre: "Le Brexit : accident de l'histoire ou symptôme des fractures européennes ?",
    theme: "Migration & Élargissement",
    intro: "« Un drame pour l'UE, qui a perdu sa 2e économie. C'est l'autre membre permanent du Conseil de sécurité de l'ONU, c'est l'autre puissance européenne. Faire une défense européenne sans les Britanniques : c'est insensé. » (Moscovici). Le Brexit est-il l'exception britannique ou le révélateur de fractures plus profondes, susceptibles de se répéter ?",
    parties: [
      {
        titre: "I. Les racines profondes du Brexexit : l'exception britannique",
        sousparties: [
          { titre: "A. Une relation toujours distante", points: ["Vetos gaullistes (1963, 1967) → adhésion tardive seulement en 1973", "« I want my money back » (Thatcher) → rabais britannique (1984)", "Opt-out de l'euro, de Schengen, affaiblissement de la solidarité budgétaire"] },
          { titre: "B. La montée de l'euroscepticisme britannique", points: ["Référendum 2016 : 51,9 % Leave, participation 72,2 %", "Géographie des clivages : Londres/Écosse/Irlande du Nord (Remain) vs Angleterre rurale (Leave)", "Clivage jeunes/diplômés/urbains vs territoires en déclin (préfigure la carte du RN)"] }
        ]
      },
      {
        titre: "II. Les négociations : l'UE reste unie, le RU se fragmente",
        sousparties: [
          { titre: "A. La cohésion européenne sous Michel Barnier", points: ["Pas de « Brexit à la carte » : l'UE maintient l'unité des 27 tout au long des négociations", "5 gouvernements conservateurs successifs : Cameron, May, Johnson, Truss, Sunak", "Art. 50 TUE (déc. mars 2017) → sortie effective 31 jan. 2020 → fin transition 31 déc. 2020"] },
          { titre: "B. La question irlandaise : préserver la paix", points: ["Accord du Vendredi Saint (1998) : frontière ouverte entre Irlande et Irlande du Nord", "Northern Ireland Protocol (2020) puis Windsor Framework (fév. 2023)", "Illustration de la complexité d'un retrait : impossible de tout défaire"] }
        ]
      },
      {
        titre: "III. Les leçons du Brexit pour l'avenir de l'intégration",
        sousparties: [
          { titre: "A. Un bilan globalement négatif pour le Royaume-Uni", points: ["-4 % PIB long terme (OBR)", "Pénurie de main d'œuvre, inflation alimentaire, perte d'influence internationale", "Pari du « Global Britain » perdu"] },
          { titre: "B. L'effet paradoxal sur l'UE : sentiment pro-européen renforcé", points: ["Pas d'effet domino : sentiment pro-européen renforcé chez les 27 restants", "Leçon de Moscovici : « sur un référendum européen, c'est toujours le non qui gagne »", "Le Brexit accélère la défense européenne (fin de l'opposition britannique) et la cohésion"] }
        ]
      }
    ],
    citations: ["« Un drame pour l'UE » — Pierre Moscovici, à propos du Brexit", "« Global Britain » — slogan du camp Leave, bilan négatif selon l'OBR (-4 % PIB)", "« Sur un référendum européen : c'est toujours le non qui gagne » — Moscovici"]
  },
  {
    titre: "L'Union européenne face à la rivalité sino-américaine : quelles marges de manœuvre ?",
    theme: "Géopolitique & Ukraine",
    intro: "Prise en étau entre les États-Unis qui lui demandent de choisir son camp et une Chine qui représente à la fois son premier partenaire commercial et un rival systémique, l'Union européenne cherche à définir une « autonomie stratégique » dans un monde qui ne lui en laisse guère le loisir. Quelle est la marge de manœuvre réelle d'une puissance économique qui peine encore à parler le langage de la puissance politique ?",
    parties: [
      {
        titre: "I. L'UE dans le jeu sino-américain : dépendances et vulnérabilités",
        sousparties: [
          { titre: "A. La dépendance structurelle à la Chine", points: ["Chine = 1er partenaire commercial de l'UE (16 % des échanges extérieurs)", "Ports : opérateurs chinois présents dans 14 ports dont Rotterdam, Anvers, Hambourg", "137 produits identifiés en écosystèmes sensibles (semi-conducteurs, terres rares, médicaments)"] },
          { titre: "B. La pression américaine au découplage", points: ["IRA américain (369 Md$) : risque de désinvestissement européen vers les US", "Trump II : pression tarifaire, remise en cause de l'OTAN, affaiblissement multilatéralisme", "Dilemme : jusqu'où aligner la politique commerciale européenne sur Washington ?"] }
        ]
      },
      {
        titre: "II. Les réponses européennes : entre protection et ouverture",
        sousparties: [
          { titre: "A. Les outils de protection commerciale et industrielle", points: ["Mécanisme filtrage IDE (2019/2020) : notification des investissements étrangers sensibles", "CBAM (oct. 2023) : taxe carbone aux frontières, empêche la délocalisation des émissions", "Foreign Subsidies Regulation (2023) : sanctionner les entreprises subventionnées par des États tiers"] },
          { titre: "B. La stratégie de « derisking » sans découplage", points: ["Net Zero Industry Act : 40 % des techs vertes en UE d'ici 2030", "Chips Act (43 Md€) : 20 % production mondiale semi-conducteurs", "CRM Act (2024) : 10 % extraction, 40 % transformation en UE"] }
        ]
      },
      {
        titre: "III. L'enjeu : construire une Europe-puissance dans un monde de blocs",
        sousparties: [
          { titre: "A. L'autonomie stratégique : soft et hard power", points: ["Concept porté par la France depuis 2013, repris par la Commission", "« L'Europe doit apprendre le langage de la puissance » (Borrell)", "UE = à la fois puissance commerciale, normative (RGPD, AI Act) et émergente en défense"] },
          { titre: "B. Les limites d'une Europe-puissance", points: ["Accord global d'investissement UE-Chine (CAI, 2020) : gelé depuis sanctions Ouïghours", "Fissures internes : Orbán (pro-Chine, pro-Russie), divisions sur les droits de douane auto", "L'UE doit comprendre qu'elle vit dans un monde où la puissance économique s'appuie sur une capacité politique et militaire réelle"] }
        ]
      }
    ],
    citations: ["« L'Europe doit apprendre le langage de la puissance » — Josep Borrell", "Chine = « partenaire, rival systémique et concurrent économique majeur » — stratégie UE", "CBAM : entrée en vigueur 1er octobre 2023, plein effet 2026"]
  },
  {
    titre: "Les institutions européennes sont-elles en crise de légitimité démocratique ?",
    theme: "Euroscepticisme & Avenir",
    intro: "En 2024, pour la première fois depuis la création du Parlement européen élu au suffrage universel direct, un petit tiers des sièges est occupé par des formations eurosceptiques ou d'extrême droite. Le déficit démocratique européen — dénoncé depuis Maastricht — semble se muer en crise de représentation. Peut-on réformer les institutions sans toucher aux traités ? Peut-on approfondir la démocratie européenne sans risquer l'implosion ?",
    parties: [
      {
        titre: "I. Le « déficit démocratique » : un débat aussi vieux que la construction européenne",
        sousparties: [
          { titre: "A. Les origines institutionnelles du déficit", points: ["Commission non élue : monopole de l'initiative législative sans responsabilité directe devant les citoyens", "Conseil de l'UE : opacité des négociations, représentation des États pas des citoyens", "Parlement = seule institution élue mais rôle longtemps subalterne"] },
          { titre: "B. Les tentatives de réponse et leurs limites", points: ["Suffrage universel direct depuis 1979 (Simone Veil), pouvoirs du PE croissants", "Initiative citoyenne européenne (Lisbonne) : très peu utilisée", "Référendum sur la Constitution (2005) : rejeté → sentiment de contournement du vote populaire (Lisbonne 2007)"] }
        ]
      },
      {
        titre: "II. La montée de l'euroscepticisme et de l'illibéralisme",
        sousparties: [
          { titre: "A. Les résultats des élections européennes 2024", points: ["Extrême droite : ~200 sièges sur 720 (Patriotes 86, ECR 78, ENS)", "Verts : de 72 à 53 sièges (green backlash), Renew : de 101 à 77", "Participation en hausse (51 %) mais RN = délégation nationale la plus importante"] },
          { titre: "B. Les facteurs structurels de l'euroscepticisme", points: ["Désindustrialisation, inégalités territoriales, sentiment d'abandon", "Fracture urbain/rural (carte du référendum Maastricht = carte RN)", "Crises non résolues : migration, austérité, État de droit → désillusion"] }
        ]
      },
      {
        titre: "III. Réformer la démocratie européenne : urgence et obstacles",
        sousparties: [
          { titre: "A. Les réformes nécessaires", points: ["Passage à la majorité qualifiée en fiscalité et politique étrangère (Moscovici)", "Transparence accrue du Conseil de l'UE dans la prise de décision", "Renforcement du contrôle parlementaire sur la Commission"] },
          { titre: "B. Le paradoxe de la réforme", points: ["Toute réforme majeure nécessite l'unanimité des États → très difficile", "Europe à plusieurs vitesses : risque d'une Europe à deux classes", "Le pari de Moscovici : rendre l'Europe plus démocratique et efficace pour en finir avec le déficit de légitimité"] }
        ]
      }
    ],
    citations: ["+ 25 % de l'extrême droite au Parlement européen (2024) — Moscovici", "Participation 51 % en 2024 : hausse qui contredit l'idée de désintérêt", "« L'Europe se prépare difficilement en avant » — faiblesse structurelle (Moscovici)"]
  },
  {
    titre: "Comment financer l'Europe de demain ? Le budget européen face aux défis du XXIe siècle",
    theme: "Crises éco & financières",
    intro: "Le budget annuel de l'UE représente environ 1,08 % du RNB européen — bien moins que le budget d'un État fédéral comme les États-Unis (~25 %) ou même d'un État national comme la France (~55 %). Comment une Union censée répondre aux grandes crises mondiales peut-elle le faire avec un budget aussi contraint ? Le CFP 2028-2034 marque-t-il un tournant vers une plus grande autonomie financière de l'UE ?",
    parties: [
      {
        titre: "I. Les limites structurelles du budget européen actuel",
        sousparties: [
          { titre: "A. Un budget trop petit et tourné vers le passé", points: ["1 % du RNB vs 40 % pour les États nationaux", "30 % vers l'agriculture (1 % de la population active)", "Peu de ressources propres : essentiellement contributions nationales (~70 % via RNB)"] },
          { titre: "B. Les clivages politiques autour du budget", points: ["Frugaux (NL, SE, DK, AT, FI) vs Dépensiers (FR, ES, IT, GR)", "Contributeurs nets vs bénéficiaires nets", "Priorités traditionnelles (PAC, cohésion) vs nouvelles (défense, numérique, climat)"] }
        ]
      },
      {
        titre: "II. NextGenerationEU : rupture ou exception ?",
        sousparties: [
          { titre: "A. La rupture historique de 2020", points: ["750 Md€ : 1ère dette commune (notation AAA, taux très bas)", "SURE (100 Md€) : protège 30 millions d'emplois", "Achats collectifs de vaccins : innovation sans base juridique directe (art. 168 TFUE)"] },
          { titre: "B. Les limites du dispositif", points: ["Non pérenne : « one off » réponse à la pandémie", "Remboursement d'ici 2058 → nouvelles ressources propres indispensables", "Frugaux ont obtenu la réduction des subventions (500 → 390 Md€)"] }
        ]
      },
      {
        titre: "III. Le CFP 2028-2034 : vers une souveraineté financière ?",
        sousparties: [
          { titre: "A. Les 5 nouvelles ressources propres proposées", points: ["Marché carbone ETS (~9,6 Md€/an)", "CBAM (~1,4 Md€/an)", "Taxe déchets électroniques (jusqu'à 15 Md€/an)", "Droits d'accise tabac (~11,2 Md€/an)", "Contribution grandes entreprises CORE (~6,8 Md€/an) → total ~58,5 Md€/an"] },
          { titre: "B. Les 3 scénarios pour l'Europe financière", points: ["Scénario 1 : statu quo maîtrisé → stabilité mais incapacité à financer les priorités", "Scénario 2 : saut fédéral partiel → autonomie mais nécessite compromis fort", "Scénario 3 : intégration par les marchés (UEI) → mobiliser l'épargne privée"] }
        ]
      }
    ],
    citations: ["Budget UE = 1 % du RNB vs 40 % pour les États nationaux", "NextGenerationEU : « rupture qualitative mais pas encore un Hamilton Moment » — Moscovici", "5 nouvelles ressources propres CFP 2028-2034 : ~58,5 Md€/an estimés"]
  },
  {
    titre: "L'Europe peut-elle rattraper son retard industriel et technologique face aux États-Unis et à la Chine ?",
    theme: "Autonomie industrielle",
    intro: "« L'Europe doit apprendre le langage de la puissance » (Borrell). Aucun géant technologique européen face aux GAFAM américains et BATX chinois, 6 des 10 premiers producteurs de batteries VE sont chinois, 137 produits en dépendance critique identifiés par la Commission — le constat du Rapport Draghi (2024) est alarmant. L'UE dispose pourtant d'atouts réels : le plus grand marché unique mondial, un capital humain de qualité, une épargne abondante. Comment transformer ces atouts en autonomie industrielle et technologique ?",
    parties: [
      {
        titre: "I. Le diagnostic : un retard structurel aux racines multiples",
        sousparties: [
          { titre: "A. Les vulnérabilités mises en évidence", points: ["Aucun GAFAM européen : fragmentation des marchés nationaux empêche l'émergence de géants tech", "Dépendance aux batteries chinoises : 6/10 premiers producteurs mondiaux, 56 % de PDM, 40 % de la valeur d'un VE", "137 produits identifiés en dépendance critique (6 % des importations) : semi-conducteurs, terres rares, médicaments", "Domaine financier : prééminence du dollar, marchés financiers dominés par les US"] },
          { titre: "B. Les causes profondes", points: ["L'ADN anti-puissance de l'UE : projet fondé sur la paix, pas sur la compétition stratégique", "Gouvernance fragmentée : seuls certains pans de la politique économique sont conduits à l'échelle européenne", "Retard dans l'investissement en R&D, fragmentation des marchés de capitaux (paradoxe européen : épargne élevée, sous-investissement)"] }
        ]
      },
      {
        titre: "II. Les outils déployés pour l'autonomie stratégique",
        sousparties: [
          { titre: "A. Politique de R&I et innovation", points: ["Horizon Europe (95,5 Md€, 2021-2027) : principal outil de financement", "IET (Institut européen d'innovation et de technologie, 2008)", "Programme Digital Europe (7,6 Md€) : transition numérique, IA, cloud, cybersécurité", "AI Act (2024) : 1ère régulation mondiale par les risques — troisième voie entre US et Chine"] },
          { titre: "B. Politique industrielle et contrôle des dépendances", points: ["Net Zero Industry Act (2024) : 40 % des technologies vertes produites en UE d'ici 2030", "Chips Act (2023) : 43 Md€, objectif 20 % de la production mondiale de semi-conducteurs", "CRM Act (2024) : 10 % extraction, 40 % transformation, 25 % recyclage en UE", "Mécanisme filtrage IDE (2019/2020), Foreign Subsidies Regulation (2023)"] }
        ]
      },
      {
        titre: "III. Les conditions d'une véritable autonomie industrielle",
        sousparties: [
          { titre: "A. Réformer la gouvernance économique européenne", points: ["Union de l'Épargne et de l'Investissement (UEI) : mobiliser les 12 % d'épargne disponible", "Consolider les universités européennes, réformer les brevets (brevet unitaire)", "Renforcer les programmes de financement, stimuler l'investissement privé en capital-risque", "Rapport Draghi : 800 Md€/an d'investissements supplémentaires nécessaires"] },
          { titre: "B. L'équilibre entre ouverture et protection", points: ["Autonomie ≠ protectionnisme : ne pas abandonner le libre-échange ni la relation transatlantique", "« Derisking » sans découplage total de la Chine (1er partenaire commercial, 16 % des échanges)", "Buy European Act (proposition française) : favoriser les produits européens dans les marchés publics", "Agir de manière autonome quand c'est nécessaire, avec des partenaires quand c'est possible"] }
        ]
      }
    ],
    citations: ["« L'Europe doit apprendre le langage de la puissance » — Josep Borrell", "Rapport Draghi (2024) : 800 Md€ d'investissements supplémentaires annuels nécessaires", "6 des 10 premiers producteurs de batteries VE sont chinois (56 % de PDM) — vulnérabilité structurelle"]
  },
  {
    titre: "L'UE peut-elle réussir sa double transition climatique et numérique ?",
    theme: "Green Deal & Numérique",
    intro: "L'Union européenne s'est fixé des objectifs climatiques parmi les plus ambitieux au monde (neutralité carbone en 2050, -55 % d'émissions en 2030) et entend faire de la décennie 2020-2030 sa « Digital Decade ». Pourtant, le « green backlash » de 2024 (chute des Verts, Commission la plus à droite de l'histoire) et le retard technologique chronique face aux GAFAM et BATX posent une question centrale : l'UE peut-elle simultanément tenir ses engagements climatiques, rattraper son retard numérique et maintenir sa compétitivité économique ?",
    parties: [
      {
        titre: "I. Des ambitions pionnières confrontées à des résistances croissantes",
        sousparties: [
          { titre: "A. Le Green Deal : ambition maximale et « green backlash »", points: ["Loi européenne sur le climat (2021) : objectifs juridiquement contraignants pour 2030 et 2050", "Fit for 55 : 5 directives + 8 règlements, interdiction véhicules thermiques (2035), ETS réformé, CBAM", "Green backlash : Verts passent de 72 à 53 sièges en 2024 ; Commission von der Leyen II = 44 % PPE", "1 100 Md€/an d'investissements nécessaires pour Fit for 55 → impasse financière"] },
          { titre: "B. Le retard numérique : une décennie perdue ?", points: ["Aucun GAFAM européen, retard sur l'IA face aux US et à la Chine", "L'UE a loupé le tournant des années 2010 : régulation tardive seulement à partir de 2020", "Dépendance cloud structurelle vis-à-vis des États-Unis", "RGPD (2018) : succès normatif mondial mais frein perçu à l'innovation"] }
        ]
      },
      {
        titre: "II. Les outils de rattrapage déployés",
        sousparties: [
          { titre: "A. La transition climatique : instruments complémentaires", points: ["REPowerEU (mai 2022) : sortir du gaz russe d'ici 2027, ENR portés à 45 % en 2030", "CBAM (oct. 2023) : protection contre la délocalisation des émissions, plein effet 2026", "Net Zero Industry Act (2024) : 40 % des technologies vertes produits en UE d'ici 2030", "Fonds Social Climat (86,7 Md€) : accompagner les ménages vulnérables dans la transition"] },
          { titre: "B. La transition numérique : bâtir un modèle européen", points: ["DSA (2022) : responsabilité des plateformes, modération, lutte contre la désinformation", "DMA (2022) : mettre fin à la domination des « gatekeepers » (Apple, Google, Meta, Amazon…)", "AI Act (2024) : première régulation mondiale de l'IA, approche par les risques", "Chips Act (43 Md€) : 20 % de la production mondiale de semi-conducteurs en 2030"] }
        ]
      },
      {
        titre: "III. Les conditions d'une double transition réussie",
        sousparties: [
          { titre: "A. Articuler transition et compétitivité", points: ["Rapport Draghi : sans financement massif (800 Md€/an), pas de transition réussie", "Union de l'Épargne et de l'Investissement : mobiliser l'épargne privée pour financer la transition", "CFP 2028-2034 : recettes ETS et CBAM comme nouvelles ressources propres (~11 Md€/an)"] },
          { titre: "B. Éviter les pièges : dépendances, coût social, backlash", points: ["Risque de nouvelles dépendances : terres rares chinoises, panneaux solaires, batteries", "Coût social mal appréhendé → risque de « gilets jaunes européens »", "L'UE doit montrer que transitions climatique et numérique sont compatibles avec emploi et prospérité"] }
        ]
      }
    ],
    citations: ["Fit for 55 : 1 100 Md€/an nécessaires — impasse politique et financière", "AI Act (2024) : 1ère régulation mondiale de l'IA — modèle européen face aux modèles US et chinois", "REPowerEU : sortir du gaz russe d'ici 2027, ENR à 45 % en 2030"]
  },
  {
    titre: "Quels scénarios pour l'avenir de l'Union européenne ?",
    theme: "Euroscepticisme & Avenir",
    intro: "Le projet européen a été fondé sur un idéal : créer une paix perpétuelle sur le continent. Aujourd'hui, l'UE fait face à un faisceau de crises simultanées — guerre en Ukraine, retour de Trump, montée de l'extrême droite, décrochage économique, crise de l'État de droit — qui dessinent trois scénarios possibles : une Europe plus forte, un enlisement gris, ou un effondrement chaotique. L'avenir se jouera sur des facteurs politiques : le leadership des dirigeants, la situation économique et la capacité à transformer les crises en opportunités.",
    parties: [
      {
        titre: "I. Les réponses stratégiques engagées depuis 2024",
        sousparties: [
          { titre: "A. Les grandes initiatives récentes", points: ["Rapport Draghi (sept. 2024) : 800 Md€/an d'investissements supplémentaires, diagnostic alarmant sur la compétitivité", "Plan ReArm Europe / SAFE (mars 2025) : 150 Md€ pour l'industrie de défense, potentiel de 800 Md€", "CFP 2028-2034 : 5 nouvelles ressources propres, fonds de compétitivité, flexibilité accrue"] },
          { titre: "B. Le contexte politique contraignant", points: ["Retour de Trump (jan. 2025) : remise en cause OTAN, pression tarifaire, préférence pour les accords de puissance", "~200 eurodéputés d'extrême droite sur 720 : Patriotes (86), ECR (78), ENS", "20 % de la population européenne sous le seuil de pauvreté (Gini = 30) → terreau du populisme"] }
        ]
      },
      {
        titre: "II. Les 4 défis structurels à surmonter",
        sousparties: [
          { titre: "A. Puissance et souveraineté", points: ["Apprendre le langage de la puissance : fin de la guerre en Ukraine, européaniser l'OTAN, parler d'une seule voix", "Réduire les dépendances : gaz russe, parapluie nucléaire US, matières premières critiques, cloud, médicaments", "Décrochage économique : PIB/tête 73 % des US (vs 90 % en 2001), croissance 2x inférieure"] },
          { titre: "B. Démocratie, cohésion et démographie", points: ["Défi démocratique : désinformation, ingérence électorale, guerre des modèles, liberté de la presse", "Fossés socio-économiques : inégalités nourrissent le discours populiste et l'euroscepticisme", "Démographie : vieillissement (Europe Est/Sud), immigration indispensable au maintien de la population active"] }
        ]
      },
      {
        titre: "III. Les trois scénarios d'avenir",
        sousparties: [
          { titre: "A. Scénario 1 (Fort) et Scénario 2 (Gris)", points: ["Scénario 1 (Europe forte) : coalition pro-européenne, défense européenne, élargissement + réformes institutionnelles (MQ), harmonisation fiscale → conditionné à la convergence FR/DE/PL", "Scénario 2 (Gris) : immobilisation sans effondrement, zone instable mais résistante → probable si intérêts nationaux restent divergents"] },
          { titre: "B. Scénario 3 (Noir) et la voie de sortie", points: ["Scénario 3 (Noir) : crises internes + externes combinées, montée du populisme, isolement, retour en arrière chaotique — l'Europe devient une cible", "La voie de sortie : l'euro-volontarisme — « on ne peut pas faire avancer l'Europe avec des discours timides »", "La France, pays fondateur, a un rôle clé à jouer dans le leadership européen"] }
        ]
      }
    ],
    citations: ["« On ne peut pas faire avancer l'Europe avec des discours timides — il faut être euro-volontariste »", "Rapport Draghi (2024) : 800 Md€/an d'investissements supplémentaires nécessaires", "« L'Europe doit apprendre le langage de la puissance » — Borrell"]
  },
];

// ---- CITATIONS : 20 -----------------------------------
const CITATIONS = [
  {
    quote: "J'ai toujours pensé que l'Europe se ferait dans les crises, et qu'elle se ferait par les crises.",
    author: "Jean Monnet",
    context: "Père fondateur de l'Europe. Phrase matrice du cours citée par Moscovici en Session 1.",
    distractors: ["Jacques Delors", "Robert Schuman", "Pierre Moscovici"]
  },
  {
    quote: "The ECB is ready to do whatever it takes to preserve the euro. And believe me, it will be enough.",
    author: "Mario Draghi",
    context: "Discours à Londres, 26 juillet 2012. A sauvé l'euro sans qu'un seul euro ne soit dépensé.",
    distractors: ["Christine Lagarde", "Jean-Claude Trichet", "Ursula von der Leyen"]
  },
  {
    quote: "Nous sommes une fédération d'États-nations.",
    author: "Jacques Delors",
    context: "Définition revendiquée par Moscovici pour qualifier la nature hybride de l'UE.",
    distractors: ["Jean Monnet", "Robert Schuman", "François Mitterrand"]
  },
  {
    quote: "Europe is an economic giant, a political dwarf and a military worm.",
    author: "Mark Eyskens",
    context: "Ex-Premier ministre belge, pendant la guerre du Golfe. Formule toujours d'actualité.",
    distractors: ["Henry Kissinger", "Donald Rumsfeld", "Jacques Chirac"]
  },
  {
    quote: "I want my money back.",
    author: "Margaret Thatcher",
    context: "Plaidoyer pour l'exceptionnalisme britannique. Obtention du rabais britannique en 1984.",
    distractors: ["Tony Blair", "John Major", "Gordon Brown"]
  },
  {
    quote: "L'Europe doit apprendre le langage de la puissance.",
    author: "Josep Borrell",
    context: "Haut représentant de l'UE pour les affaires étrangères (2019-2024). Concept d'autonomie stratégique.",
    distractors: ["Ursula von der Leyen", "Charles Michel", "Emmanuel Macron"]
  },
  {
    quote: "L'austérité est une idée dangereuse qui a échoué historiquement.",
    author: "Mark Blyth",
    context: "« Austerity: The History of a Dangerous Idea » (2013). Économiste écossais à Brown University.",
    distractors: ["Paul Krugman", "Joseph Stiglitz", "Thomas Piketty"]
  },
  {
    quote: "L'Europe perd en intensité ce qu'elle gagne en extension.",
    author: "François Perroux",
    context: "Économiste français. Résume la tension classique entre élargissement et approfondissement.",
    distractors: ["Raymond Aron", "Charles de Gaulle", "Altiero Spinelli"]
  },
  {
    quote: "Sur un référendum européen : c'est toujours le non qui gagne.",
    author: "Pierre Moscovici",
    context: "Session 12 du cours. Leçon tirée du Brexit et des référendums sur les traités (2005, 1992).",
    distractors: ["Emmanuel Macron", "Jacques Delors", "Michel Barnier"]
  },
  {
    quote: "Un drame pour l'UE, qui a perdu sa 2e économie. Faire une défense européenne sans les Britanniques : c'est insensé.",
    author: "Pierre Moscovici",
    context: "À propos du Brexit. Le RU était aussi l'autre membre permanent du CSNU.",
    distractors: ["Michel Barnier", "Donald Tusk", "Jean-Claude Juncker"]
  },
  {
    quote: "L'Europe est aujourd'hui en crise existentielle.",
    author: "Jean-Claude Juncker",
    context: "Le concept de polycrise est popularisé par Juncker. Succession de crises depuis les années 2000.",
    distractors: ["Pierre Moscovici", "Emmanuel Macron", "Ursula von der Leyen"]
  },
  {
    quote: "L'Europe n'a jamais été aussi cohérente que face aux crises, dans l'urgence du temps court.",
    author: "Pierre Moscovici",
    context: "L'enjeu : passer de la cohérence dans le temps court à la cohérence dans le temps long.",
    distractors: ["Jacques Delors", "Charles Michel", "Jean Monnet"]
  },
  {
    quote: "Chantier qui reste sans plan d'architecte.",
    author: "Louis Gautier",
    context: "Politologue français spécialiste de défense. Décrit l'état de la défense européenne.",
    distractors: ["Pierre Moscovici", "Thierry Breton", "Josep Borrell"]
  },
  {
    quote: "This Time is Different.",
    author: "Carmen Reinhart & Kenneth Rogoff",
    context: "Titre du livre (2010) théorisant l'effondrement de la croissance au-delà de 90 % de dette/PIB — invalidé par une erreur Excel révélée en 2013.",
    distractors: ["Alberto Alesina", "Paul Krugman", "Olivier Blanchard"]
  },
  {
    quote: "L'effet Bruxelles : quand l'UE devient le régulateur du monde.",
    author: "Anu Bradford",
    context: "Chercheuse américaine. Décrit comment les normes européennes (RGPD notamment) s'imposent mondialement.",
    distractors: ["Joseph Stiglitz", "Margrethe Vestager", "Christine Lagarde"]
  },
  {
    quote: "L'Ukraine et la nation ukrainienne n'existent pas.",
    author: "Vladimir Poutine",
    context: "Vision impérialiste russe justifiant l'invasion. Remise en cause de l'identité nationale ukrainienne.",
    distractors: ["Viktor Orbán", "Alexander Loukachenko", "Sergueï Lavrov"]
  },
  {
    quote: "Oxi (Non) !",
    author: "Alexis Tsipras",
    context: "Résultat du référendum grec de juillet 2015 (61 % non à l'austérité de la Troïka). Paradoxalement suivi d'un accord.",
    distractors: ["Georges Papandréou", "Antonis Samaras", "Kyriakos Mitsotakis"]
  },
  {
    quote: "L'État illibéral, l'État national.",
    author: "Viktor Orbán",
    context: "Discours de Băile Tușnad, juillet 2014. Orbán revendique le concept de démocratie illibérale.",
    distractors: ["Jarosław Kaczyński", "Marine Le Pen", "Giorgia Meloni"]
  },
  {
    quote: "Van Gend & Loos : le droit européen a un effet direct sur les ressortissants des États membres.",
    author: "Cour de Justice de l'UE",
    context: "Arrêt fondateur de 1963. Pose le principe de l'effet direct du droit de l'UE — suivi en 1964 par Costa c/ ENEL (primauté).",
    distractors: ["Commission européenne", "Conseil européen", "Parlement européen"]
  },
  {
    quote: "L'Europe est un ovni institutionnel, à mi-chemin entre l'organisation internationale et l'État-nation.",
    author: "Pierre Moscovici",
    context: "Définit l'hybridité unique de l'UE : structure hybride, constellation d'États, interface entre le national et l'international.",
    distractors: ["Jacques Delors", "Jean Monnet", "Jürgen Habermas"]
  },
  {
    quote: "On ne peut pas faire avancer l'Europe avec des discours timides — il faut être euro-volontariste.",
    author: "Pierre Moscovici",
    context: "Conclusion du cours sur les scénarios d'avenir. La France, pays fondateur, a un rôle clé à jouer.",
    distractors: ["Emmanuel Macron", "Jacques Delors", "Jean-Claude Juncker"]
  },
  {
    quote: "Sans Union des Marchés de Capitaux fonctionnelle, pas de financement massif de l'innovation, de la défense et de la transition verte en Europe.",
    author: "Mario Draghi",
    context: "Rapport Draghi (septembre 2024) : diagnostic alarmé sur la compétitivité européenne, appel à 800 Md€/an d'investissements supplémentaires.",
    distractors: ["Christine Lagarde", "Enrico Letta", "Ursula von der Leyen"]
  },
  {
    quote: "L'Europe, fondée sur le multilatéralisme depuis sa création, doit proposer une stratégie renouvelée pour affronter un contexte mondial en mutation.",
    author: "Pierre Moscovici",
    context: "Contexte de la rivalité sino-américaine et du retour des logiques de puissance — l'UE doit adapter ses outils.",
    distractors: ["Josep Borrell", "Charles Michel", "Emmanuel Macron"]
  },
];
