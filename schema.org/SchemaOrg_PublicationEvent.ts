// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_BroadcastService } from "labs/SchemaOrg_BroadcastService.ts";
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";

/**
 * A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type, e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 * @see https://schema.org/PublicationEvent
 */
export const SCHEMA_ORG_PublicationEvent = "https://schema.org/PublicationEvent" as const;

/**
 * A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type, e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 * @see https://schema.org/PublicationEvent
 */
export interface SchemaOrg_PublicationEvent extends SchemaOrg_Event {
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     * @see https://schema.org/free
     */
    free: Array<SchemaOrg_Boolean>;
    /**
     * An agent associated with the publication event.
     * @see https://schema.org/publishedBy
     */
    publishedBy: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A broadcast service associated with the publication event.
     * @see https://schema.org/publishedOn
     */
    publishedOn: Array<SchemaOrg_BroadcastService>;
}
