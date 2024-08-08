// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ActionStatusType } from "./SchemaOrg_ActionStatusType.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_EntryPoint } from "./SchemaOrg_EntryPoint.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";
import type { SchemaOrg_VirtualLocation } from "./SchemaOrg_VirtualLocation.ts";

/**
 * An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\n\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html).
 * @see https://schema.org/Action
 */
export const SCHEMA_ORG_Action = "https://schema.org/Action" as const;

/**
 * An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\n\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](https://schema.org/docs/actions.html).
 * @see https://schema.org/Action
 */
export interface SchemaOrg_Action extends SchemaOrg_Thing {
  /**
   * Indicates the current disposition of the Action.
   * @see https://schema.org/actionStatus
   */
  actionStatus?: Array<SchemaOrg_ActionStatusType>;
  /**
   * The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.
   * @see https://schema.org/agent
   */
  agent?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/endTime
   */
  endTime?: Array<SchemaOrg_Time | SchemaOrg_DateTime>;
  /**
   * For failed actions, more information on the cause of the failure.
   * @see https://schema.org/error
   */
  error?: Array<SchemaOrg_Thing>;
  /**
   * The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.
   * @see https://schema.org/instrument
   */
  instrument?: Array<SchemaOrg_Thing>;
  /**
   * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   * @see https://schema.org/location
   */
  location?: Array<
    | SchemaOrg_Text
    | SchemaOrg_VirtualLocation
    | SchemaOrg_Place
    | SchemaOrg_PostalAddress
  >;
  /**
   * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.
   * @see https://schema.org/object
   */
  object?: Array<SchemaOrg_Thing>;
  /**
   * Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.
   * @see https://schema.org/participant
   */
  participant?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   * @see https://schema.org/provider
   */
  provider?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The result produced in the action. E.g. John wrote *a book*.
   * @see https://schema.org/result
   */
  result?: Array<SchemaOrg_Thing>;
  /**
   * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/startTime
   */
  startTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
  /**
   * Indicates a target EntryPoint, or url, for an Action.
   * @see https://schema.org/target
   */
  target?: Array<SchemaOrg_EntryPoint | SchemaOrg_URL>;
}
