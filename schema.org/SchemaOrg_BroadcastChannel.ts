// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BroadcastFrequencySpecification } from "./SchemaOrg_BroadcastFrequencySpecification.ts";
import type { SchemaOrg_BroadcastService } from "./SchemaOrg_BroadcastService.ts";
import type { SchemaOrg_CableOrSatelliteService } from "./SchemaOrg_CableOrSatelliteService.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 * @see https://schema.org/BroadcastChannel
 */
export const SCHEMA_ORG_BroadcastChannel = "https://schema.org/BroadcastChannel" as const;

/**
 * A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 * @see https://schema.org/BroadcastChannel
 */
export interface SchemaOrg_BroadcastChannel extends SchemaOrg_Intangible {
    /**
     * The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.
     * @see https://schema.org/broadcastChannelId
     */
    broadcastChannelId?: Array<SchemaOrg_Text>;
    /**
     * The frequency used for over-the-air broadcasts. Numeric values or simple ranges, e.g. 87-99. In addition a shortcut idiom is supported for frequencies of AM and FM radio channels, e.g. "87 FM".
     * @see https://schema.org/broadcastFrequency
     */
    broadcastFrequency?: Array<SchemaOrg_Text | SchemaOrg_BroadcastFrequencySpecification>;
    /**
     * The type of service required to have access to the channel (e.g. Standard or Premium).
     * @see https://schema.org/broadcastServiceTier
     */
    broadcastServiceTier?: Array<SchemaOrg_Text>;
    /**
     * Genre of the creative work, broadcast channel or group.
     * @see https://schema.org/genre
     */
    genre?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The CableOrSatelliteService offering the channel.
     * @see https://schema.org/inBroadcastLineup
     */
    inBroadcastLineup?: Array<SchemaOrg_CableOrSatelliteService>;
    /**
     * The BroadcastService offered on this channel.
     * @see https://schema.org/providesBroadcastService
     */
    providesBroadcastService?: Array<SchemaOrg_BroadcastService>;
}
