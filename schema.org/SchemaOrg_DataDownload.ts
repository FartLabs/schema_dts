// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_MeasurementMethodEnum } from "./SchemaOrg_MeasurementMethodEnum.ts";
import type { SchemaOrg_MediaObject } from "./SchemaOrg_MediaObject.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * All or part of a [[Dataset]] in downloadable form.
 * @see https://schema.org/DataDownload
 */
export const SCHEMA_ORG_DataDownload = "https://schema.org/DataDownload" as const;

/**
 * All or part of a [[Dataset]] in downloadable form.
 * @see https://schema.org/DataDownload
 */
export interface SchemaOrg_DataDownload extends SchemaOrg_MediaObject {
    /**
     * A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].
     * @see https://schema.org/measurementMethod
     */
    measurementMethod?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_MeasurementMethodEnum | SchemaOrg_URL>;
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
    measurementTechnique?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_MeasurementMethodEnum | SchemaOrg_URL>;
}
