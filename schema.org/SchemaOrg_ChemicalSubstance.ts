// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BioChemEntity } from "labs/SchemaOrg_BioChemEntity.ts";
import type { SchemaOrg_DefinedTerm } from "labs/SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A chemical substance is 'a portion of matter of constant composition, composed of molecular entities of the same type or of different types' (source: [ChEBI:59999](https://www.ebi.ac.uk/chebi/searchId.do?chebiId=59999)).
 * @see https://schema.org/ChemicalSubstance
 */
export const SCHEMA_ORG_ChemicalSubstance = "https://schema.org/ChemicalSubstance" as const;

/**
 * A chemical substance is 'a portion of matter of constant composition, composed of molecular entities of the same type or of different types' (source: [ChEBI:59999](https://www.ebi.ac.uk/chebi/searchId.do?chebiId=59999)).
 * @see https://schema.org/ChemicalSubstance
 */
export interface SchemaOrg_ChemicalSubstance extends SchemaOrg_BioChemEntity {
    /**
     * The chemical composition describes the identity and relative ratio of the chemical elements that make up the substance.
     * @see https://schema.org/chemicalComposition
     */
    chemicalComposition: Array<SchemaOrg_Text>;
    /**
     * A role played by the BioChemEntity within a chemical context.
     * @see https://schema.org/chemicalRole
     */
    chemicalRole: Array<SchemaOrg_DefinedTerm>;
    /**
     * Intended use of the BioChemEntity by humans.
     * @see https://schema.org/potentialUse
     */
    potentialUse: Array<SchemaOrg_DefinedTerm>;
}
