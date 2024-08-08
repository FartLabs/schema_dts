// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Offer } from "./SchemaOrg_Offer.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";

/**
 * A subscription which allows a user to access media including audio, video, books, etc.
 * @see https://schema.org/MediaSubscription
 */
export const SCHEMA_ORG_MediaSubscription = "https://schema.org/MediaSubscription" as const;

/**
 * A subscription which allows a user to access media including audio, video, books, etc.
 * @see https://schema.org/MediaSubscription
 */
export interface SchemaOrg_MediaSubscription extends SchemaOrg_Intangible {
    /**
     * The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media.
     * @see https://schema.org/authenticator
     */
    authenticator?: Array<SchemaOrg_Organization>;
    /**
     * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
     * @see https://schema.org/expectsAcceptanceOf
     */
    expectsAcceptanceOf?: Array<SchemaOrg_Offer>;
}
