// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_PriceSpecification } from "./SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.
 * @see https://schema.org/PriceSpecification
 */
export const SCHEMA_ORG_PriceSpecification = "https://schema.org/PriceSpecification" as const;

/**
 * A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.
 * @see https://schema.org/PriceSpecification
 */
export interface SchemaOrg_PriceSpecification extends SchemaOrg_StructuredValue {
    /**
     * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
     * @see https://schema.org/eligibleQuantity
     */
    eligibleQuantity?: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
     * @see https://schema.org/eligibleTransactionVolume
     */
    eligibleTransactionVolume?: Array<SchemaOrg_PriceSpecification>;
    /**
     * The highest price if the price is a range.
     * @see https://schema.org/maxPrice
     */
    maxPrice?: Array<SchemaOrg_Number>;
    /**
     * The lowest price if the price is a range.
     * @see https://schema.org/minPrice
     */
    minPrice?: Array<SchemaOrg_Number>;
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.
     * @see https://schema.org/price
     */
    price?: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
     * @see https://schema.org/priceCurrency
     */
    priceCurrency?: Array<SchemaOrg_Text>;
    /**
     * The date when the item becomes valid.
     * @see https://schema.org/validFrom
     */
    validFrom?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     * @see https://schema.org/validThrough
     */
    validThrough?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.
     * @see https://schema.org/valueAddedTaxIncluded
     */
    valueAddedTaxIncluded?: Array<SchemaOrg_Boolean>;
}
