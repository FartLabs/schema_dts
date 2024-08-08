// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BioChemEntity } from "./SchemaOrg_BioChemEntity.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer etc., identifiable as a separately distinguishable entity.
 * @see https://schema.org/MolecularEntity
 */
export const SCHEMA_ORG_MolecularEntity =
  "https://schema.org/MolecularEntity" as const;

/**
 * Any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer etc., identifiable as a separately distinguishable entity.
 * @see https://schema.org/MolecularEntity
 */
export interface SchemaOrg_MolecularEntity extends SchemaOrg_BioChemEntity {
  /**
   * A role played by the BioChemEntity within a chemical context.
   * @see https://schema.org/chemicalRole
   */
  chemicalRole?: Array<SchemaOrg_DefinedTerm>;
  /**
   * Non-proprietary identifier for molecular entity that can be used in printed and electronic data sources thus enabling easier linking of diverse data compilations.
   * @see https://schema.org/inChI
   */
  inChI?: Array<SchemaOrg_Text>;
  /**
   * InChIKey is a hashed version of the full InChI (using the SHA-256 algorithm).
   * @see https://schema.org/inChIKey
   */
  inChIKey?: Array<SchemaOrg_Text>;
  /**
   * Systematic method of naming chemical compounds as recommended by the International Union of Pure and Applied Chemistry (IUPAC).
   * @see https://schema.org/iupacName
   */
  iupacName?: Array<SchemaOrg_Text>;
  /**
   * The empirical formula is the simplest whole number ratio of all the atoms in a molecule.
   * @see https://schema.org/molecularFormula
   */
  molecularFormula?: Array<SchemaOrg_Text>;
  /**
   * This is the molecular weight of the entity being described, not of the parent. Units should be included in the form '&lt;Number&gt; &lt;unit&gt;', for example '12 amu' or as '&lt;QuantitativeValue&gt;.
   * @see https://schema.org/molecularWeight
   */
  molecularWeight?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Text>;
  /**
   * The monoisotopic mass is the sum of the masses of the atoms in a molecule using the unbound, ground-state, rest mass of the principal (most abundant) isotope for each element instead of the isotopic average mass. Please include the units in the form '&lt;Number&gt; &lt;unit&gt;', for example '770.230488 g/mol' or as '&lt;QuantitativeValue&gt;.
   * @see https://schema.org/monoisotopicMolecularWeight
   */
  monoisotopicMolecularWeight?: Array<
    SchemaOrg_Text | SchemaOrg_QuantitativeValue
  >;
  /**
   * Intended use of the BioChemEntity by humans.
   * @see https://schema.org/potentialUse
   */
  potentialUse?: Array<SchemaOrg_DefinedTerm>;
  /**
   * A specification in form of a line notation for describing the structure of chemical species using short ASCII strings.  Double bond stereochemistry \ indicators may need to be escaped in the string in formats where the backslash is an escape character.
   * @see https://schema.org/smiles
   */
  smiles?: Array<SchemaOrg_Text>;
}
