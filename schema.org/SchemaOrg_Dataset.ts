// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_DataCatalog } from "./SchemaOrg_DataCatalog.ts";
import type { SchemaOrg_DataDownload } from "./SchemaOrg_DataDownload.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_MeasurementMethodEnum } from "./SchemaOrg_MeasurementMethodEnum.ts";
import type { SchemaOrg_Property } from "./SchemaOrg_Property.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_StatisticalVariable } from "./SchemaOrg_StatisticalVariable.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A body of structured information describing some topic(s) of interest.
 * @see https://schema.org/Dataset
 */
export const SCHEMA_ORG_Dataset = "https://schema.org/Dataset" as const;

/**
 * A body of structured information describing some topic(s) of interest.
 * @see https://schema.org/Dataset
 */
export interface SchemaOrg_Dataset extends SchemaOrg_CreativeWork {
  /**
   * A data catalog which contains this dataset.
   * @see https://schema.org/catalog
   */
  catalog?: Array<SchemaOrg_DataCatalog>;
  /**
   * The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).
   * @see https://schema.org/datasetTimeInterval
   */
  datasetTimeInterval?: Array<SchemaOrg_DateTime>;
  /**
   * A downloadable form of this dataset, at a specific location, in a specific format. This property can be repeated if different variations are available. There is no expectation that different downloadable distributions must contain exactly equivalent information (see also [DCAT](https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution) on this point). Different distributions might include or exclude different subsets of the entire dataset, for example.
   * @see https://schema.org/distribution
   */
  distribution?: Array<SchemaOrg_DataDownload>;
  /**
   * A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').
   * @see https://schema.org/includedDataCatalog
   */
  includedDataCatalog?: Array<SchemaOrg_DataCatalog>;
  /**
   * A data catalog which contains this dataset.
   * @see https://schema.org/includedInDataCatalog
   */
  includedInDataCatalog?: Array<SchemaOrg_DataCatalog>;
  /**
   * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
   * @see https://schema.org/issn
   */
  issn?: Array<SchemaOrg_Text>;
  /**
   * A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].
   * @see https://schema.org/measurementMethod
   */
  measurementMethod?: Array<
    | SchemaOrg_Text
    | SchemaOrg_DefinedTerm
    | SchemaOrg_MeasurementMethodEnum
    | SchemaOrg_URL
  >;
  /**
   * A technique, method or technology used in an [[Observation]], [[StatisticalVariable]] or [[Dataset]] (or [[DataDownload]], [[DataCatalog]]), corresponding to the method used for measuring the corresponding variable(s) (for datasets, described using [[variableMeasured]]; for [[Observation]], a [[StatisticalVariable]]). Often but not necessarily each [[variableMeasured]] will have an explicit representation as (or mapping to) an property such as those defined in Schema.org, or other RDF vocabularies and "knowledge graphs". In that case the subproperty of [[variableMeasured]] called [[measuredProperty]] is applicable.
   *
   * The [[measurementTechnique]] property helps when extra clarification is needed about how a [[measuredProperty]] was measured. This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but can often serve as a high level summary for dataset discovery.
   *
   * For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence". If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
   *
   * If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]]. The value can also be from an enumeration, organized as a [[MeasurementMetholdEnumeration]].
   * @see https://schema.org/measurementTechnique
   */
  measurementTechnique?: Array<
    | SchemaOrg_Text
    | SchemaOrg_DefinedTerm
    | SchemaOrg_MeasurementMethodEnum
    | SchemaOrg_URL
  >;
  /**
   * The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue, or more explicitly as a [[StatisticalVariable]].
   * @see https://schema.org/variableMeasured
   */
  variableMeasured?: Array<
    | SchemaOrg_Property
    | SchemaOrg_PropertyValue
    | SchemaOrg_StatisticalVariable
    | SchemaOrg_Text
  >;
}
