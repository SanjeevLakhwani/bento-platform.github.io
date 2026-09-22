import type { FeatureItem } from "../types";

const features: FeatureItem[] = [
  {
    slug: "public-dashboard-aggregate",
    image: "/images/bento_catalogue.png",
    alt: "Catalogue de données public de Bento affichant les décomptes d'études et des graphiques d'aperçu accessibles à tous",
    eyebrow: "Accès agrégé, vie privée individuelle",
    caption: "Parcourez les décomptes et les tendances sur des propriétés configurables, tout en gardant chaque enregistrement sous-jacent privé.",
  },
  {
    slug: "public-dashboard-counts",
    image: "/images/bento_counts.png",
    alt: "Page publique d'une étude Bento affichant les décomptes de participants, de biospécimens, d'échantillons et de fichiers d'une cohorte",
    eyebrow: "Filtré sans jamais rien exposer",
    caption: "Obtenez des décomptes d'individus, de biospécimens et d'expériences, filtrés par propriété, sans jamais révéler un seul enregistrement.",
  },
  {
    slug: "authenticated-exploration",
    image: "/images/bento_exploration.png",
    alt: "Portail authentifié de Bento montrant des filtres au niveau individuel et des graphiques démographiques pour les chercheurs approuvés",
    eyebrow: "Portail authentifié",
    caption: "Exploration fine des données au niveau du participant/de l'individu, réservée aux utilisateurs approuvés.",
  },
  {
    slug: "authenticated-queries",
    image: "/images/bento_queries.png",
    alt: "Portail authentifié de Bento montrant des répartitions cliniques et génomiques combinées pour une étude",
    eyebrow: "Portail authentifié",
    caption: "Exécutez simultanément des requêtes sur les données cliniques/phénotypiques et les variations génomiques.",
  },
  {
    slug: "beacon-api",
    image: "/images/bento_beacon.png",
    alt: "Schéma d'applications externes interrogeant les données de Bento via l'API Beacon",
    eyebrow: "API Beacon",
    caption: "Permettez à des applications externes d'interroger les données de Bento via l'API Beacon standardisée.",
  },
];

export default features;
