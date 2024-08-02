// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAction } from "./Action.ts";

/** The act of playing/exercising/training/performing for enjoyment, leisure, recreation, competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content. */
export interface ClassPlayAction extends ClassAction {
  /** An intended audience, i.e. a group for whom something was created. */
  audience: Array<{ "@id": string }>;
  /** Upcoming or past event associated with this place, organization, or action. */
  event: Array<{ "@id": string }>;
}
