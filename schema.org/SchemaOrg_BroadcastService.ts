// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BroadcastChannel } from "./SchemaOrg_BroadcastChannel.ts";
import type { SchemaOrg_BroadcastFrequencySpecification } from "./SchemaOrg_BroadcastFrequencySpecification.ts";
import type { SchemaOrg_BroadcastService } from "./SchemaOrg_BroadcastService.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Service } from "./SchemaOrg_Service.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A delivery service through which content is provided via broadcast over the air or online.
 * @see https://schema.org/BroadcastService
 */
export const SCHEMA_ORG_BroadcastService = "https://schema.org/BroadcastService" as const;

/**
 * A delivery service through which content is provided via broadcast over the air or online.
 * @see https://schema.org/BroadcastService
 */
export interface SchemaOrg_BroadcastService extends SchemaOrg_Service {
    /**
     * The area within which users can expect to reach the broadcast service.
     * @see https://schema.org/area
     */
    area?: Array<SchemaOrg_Place>;
    /**
     * The media network(s) whose content is broadcast on this station.
     * @see https://schema.org/broadcastAffiliateOf
     */
    broadcastAffiliateOf?: Array<SchemaOrg_Organization>;
    /**
     * The name displayed in the channel guide. For many US affiliates, it is the network name.
     * @see https://schema.org/broadcastDisplayName
     */
    broadcastDisplayName?: Array<SchemaOrg_Text>;
    /**
     * The frequency used for over-the-air broadcasts. Numeric values or simple ranges, e.g. 87-99. In addition a shortcut idiom is supported for frequencies of AM and FM radio channels, e.g. "87 FM".
     * @see https://schema.org/broadcastFrequency
     */
    broadcastFrequency?: Array<SchemaOrg_Text | SchemaOrg_BroadcastFrequencySpecification>;
    /**
     * The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts.
     * @see https://schema.org/broadcastTimezone
     */
    broadcastTimezone?: Array<SchemaOrg_Text>;
    /**
     * The organization owning or operating the broadcast service.
     * @see https://schema.org/broadcaster
     */
    broadcaster?: Array<SchemaOrg_Organization>;
    /**
     * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
     * @see https://schema.org/callSign
     */
    callSign?: Array<SchemaOrg_Text>;
    /**
     * A broadcast channel of a broadcast service.
     * @see https://schema.org/hasBroadcastChannel
     */
    hasBroadcastChannel?: Array<SchemaOrg_BroadcastChannel>;
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * @see https://schema.org/inLanguage
     */
    inLanguage?: Array<SchemaOrg_Language | SchemaOrg_Text>;
    /**
     * A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.
     * @see https://schema.org/parentService
     */
    parentService?: Array<SchemaOrg_BroadcastService>;
    /**
     * The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
     * @see https://schema.org/videoFormat
     */
    videoFormat?: Array<SchemaOrg_Text>;
}
