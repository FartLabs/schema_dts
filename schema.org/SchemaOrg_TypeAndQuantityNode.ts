// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BusinessFunction } from "labs/SchemaOrg_BusinessFunction.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_Service } from "labs/SchemaOrg_Service.ts";
import type { SchemaOrg_StructuredValue } from "labs/SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.
 * @see https://schema.org/TypeAndQuantityNode
 */
export const SCHEMA_ORG_TypeAndQuantityNode = "https://schema.org/TypeAndQuantityNode" as const;

/**
 * A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.
 * @see https://schema.org/TypeAndQuantityNode
 */
export interface SchemaOrg_TypeAndQuantityNode extends SchemaOrg_StructuredValue {
    /**
     * The quantity of the goods included in the offer.
     * @see https://schema.org/amountOfThisGood
     */
    amountOfThisGood: Array<SchemaOrg_Number>;
    /**
     * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
     * @see https://schema.org/businessFunction
     */
    businessFunction: Array<SchemaOrg_BusinessFunction>;
    /**
     * The product that this structured value is referring to.
     * @see https://schema.org/typeOfGood
     */
    typeOfGood: Array<SchemaOrg_Product | SchemaOrg_Service>;
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
