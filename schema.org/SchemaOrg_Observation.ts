// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Enumeration } from "./SchemaOrg_Enumeration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_MeasurementMethodEnum } from "./SchemaOrg_MeasurementMethodEnum.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Property } from "./SchemaOrg_Property.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_StatisticalVariable } from "./SchemaOrg_StatisticalVariable.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * Instances of the class [[Observation]] are used to specify observations about an entity at a particular time. The principal properties of an [[Observation]] are [[observationAbout]], [[measuredProperty]], [[statType]], [[value] and [[observationDate]]  and [[measuredProperty]]. Some but not all Observations represent a [[QuantitativeValue]]. Quantitative observations can be about a [[StatisticalVariable]], which is an abstract specification about which we can make observations that are grounded at a particular location and time. 
 *     
 * Observations can also encode a subset of simple RDF-like statements (its observationAbout, a StatisticalVariable, defining the measuredPoperty; its observationAbout property indicating the entity the statement is about, and [[value]] )
 *
 * In the context of a quantitative knowledge graph, typical properties could include [[measuredProperty]], [[observationAbout]], [[observationDate]], [[value]], [[unitCode]], [[unitText]], [[measurementMethod]].
 * @see https://schema.org/Observation
 */
export const SCHEMA_ORG_Observation = "https://schema.org/Observation" as const;

/**
 * Instances of the class [[Observation]] are used to specify observations about an entity at a particular time. The principal properties of an [[Observation]] are [[observationAbout]], [[measuredProperty]], [[statType]], [[value] and [[observationDate]]  and [[measuredProperty]]. Some but not all Observations represent a [[QuantitativeValue]]. Quantitative observations can be about a [[StatisticalVariable]], which is an abstract specification about which we can make observations that are grounded at a particular location and time. 
 *     
 * Observations can also encode a subset of simple RDF-like statements (its observationAbout, a StatisticalVariable, defining the measuredPoperty; its observationAbout property indicating the entity the statement is about, and [[value]] )
 *
 * In the context of a quantitative knowledge graph, typical properties could include [[measuredProperty]], [[observationAbout]], [[observationDate]], [[value]], [[unitCode]], [[unitText]], [[measurementMethod]].
 * @see https://schema.org/Observation
 */
export interface SchemaOrg_Observation extends SchemaOrg_QuantitativeValue, SchemaOrg_Intangible {
    /**
     * A [[marginOfError]] for an [[Observation]].
     * @see https://schema.org/marginOfError
     */
    marginOfError?: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The measuredProperty of an [[Observation]], typically via its [[StatisticalVariable]]. There are various kinds of applicable [[Property]]: a schema.org property, a property from other RDF-compatible systems, e.g. W3C RDF Data Cube, Data Commons, Wikidata, or schema.org extensions such as [GS1's](https://www.gs1.org/voc/?show=properties).
     * @see https://schema.org/measuredProperty
     */
    measuredProperty?: Array<SchemaOrg_Property>;
    /**
     * Identifies the denominator variable when an observation represents a ratio or percentage.
     * @see https://schema.org/measurementDenominator
     */
    measurementDenominator?: Array<SchemaOrg_StatisticalVariable>;
    /**
     * A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].
     * @see https://schema.org/measurementMethod
     */
    measurementMethod?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_MeasurementMethodEnum | SchemaOrg_URL>;
    /**
     * Provides additional qualification to an observation. For example, a GDP observation measures the Nominal value.
     * @see https://schema.org/measurementQualifier
     */
    measurementQualifier?: Array<SchemaOrg_Enumeration>;
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
    /**
     * The [[observationAbout]] property identifies an entity, often a [[Place]], associated with an [[Observation]].
     * @see https://schema.org/observationAbout
     */
    observationAbout?: Array<SchemaOrg_Place | SchemaOrg_Thing>;
    /**
     * The observationDate of an [[Observation]].
     * @see https://schema.org/observationDate
     */
    observationDate?: Array<SchemaOrg_DateTime>;
    /**
     * The length of time an Observation took place over. The format follows `P[0-9]*[Y|M|D|h|m|s]`. For example, P1Y is Period 1 Year, P3M is Period 3 Months, P3h is Period 3 hours.
     * @see https://schema.org/observationPeriod
     */
    observationPeriod?: Array<SchemaOrg_Text>;
    /**
     * The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue, or more explicitly as a [[StatisticalVariable]].
     * @see https://schema.org/variableMeasured
     */
    variableMeasured?: Array<SchemaOrg_Property | SchemaOrg_PropertyValue | SchemaOrg_StatisticalVariable | SchemaOrg_Text>;
}
