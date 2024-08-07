// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AlignmentObject } from "labs/SchemaOrg_AlignmentObject.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_DefinedTerm } from "labs/SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.
 *
 * [[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.
 *
 * [[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
 * @see https://schema.org/LearningResource
 */
export const SCHEMA_ORG_LearningResource = "https://schema.org/LearningResource" as const;

/**
 * The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.
 *
 * [[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.
 *
 * [[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
 * @see https://schema.org/LearningResource
 */
export interface SchemaOrg_LearningResource extends SchemaOrg_CreativeWork {
    /**
     * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
     * @see https://schema.org/assesses
     */
    assesses: Array<SchemaOrg_DefinedTerm | SchemaOrg_Text>;
    /**
     * Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.
     * @see https://schema.org/competencyRequired
     */
    competencyRequired: Array<SchemaOrg_URL | SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * An alignment to an established educational framework.
     *
     * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
     * @see https://schema.org/educationalAlignment
     */
    educationalAlignment: Array<SchemaOrg_AlignmentObject>;
    /**
     * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
     * @see https://schema.org/educationalLevel
     */
    educationalLevel: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL>;
    /**
     * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
     * @see https://schema.org/educationalUse
     */
    educationalUse: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
     * @see https://schema.org/learningResourceType
     */
    learningResourceType: Array<SchemaOrg_DefinedTerm | SchemaOrg_Text>;
    /**
     * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
     * @see https://schema.org/teaches
     */
    teaches: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
}
