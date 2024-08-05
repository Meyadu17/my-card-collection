import { Departement } from "../model/departement";
import { Region } from "../model/region";

export const AUVERGNE_RHONE_ARLES: Departement[] = [
    { id:1, nom:"Ain", valeur:"01" },
    { id:2, nom:"Allier", valeur:"03" },
    { id:3, nom:"Ardèche", valeur:"07" },
    { id:4, nom:"Cantal", valeur:"15" },
    { id:5, nom:"Drôme", valeur:"26" },
    { id:6, nom:"Isère", valeur:"38" },
    { id:7, nom:"Loire", valeur:"42" },
    { id:8, nom:"Haute-Loire", valeur:"43" },
    { id:9, nom:"Puy-de-Dôme", valeur:"63" },
    { id:10, nom:"Rhone", valeur:"69" },
    { id:11, nom:"Savoie", valeur:"73" },
    { id:12, nom:"Haute-Savoie", valeur:"74" },
];

export const BOUGOGNE_FRANCHE_COMTE: Departement[] = [
    { id:13, nom:"Côte-d'Or", valeur:"21" },
    { id:14, nom:"Doubs", valeur:"25" },
    { id:15, nom:"Jura", valeur:"39" },
    { id:16, nom:"Nièvre", valeur:"58" },
    { id:17, nom:"Haute-Saône", valeur:"78" },
    { id:18, nom:"Saône-et-Loire ", valeur:"71" },
    { id:19, nom:"Yonne", valeur:"89" },
    { id:20, nom:"Territoire de Belfort", valeur:"90" }
];

export const BRETAGNE: Departement[] = [
    { id:13, nom:"Côtes-d'Armor", valeur:"22" },
    { id:14, nom:"Finistère", valeur:"29" },
    { id:15, nom:"Ille-et-Vilaine", valeur:"35" },
    { id:16, nom:"Morbihan", valeur:"56" }
];

export const CENTRE_VAL_DE_LOIRE: Departement[] = [
    { id:17, nom:"Cher", valeur:"18" },
    { id:18, nom:"Eure-et-Loir", valeur:"28" },
    { id:19, nom:"Indre", valeur:"36" },
    { id:20, nom:"Indre-et-Loire", valeur:"37" },
    { id:21, nom:"Loir-et-Char", valeur:"41" },
    { id:22, nom:"Loiret", valeur:"45" }
];

export const CORSE: Departement[] = [
    { id:23, nom:"Haute-Corse", valeur:"2A" },
    { id:24, nom:"Corse-du-Sud", valeur:"2B" }
];

export const GRAND_EST: Departement[] = [
    { id:25, nom:"Ardennes", valeur:"08" },
    { id:26, nom:"Aube", valeur:"10" },
    { id:27, nom:"Marne", valeur:"51" },
    { id:28, nom:"Haute-Marne", valeur:"52" },
    { id:29, nom:"Meuse", valeur:"55" },
    { id:30, nom:"Moselle", valeur:"57" },
    { id:31, nom:"Bas-Rhin", valeur:"67" },
    { id:32, nom:"Haut-Rhin", valeur:"68" },
    { id:33, nom:"Voges", valeur:"88" }
];

export const HAUT_DE_FRANCE: Departement[] = [
    { id:34, nom:"Aine", valeur:"02" },
    { id:35, nom:"Nord", valeur:"59" },
    { id:36, nom:"Oise", valeur:"60" },
    { id:37, nom:"Pas-de-Calais", valeur:"62" },
    { id:38, nom:"Somme", valeur:"80" }
];

/*
export const G: Departement[] = [
    { id:, nom:"", valeur:"" },
    { id:, nom:"", valeur:"" }
];
*/

export const REGION: Region[] = [
    {
        id: 1,
        nom: "Auvergne-Rhône-Alpes",
        departements: AUVERGNE_RHONE_ARLES
    },{
        id: 2,
        nom: "Auvergne-Rhône-Alpes",
        departements: BOUGOGNE_FRANCHE_COMTE
    },{
        id: 3,
        nom: "Betagne",
        departements: BRETAGNE
    },{
        id: 4,
        nom: "Centre val de loire",
        departements: CENTRE_VAL_DE_LOIRE
    },{
        id: 5,
        nom: "Corse",
        departements: CORSE
    },{
        id: 6,
        nom: "Grand Est",
        departements: GRAND_EST
    },{
        id: 7,
        nom: "Hauts de France",
        departements: HAUT_DE_FRANCE
    }
]