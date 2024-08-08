// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_AnatomicalSystem } from "./SchemaOrg_AnatomicalSystem.ts";
import type { SchemaOrg_BioChemEntity } from "./SchemaOrg_BioChemEntity.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Gene } from "./SchemaOrg_Gene.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A discrete unit of inheritance which affects one or more biological traits (Source: [https://en.wikipedia.org/wiki/Gene](https://en.wikipedia.org/wiki/Gene)). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype).
 * @see https://schema.org/Gene
 */
export const SCHEMA_ORG_Gene = "https://schema.org/Gene" as const;

/**
 * A discrete unit of inheritance which affects one or more biological traits (Source: [https://en.wikipedia.org/wiki/Gene](https://en.wikipedia.org/wiki/Gene)). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype).
 * @see https://schema.org/Gene
 */
export interface SchemaOrg_Gene extends SchemaOrg_BioChemEntity {
    /**
     * Another gene which is a variation of this one.
     * @see https://schema.org/alternativeOf
     */
    alternativeOf?: Array<SchemaOrg_Gene>;
    /**
     * Another BioChemEntity encoded by this one.
     * @see https://schema.org/encodesBioChemEntity
     */
    encodesBioChemEntity?: Array<SchemaOrg_BioChemEntity>;
    /**
     * Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system.
     * @see https://schema.org/expressedIn
     */
    expressedIn?: Array<SchemaOrg_BioChemEntity | SchemaOrg_AnatomicalStructure | SchemaOrg_DefinedTerm | SchemaOrg_AnatomicalSystem>;
    /**
     * A symbolic representation of a BioChemEntity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein.
     * @see https://schema.org/hasBioPolymerSequence
     */
    hasBioPolymerSequence?: Array<SchemaOrg_Text>;
}
