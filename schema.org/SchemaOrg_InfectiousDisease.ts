// DO NOT EDIT: This file is generated.
import type { SchemaOrg_InfectiousAgentClass } from "./SchemaOrg_InfectiousAgentClass.ts";
import type { SchemaOrg_MedicalCondition } from "./SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease.
 * @see https://schema.org/InfectiousDisease
 */
export const SCHEMA_ORG_InfectiousDisease =
  "https://schema.org/InfectiousDisease" as const;

/**
 * An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease.
 * @see https://schema.org/InfectiousDisease
 */
export interface SchemaOrg_InfectiousDisease
  extends SchemaOrg_MedicalCondition {
  /**
   * The actual infectious agent, such as a specific bacterium.
   * @see https://schema.org/infectiousAgent
   */
  infectiousAgent?: Array<SchemaOrg_Text>;
  /**
   * The class of infectious agent (bacteria, prion, etc.) that causes the disease.
   * @see https://schema.org/infectiousAgentClass
   */
  infectiousAgentClass?: Array<SchemaOrg_InfectiousAgentClass>;
  /**
   * How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc.
   * @see https://schema.org/transmissionMethod
   */
  transmissionMethod?: Array<SchemaOrg_Text>;
}
