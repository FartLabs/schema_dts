// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "labs/SchemaOrg_Action.ts";
import type { SchemaOrg_Audience } from "labs/SchemaOrg_Audience.ts";
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";

/**
 * The act of playing/exercising/training/performing for enjoyment, leisure, recreation, competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 * @see https://schema.org/PlayAction
 */
export const SCHEMA_ORG_PlayAction = "https://schema.org/PlayAction" as const;

/**
 * The act of playing/exercising/training/performing for enjoyment, leisure, recreation, competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 * @see https://schema.org/PlayAction
 */
export interface SchemaOrg_PlayAction extends SchemaOrg_Action {
    /**
     * An intended audience, i.e. a group for whom something was created.
     * @see https://schema.org/audience
     */
    audience: Array<SchemaOrg_Audience>;
    /**
     * Upcoming or past event associated with this place, organization, or action.
     * @see https://schema.org/event
     */
    event: Array<SchemaOrg_Event>;
}
