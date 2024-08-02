// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassService } from "./Service.ts";

/** A delivery service through which content is provided via broadcast over the air or online. */
export interface ClassBroadcastService extends ClassService {
  /** The area within which users can expect to reach the broadcast service. */
  area: Array<{ "@id": string }>;
  /** The media network(s) whose content is broadcast on this station. */
  broadcastAffiliateOf: Array<{ "@id": string }>;
  /** The name displayed in the channel guide. For many US affiliates, it is the network name. */
  broadcastDisplayName: Array<string>;
  /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges, e.g. 87-99. In addition a shortcut idiom is supported for frequencies of AM and FM radio channels, e.g. "87 FM". */
  broadcastFrequency: Array<string | { "@id": string }>;
  /** The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts. */
  broadcastTimezone: Array<string>;
  /** The organization owning or operating the broadcast service. */
  broadcaster: Array<{ "@id": string }>;
  /** A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
  callSign: Array<string>;
  /** A broadcast channel of a broadcast service. */
  hasBroadcastChannel: Array<{ "@id": string }>;
  /** The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]]. */
  inLanguage: Array<string | { "@id": string }>;
  /** A broadcast service to which the broadcast service may belong to such as regional variations of a national channel. */
  parentService: Array<{ "@id": string }>;
  /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
  videoFormat: Array<string>;
}
