// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical. */
export interface ClassBioChemEntity extends ClassThing {
  /** Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue. */
  associatedDisease: Array<{ "@id": string }>;
  /** A BioChemEntity that is known to interact with this item. */
  bioChemInteraction: Array<{ "@id": string }>;
  /** A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms. */
  bioChemSimilarity: Array<{ "@id": string }>;
  /** A role played by the BioChemEntity within a biological context. */
  biologicalRole: Array<{ "@id": string }>;
  /** A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]]. */
  funding: Array<{ "@id": string }>;
  /** Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part. */
  hasBioChemEntityPart: Array<{ "@id": string }>;
  /** Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence. */
  hasMolecularFunction: Array<{ "@id": string }>;
  /** A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image. */
  hasRepresentation: Array<string | { "@id": string }>;
  /** Another BioChemEntity encoding by this one. */
  isEncodedByBioChemEntity: Array<{ "@id": string }>;
  /** Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence. */
  isInvolvedInBiologicalProcess: Array<{ "@id": string }>;
  /** Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence. */
  isLocatedInSubcellularLocation: Array<{ "@id": string }>;
  /** Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity. */
  isPartOfBioChemEntity: Array<{ "@id": string }>;
  /** The taxonomic grouping of the organism that expresses, encodes, or in some way related to the BioChemEntity. */
  taxonomicRange: Array<string | { "@id": string }>;
}
