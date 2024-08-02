// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassBioChemEntity } from "./BioChemEntity.ts";

/** A discrete unit of inheritance which affects one or more biological traits (Source: [https://en.wikipedia.org/wiki/Gene](https://en.wikipedia.org/wiki/Gene)). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype). */
export interface ClassGene extends ClassBioChemEntity {
  /** Another gene which is a variation of this one. */
  alternativeOf: Array<{ "@id": string }>;
  /** Another BioChemEntity encoded by this one. */
  encodesBioChemEntity: Array<{ "@id": string }>;
  /** Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system. */
  expressedIn: Array<{ "@id": string }>;
  /** A symbolic representation of a BioChemEntity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein. */
  hasBioPolymerSequence: Array<string>;
}
