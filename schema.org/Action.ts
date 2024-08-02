// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\n\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html). */
export interface ClassAction extends ClassThing {
  /** Indicates the current disposition of the Action. */
  actionStatus: Array<{ "@id": string }>;
  /** The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book. */
  agent: Array<{ "@id": string }>;
  /** The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. */
  endTime: Array<string>;
  /** For failed actions, more information on the cause of the failure. */
  error: Array<{ "@id": string }>;
  /** The object that helped the agent perform the action. E.g. John wrote a book with *a pen*. */
  instrument: Array<{ "@id": string }>;
  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
  location: Array<string | { "@id": string }>;
  /** The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*. */
  object: Array<{ "@id": string }>;
  /** Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*. */
  participant: Array<{ "@id": string }>;
  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
  provider: Array<{ "@id": string }>;
  /** The result produced in the action. E.g. John wrote *a book*. */
  result: Array<{ "@id": string }>;
  /** The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. */
  startTime: Array<string>;
  /** Indicates a target EntryPoint, or url, for an Action. */
  target: Array<{ "@id": string }>;
}
