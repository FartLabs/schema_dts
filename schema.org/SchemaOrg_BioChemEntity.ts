// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BioChemEntity } from "./SchemaOrg_BioChemEntity.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Gene } from "./SchemaOrg_Gene.ts";
import type { SchemaOrg_Grant } from "./SchemaOrg_Grant.ts";
import type { SchemaOrg_MedicalCondition } from "./SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_Taxon } from "./SchemaOrg_Taxon.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical.
 * @see https://schema.org/BioChemEntity
 */
export const SCHEMA_ORG_BioChemEntity =
  "https://schema.org/BioChemEntity" as const;

/**
 * Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical.
 * @see https://schema.org/BioChemEntity
 */
export interface SchemaOrg_BioChemEntity extends SchemaOrg_Thing {
  /**
   * Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue.
   * @see https://schema.org/associatedDisease
   */
  associatedDisease?: Array<
    SchemaOrg_PropertyValue | SchemaOrg_URL | SchemaOrg_MedicalCondition
  >;
  /**
   * A BioChemEntity that is known to interact with this item.
   * @see https://schema.org/bioChemInteraction
   */
  bioChemInteraction?: Array<SchemaOrg_BioChemEntity>;
  /**
   * A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms.
   * @see https://schema.org/bioChemSimilarity
   */
  bioChemSimilarity?: Array<SchemaOrg_BioChemEntity>;
  /**
   * A role played by the BioChemEntity within a biological context.
   * @see https://schema.org/biologicalRole
   */
  biologicalRole?: Array<SchemaOrg_DefinedTerm>;
  /**
   * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
   * @see https://schema.org/funding
   */
  funding?: Array<SchemaOrg_Grant>;
  /**
   * Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part.
   * @see https://schema.org/hasBioChemEntityPart
   */
  hasBioChemEntityPart?: Array<SchemaOrg_BioChemEntity>;
  /**
   * Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence.
   * @see https://schema.org/hasMolecularFunction
   */
  hasMolecularFunction?: Array<
    SchemaOrg_DefinedTerm | SchemaOrg_PropertyValue | SchemaOrg_URL
  >;
  /**
   * A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image.
   * @see https://schema.org/hasRepresentation
   */
  hasRepresentation?: Array<
    SchemaOrg_PropertyValue | SchemaOrg_URL | SchemaOrg_Text
  >;
  /**
   * Another BioChemEntity encoding by this one.
   * @see https://schema.org/isEncodedByBioChemEntity
   */
  isEncodedByBioChemEntity?: Array<SchemaOrg_Gene>;
  /**
   * Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence.
   * @see https://schema.org/isInvolvedInBiologicalProcess
   */
  isInvolvedInBiologicalProcess?: Array<
    SchemaOrg_DefinedTerm | SchemaOrg_PropertyValue | SchemaOrg_URL
  >;
  /**
   * Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence.
   * @see https://schema.org/isLocatedInSubcellularLocation
   */
  isLocatedInSubcellularLocation?: Array<
    SchemaOrg_DefinedTerm | SchemaOrg_PropertyValue | SchemaOrg_URL
  >;
  /**
   * Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity.
   * @see https://schema.org/isPartOfBioChemEntity
   */
  isPartOfBioChemEntity?: Array<SchemaOrg_BioChemEntity>;
  /**
   * The taxonomic grouping of the organism that expresses, encodes, or in some way related to the BioChemEntity.
   * @see https://schema.org/taxonomicRange
   */
  taxonomicRange?: Array<
    SchemaOrg_DefinedTerm | SchemaOrg_Taxon | SchemaOrg_URL | SchemaOrg_Text
  >;
}
