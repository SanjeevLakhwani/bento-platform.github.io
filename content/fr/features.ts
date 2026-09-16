import type { FeatureItem } from "../types";

const features: FeatureItem[] = [
  {
    slug: "public-dashboard-aggregate",
    image: "/images/bento_public1.png",
    alt: "Tableau de bord public de Bento affichant des graphiques de données agrégées pour des propriétés configurables",
    eyebrow: "Tableau de bord public",
    caption: "Afficher des données agrégées sur des propriétés configurables d'intérêt.",
  },
  {
    slug: "public-dashboard-counts",
    image: "/images/bento_public2.png",
    alt: "Tableau de bord public de Bento affichant les décomptes d'individus, de biospécimens et d'expériences filtrés par propriété",
    eyebrow: "Tableau de bord public",
    caption: "Obtenir des décomptes d'individus, de biospécimens et d'expériences, filtrés selon ces propriétés.",
  },
  {
    slug: "authenticated-exploration",
    image: "/images/bento_authenticated1.png",
    alt: "Portail authentifié de Bento montrant une exploration fine des données au niveau de l'individu",
    eyebrow: "Portail authentifié",
    caption: "Exploration fine des données au niveau du participant / de l'individu.",
  },
  {
    slug: "authenticated-queries",
    image: "/images/bento_authenticated2.png",
    alt: "Portail authentifié de Bento exécutant des requêtes combinées sur des données cliniques et des variations génomiques",
    eyebrow: "Portail authentifié",
    caption: "Exécuter des requêtes sur des propriétés cliniques/phénotypiques et des variations génomiques, simultanément.",
  },
  {
    slug: "beacon-api",
    image: "/images/bento_beacon.png",
    alt: "Schéma d'applications externes interrogeant les données de Bento via l'API Beacon",
    eyebrow: "API Beacon",
    caption: "Permettre à des API externes d'interroger les données de Bento via l'API Beacon.",
  },
];

export default features;
