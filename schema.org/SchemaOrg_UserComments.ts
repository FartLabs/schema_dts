// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";
import type { SchemaOrg_UserInteraction } from "labs/SchemaOrg_UserInteraction.ts";

/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 * @see https://schema.org/UserComments
 */
export const SCHEMA_ORG_UserComments = "https://schema.org/UserComments" as const;

/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 * @see https://schema.org/UserComments
 */
export interface SchemaOrg_UserComments extends SchemaOrg_UserInteraction {
    /**
     * The text of the UserComment.
     * @see https://schema.org/commentText
     */
    commentText: Array<SchemaOrg_Text>;
    /**
     * The time at which the UserComment was made.
     * @see https://schema.org/commentTime
     */
    commentTime: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
     * @see https://schema.org/creator
     */
    creator: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Specifies the CreativeWork associated with the UserComment.
     * @see https://schema.org/discusses
     */
    discusses: Array<SchemaOrg_CreativeWork>;
    /**
     * The URL at which a reply may be posted to the specified UserComment.
     * @see https://schema.org/replyToUrl
     */
    replyToUrl: Array<SchemaOrg_URL>;
}
