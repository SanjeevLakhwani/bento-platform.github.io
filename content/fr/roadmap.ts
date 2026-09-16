import type { RoadmapItem } from "../types";

const roadmap: RoadmapItem[] = [
  {
    version: 25,
    milestones: [],
  },
  {
    version: 24,
    targetDate: "2026-06",
    milestones: [
      "Déplacer la recherche à facettes vers la barre latérale sur les pages projet - jeu de données.",
      "Nouvel en-tête pour le catalogue de données.",
      "Prise en charge de la création de nouveaux jeux de données avec le nouveau modèle de jeu de données.",
      "Prise en charge du nouveau modèle de jeu de données pour Bento Public.",
      "Fonctionnalité de fenêtre contextuelle pour les biospécimens.",
    ],
  },
  {
    version: 23,
    targetDate: "2026-05",
    milestones: [
      "Prise en charge des requêtes « OU » à valeurs multiples pour les filtres dans l'interface.",
      "Ajout d'une interface pour les requêtes par plage personnalisée.",
      "Conception d'un nouveau modèle de jeu de données.",
      "Ajout d'une interface de gestion des autorisations.",
    ],
  },
  {
    version: 22,
    targetDate: "2026-04",
    milestones: [
      "Recherche floue — plutôt que d'exiger une correspondance exacte, la recherche floue retourne des résultats proches des termes saisis.",
      "Biospécimens - vue des expériences liées — cette mise à jour facilite la navigation entre les informations liées aux expériences dans la vue phenopacket lorsque les permissions suffisantes sont accordées.",
      "Infobulle contextuelle pour les assemblages génomiques — cette fonctionnalité ajoute une infobulle utile qui apparaît au survol d'un identifiant de génome de référence, affichant les informations clés du génome ainsi que les liens pertinents.",
      "Mise en évidence des entités dans la vue des phenopackets — lorsque l'utilisateur clique sur un individu, un biospécimen ou une expérience, celui-ci est mis en surbrillance.",
      "Décomptes de jeux de données mis en évidence pour les résultats de recherche — cette amélioration affiche les décomptes filtrés par jeu de données lors de la recherche dans un projet à jeux de données multiples. Le nombre d'entités correspondant à la recherche est désormais affiché dans la fiche du jeu de données.",
    ],
  },
  {
    version: 21,
    targetDate: "2025-12",
    milestones: [
      "Les réseaux Beacon géreront mieux les filtres qui existent dans certains beacons du réseau, mais pas dans tous.",
      "Un nouveau format de métadonnées de provenance pour les projets et jeux de données destiné à la découverte de données, avec des correspondances vers le format d'étude PCGL et le concept Dataset de schema.org.",
      "Les jeux de données dont les résultats correspondent à la recherche seront mis en évidence dans l'interface utilisateur.",
      "Les utilisateurs pourront consulter les conditions d'utilisation et la politique de confidentialité de Bento en anglais ou en français, selon la langue de l'interface utilisateur.",
    ],
  },
];

export default roadmap;
