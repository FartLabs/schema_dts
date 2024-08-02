// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassBioChemEntity } from "./BioChemEntity.ts";

/** A chemical substance is 'a portion of matter of constant composition, composed of molecular entities of the same type or of different types' (source: [ChEBI:59999](https://www.ebi.ac.uk/chebi/searchId.do?chebiId=59999)). */
export interface ClassChemicalSubstance extends ClassBioChemEntity {
  /** The chemical composition describes the identity and relative ratio of the chemical elements that make up the substance. */
  chemicalComposition: Array<string>;
  /** A role played by the BioChemEntity within a chemical context. */
  chemicalRole: Array<{ "@id": string }>;
  /** Intended use of the BioChemEntity by humans. */
  potentialUse: Array<{ "@id": string }>;
}
