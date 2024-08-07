// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Duration } from "labs/SchemaOrg_Duration.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_PriceComponentTypeEnumeration } from "labs/SchemaOrg_PriceComponentTypeEnumeration.ts";
import type { SchemaOrg_PriceSpecification } from "labs/SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_PriceTypeEnumeration } from "labs/SchemaOrg_PriceTypeEnumeration.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * The price asked for a given offer by the respective organization or person.
 * @see https://schema.org/UnitPriceSpecification
 */
export const SCHEMA_ORG_UnitPriceSpecification = "https://schema.org/UnitPriceSpecification" as const;

/**
 * The price asked for a given offer by the respective organization or person.
 * @see https://schema.org/UnitPriceSpecification
 */
export interface SchemaOrg_UnitPriceSpecification extends SchemaOrg_PriceSpecification {
    /**
     * Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property).
     * @see https://schema.org/billingDuration
     */
    billingDuration: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue | SchemaOrg_Duration>;
    /**
     * This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.
     * @see https://schema.org/billingIncrement
     */
    billingIncrement: Array<SchemaOrg_Number>;
    /**
     * Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property.
     * @see https://schema.org/billingStart
     */
    billingStart: Array<SchemaOrg_Number>;
    /**
     * Identifies a price component (for example, a line item on an invoice), part of the total price for an offer.
     * @see https://schema.org/priceComponentType
     */
    priceComponentType: Array<SchemaOrg_PriceComponentTypeEnumeration>;
    /**
     * Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.
     * @see https://schema.org/priceType
     */
    priceType: Array<SchemaOrg_Text | SchemaOrg_PriceTypeEnumeration>;
    /**
     * The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.
     * @see https://schema.org/referenceQuantity
     */
    referenceQuantity: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
     * @see https://schema.org/unitCode
     */
    unitCode: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
     * <a href='unitCode'>unitCode</a>.
     * @see https://schema.org/unitText
     */
    unitText: Array<SchemaOrg_Text>;
}
