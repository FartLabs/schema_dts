// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Class } from "./SchemaOrg_Class.ts";
import type { SchemaOrg_Enumeration } from "./SchemaOrg_Enumeration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Property } from "./SchemaOrg_Property.ts";

/**
 * A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
 * @see https://schema.org/Property
 */
export const SCHEMA_ORG_Property = "https://schema.org/Property" as const;

/**
 * A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
 * @see https://schema.org/Property
 */
export interface SchemaOrg_Property extends SchemaOrg_Intangible {
    /**
     * Relates a property to a class that is (one of) the type(s) the property is expected to be used on.
     * @see https://schema.org/domainIncludes
     */
    domainIncludes?: Array<SchemaOrg_Class>;
    /**
     * Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used.
     * @see https://schema.org/inverseOf
     */
    inverseOf?: Array<SchemaOrg_Property>;
    /**
     * Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.
     * @see https://schema.org/rangeIncludes
     */
    rangeIncludes?: Array<SchemaOrg_Class>;
    /**
     * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
     * @see https://schema.org/supersededBy
     */
    supersededBy?: Array<SchemaOrg_Class | SchemaOrg_Enumeration | SchemaOrg_Property>;
}
