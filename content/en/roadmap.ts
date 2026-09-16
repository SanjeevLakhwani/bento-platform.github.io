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
      "Move faceted search to sidebar on project - dataset pages.",
      "New data catalogue header.",
      "Support creation of new datasets with the new dataset model.",
      "Support the new dataset model for Bento Public.",
      "Biosample pop-over feature.",
    ],
  },
  {
    version: 23,
    targetDate: "2026-05",
    milestones: [
      'Support multiple values "OR" queries for filters in UI.',
      "Add user interface for custom range queries.",
      "Design a new dataset model.",
      "Add grant editing user interface.",
    ],
  },
  {
    version: 22,
    targetDate: "2026-04",
    milestones: [
      "Fuzzy search — rather than requiring an exact match, fuzzy search returns results that are close to the entered terms.",
      "Biosamples - Linked Experiment View — this update makes it easier to navigate experiment-related information in the phenopacket view when sufficient permissions are available.",
      "Pop-over tooltip for genome assemblies — this feature adds a helpful tooltip that appears when hovering over a reference genome ID. The pop-up shows key genome information along with relevant links.",
      "Highlighting entities in the phenopackets view — when the user clicks on an individual, biosample, or experiment, they will see a highlight around the entity they clicked on.",
      "Highlighted dataset counts for search results — this enhancement shows filtered dataset counts when searching a project with multiple datasets. The number of entities matching the search is now shown in the dataset card.",
    ],
  },
  {
    version: 21,
    targetDate: "2025-12",
    milestones: [
      "Beacon Networks will better handle filters that exist in some, but not all, network beacons.",
      "A new project and dataset provenance metadata format for data discovery, with mappings to the PCGL study format and the schema.org Dataset concept.",
      "Datasets with matching search results will be highlighted in the user interface.",
      "Users will be able to view the Bento terms of use and privacy policy in either English or French, corresponding with the user interface language.",
    ],
  },
];

export default roadmap;
