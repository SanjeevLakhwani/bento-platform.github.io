import type { FeatureItem } from "../types";

const features: FeatureItem[] = [
  {
    slug: "public-dashboard-aggregate",
    image: "/images/bento_public1.png",
    alt: "Bento's publicly-accessible dashboard showing aggregate data charts for configurable properties",
    eyebrow: "Publicly-accessible dashboard",
    caption: "Display aggregate data on configurable properties of interest.",
  },
  {
    slug: "public-dashboard-counts",
    image: "/images/bento_public2.png",
    alt: "Bento's public dashboard showing counts of individuals, biosamples and experiments filtered by property",
    eyebrow: "Publicly-accessible dashboard",
    caption: "Get counts on individuals, biosamples and experiments, filtered by those properties.",
  },
  {
    slug: "authenticated-exploration",
    image: "/images/bento_authenticated1.png",
    alt: "Bento's authenticated portal showing fine-grained data exploration at the individual level",
    eyebrow: "Authenticated portal",
    caption: "Fine-grained data exploration at the participant/individual level.",
  },
  {
    slug: "authenticated-queries",
    image: "/images/bento_authenticated2.png",
    alt: "Bento's authenticated portal running combined clinical and genomic variation queries",
    eyebrow: "Authenticated portal",
    caption: "Run data queries on clinical/phenotypic properties, and genomic variations, at the same time.",
  },
  {
    slug: "beacon-api",
    image: "/images/bento_beacon.png",
    alt: "Diagram of external applications querying Bento's data through the Beacon API",
    eyebrow: "Beacon API",
    caption: "Allow external APIs to query Bento's data using the Beacon API.",
  },
];

export default features;
