// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalCondition } from "./MedicalCondition.ts";

/** An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease. */
export interface ClassInfectiousDisease extends ClassMedicalCondition {
  /** The actual infectious agent, such as a specific bacterium. */
  infectiousAgent: Array<string>;
  /** The class of infectious agent (bacteria, prion, etc.) that causes the disease. */
  infectiousAgentClass: Array<{ "@id": string }>;
  /** How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc. */
  transmissionMethod: Array<string>;
}
