// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 *
 * Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 * @see https://schema.org/AlignmentObject
 */
export const SCHEMA_ORG_AlignmentObject = "https://schema.org/AlignmentObject" as const;

/**
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 *
 * Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 * @see https://schema.org/AlignmentObject
 */
export interface SchemaOrg_AlignmentObject extends SchemaOrg_Intangible {
    /**
     * A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'.
     * @see https://schema.org/alignmentType
     */
    alignmentType: Array<SchemaOrg_Text>;
    /**
     * The framework to which the resource being described is aligned.
     * @see https://schema.org/educationalFramework
     */
    educationalFramework: Array<SchemaOrg_Text>;
    /**
     * The description of a node in an established educational framework.
     * @see https://schema.org/targetDescription
     */
    targetDescription: Array<SchemaOrg_Text>;
    /**
     * The name of a node in an established educational framework.
     * @see https://schema.org/targetName
     */
    targetName: Array<SchemaOrg_Text>;
    /**
     * The URL of a node in an established educational framework.
     * @see https://schema.org/targetUrl
     */
    targetUrl: Array<SchemaOrg_URL>;
}
