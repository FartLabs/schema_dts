// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassBioChemEntity } from "./BioChemEntity.ts";

/** Any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer etc., identifiable as a separately distinguishable entity. */
export interface ClassMolecularEntity extends ClassBioChemEntity {
  /** A role played by the BioChemEntity within a chemical context. */
  chemicalRole: Array<{ "@id": string }>;
  /** Non-proprietary identifier for molecular entity that can be used in printed and electronic data sources thus enabling easier linking of diverse data compilations. */
  inChI: Array<string>;
  /** InChIKey is a hashed version of the full InChI (using the SHA-256 algorithm). */
  inChIKey: Array<string>;
  /** Systematic method of naming chemical compounds as recommended by the International Union of Pure and Applied Chemistry (IUPAC). */
  iupacName: Array<string>;
  /** The empirical formula is the simplest whole number ratio of all the atoms in a molecule. */
  molecularFormula: Array<string>;
  /** This is the molecular weight of the entity being described, not of the parent. Units should be included in the form '&lt;Number&gt; &lt;unit&gt;', for example '12 amu' or as '&lt;QuantitativeValue&gt;. */
  molecularWeight: Array<string | { "@id": string }>;
  /** The monoisotopic mass is the sum of the masses of the atoms in a molecule using the unbound, ground-state, rest mass of the principal (most abundant) isotope for each element instead of the isotopic average mass. Please include the units in the form '&lt;Number&gt; &lt;unit&gt;', for example '770.230488 g/mol' or as '&lt;QuantitativeValue&gt;. */
  monoisotopicMolecularWeight: Array<string | { "@id": string }>;
  /** Intended use of the BioChemEntity by humans. */
  potentialUse: Array<{ "@id": string }>;
  /** A specification in form of a line notation for describing the structure of chemical species using short ASCII strings.  Double bond stereochemistry \ indicators may need to be escaped in the string in formats where the backslash is an escape character. */
  smiles: Array<string>;
}
