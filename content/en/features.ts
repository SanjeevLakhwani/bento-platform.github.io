import type { FeatureItem } from "../types";

const features: FeatureItem[] = [
  {
    slug: "public-dashboard-aggregate",
    image: "/images/bento_catalogue.png",
    alt: "Bento's public data catalogue showing study counts and insight charts anyone can browse",
    eyebrow: "Aggregate access, individual privacy",
    caption: "Browse counts and trends on configurable properties, with every underlying record kept private.",
  },
  {
    slug: "public-dashboard-counts",
    image: "/images/bento_counts.png",
    alt: "Bento's public study page showing participant, specimen, sample and file counts for a cohort",
    eyebrow: "Filtered without exposing anyone",
    caption: "Get counts on individuals, biosamples and experiments, filtered by property, without ever surfacing a single record.",
  },
  {
    slug: "authenticated-exploration",
    image: "/images/bento_exploration.png",
    alt: "Bento's authenticated portal showing individual-level filters and demographic charts for approved researchers",
    eyebrow: "Authenticated portal",
    caption: "Fine-grained data exploration at the participant/individual level, for approved users only.",
  },
  {
    slug: "authenticated-queries",
    image: "/images/bento_queries.png",
    alt: "Bento's authenticated portal showing combined clinical and genomic breakdowns for a study",
    eyebrow: "Authenticated portal",
    caption: "Run combined clinical/phenotypic and genomic variation queries at the same time.",
  },
  {
    slug: "beacon-api",
    image: "/images/bento_beacon.png",
    alt: "Diagram of external applications querying Bento's data through the Beacon API",
    eyebrow: "Beacon API",
    caption: "Let external applications query Bento's data through the standardized Beacon API.",
  },
];

export default features;
