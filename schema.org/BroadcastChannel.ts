// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A unique instance of a BroadcastService on a CableOrSatelliteService lineup. */
export interface ClassBroadcastChannel extends ClassIntangible {
  /** The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number. */
  broadcastChannelId: Array<string>;
  /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges, e.g. 87-99. In addition a shortcut idiom is supported for frequencies of AM and FM radio channels, e.g. "87 FM". */
  broadcastFrequency: Array<string | { "@id": string }>;
  /** The type of service required to have access to the channel (e.g. Standard or Premium). */
  broadcastServiceTier: Array<string>;
  /** Genre of the creative work, broadcast channel or group. */
  genre: Array<string | { "@id": string }>;
  /** The CableOrSatelliteService offering the channel. */
  inBroadcastLineup: Array<{ "@id": string }>;
  /** The BroadcastService offered on this channel. */
  providesBroadcastService: Array<{ "@id": string }>;
}
