// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "./SchemaOrg_Action.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_TextObject } from "./SchemaOrg_TextObject.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * The most generic type of item.
 * @see https://schema.org/Thing
 */
export const SCHEMA_ORG_Thing = "https://schema.org/Thing" as const;

/**
 * The most generic type of item.
 * @see https://schema.org/Thing
 */
export interface SchemaOrg_Thing {
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
     *     use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
     * @see https://schema.org/additionalType
     */
    additionalType?: Array<SchemaOrg_Text | SchemaOrg_URL>;
    /**
     * An alias for the item.
     * @see https://schema.org/alternateName
     */
    alternateName?: Array<SchemaOrg_Text>;
    /**
     * A description of the item.
     * @see https://schema.org/description
     */
    description?: Array<SchemaOrg_Text | SchemaOrg_TextObject>;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     * @see https://schema.org/disambiguatingDescription
     */
    disambiguatingDescription?: Array<SchemaOrg_Text>;
    /**
     * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
     * @see https://schema.org/identifier
     */
    identifier?: Array<SchemaOrg_PropertyValue | SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     * @see https://schema.org/image
     */
    image?: Array<SchemaOrg_URL | SchemaOrg_ImageObject>;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     * @see https://schema.org/mainEntityOfPage
     */
    mainEntityOfPage?: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * The name of the item.
     * @see https://schema.org/name
     */
    name?: Array<SchemaOrg_Text>;
    /**
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     * @see https://schema.org/potentialAction
     */
    potentialAction?: Array<SchemaOrg_Action>;
    /**
     * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     * @see https://schema.org/sameAs
     */
    sameAs?: Array<SchemaOrg_URL>;
    /**
     * A CreativeWork or Event about this Thing.
     * @see https://schema.org/subjectOf
     */
    subjectOf?: Array<SchemaOrg_Event | SchemaOrg_CreativeWork>;
    /**
     * URL of the item.
     * @see https://schema.org/url
     */
    url?: Array<SchemaOrg_URL>;
}
