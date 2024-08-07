// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BioChemEntity } from "labs/SchemaOrg_BioChemEntity.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Protein is here used in its widest possible definition, as classes of amino acid based molecules. Amyloid-beta Protein in human (UniProt P05067), eukaryota (e.g. an OrthoDB group) or even a single molecule that one can point to are all of type :Protein. A protein can thus be a subclass of another protein, e.g. :Protein as a UniProt record can have multiple isoforms inside it which would also be :Protein. They can be imagined, synthetic, hypothetical or naturally occurring.
 * @see https://schema.org/Protein
 */
export const SCHEMA_ORG_Protein = "https://schema.org/Protein" as const;

/**
 * Protein is here used in its widest possible definition, as classes of amino acid based molecules. Amyloid-beta Protein in human (UniProt P05067), eukaryota (e.g. an OrthoDB group) or even a single molecule that one can point to are all of type :Protein. A protein can thus be a subclass of another protein, e.g. :Protein as a UniProt record can have multiple isoforms inside it which would also be :Protein. They can be imagined, synthetic, hypothetical or naturally occurring.
 * @see https://schema.org/Protein
 */
export interface SchemaOrg_Protein extends SchemaOrg_BioChemEntity {
    /**
     * A symbolic representation of a BioChemEntity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein.
     * @see https://schema.org/hasBioPolymerSequence
     */
    hasBioPolymerSequence: Array<SchemaOrg_Text>;
}
