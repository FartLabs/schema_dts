// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** The frequency in MHz and the modulation used for a particular BroadcastService. */
export interface ClassBroadcastFrequencySpecification extends ClassIntangible {
  /** The frequency in MHz for a particular broadcast. */
  broadcastFrequencyValue: Array<number | { "@id": string }>;
  /** The modulation (e.g. FM, AM, etc) used by a particular broadcast service. */
  broadcastSignalModulation: Array<string | { "@id": string }>;
  /** The subchannel used for the broadcast. */
  broadcastSubChannel: Array<string>;
}
