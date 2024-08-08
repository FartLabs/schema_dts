// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_ContactPointOption } from "./SchemaOrg_ContactPointOption.ts";
import type { SchemaOrg_GeoShape } from "./SchemaOrg_GeoShape.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_OpeningHoursSpecification } from "./SchemaOrg_OpeningHoursSpecification.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A contact point&#x2014;for example, a Customer Complaints department.
 * @see https://schema.org/ContactPoint
 */
export const SCHEMA_ORG_ContactPoint = "https://schema.org/ContactPoint" as const;

/**
 * A contact point&#x2014;for example, a Customer Complaints department.
 * @see https://schema.org/ContactPoint
 */
export interface SchemaOrg_ContactPoint extends SchemaOrg_StructuredValue {
    /**
     * The geographic area where a service or offered item is provided.
     * @see https://schema.org/areaServed
     */
    areaServed?: Array<SchemaOrg_Place | SchemaOrg_AdministrativeArea | SchemaOrg_GeoShape | SchemaOrg_Text>;
    /**
     * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
     * @see https://schema.org/availableLanguage
     */
    availableLanguage?: Array<SchemaOrg_Text | SchemaOrg_Language>;
    /**
     * An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).
     * @see https://schema.org/contactOption
     */
    contactOption?: Array<SchemaOrg_ContactPointOption>;
    /**
     * A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.
     * @see https://schema.org/contactType
     */
    contactType?: Array<SchemaOrg_Text>;
    /**
     * Email address.
     * @see https://schema.org/email
     */
    email?: Array<SchemaOrg_Text>;
    /**
     * The fax number.
     * @see https://schema.org/faxNumber
     */
    faxNumber?: Array<SchemaOrg_Text>;
    /**
     * The hours during which this service or contact is available.
     * @see https://schema.org/hoursAvailable
     */
    hoursAvailable?: Array<SchemaOrg_OpeningHoursSpecification>;
    /**
     * The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").
     * @see https://schema.org/productSupported
     */
    productSupported?: Array<SchemaOrg_Product | SchemaOrg_Text>;
    /**
     * The geographic area where the service is provided.
     * @see https://schema.org/serviceArea
     */
    serviceArea?: Array<SchemaOrg_AdministrativeArea | SchemaOrg_GeoShape | SchemaOrg_Place>;
    /**
     * The telephone number.
     * @see https://schema.org/telephone
     */
    telephone?: Array<SchemaOrg_Text>;
}
