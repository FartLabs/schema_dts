// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Service } from "./SchemaOrg_Service.ts";

/**
 * A permit issued by an organization, e.g. a parking pass.
 * @see https://schema.org/Permit
 */
export const SCHEMA_ORG_Permit = "https://schema.org/Permit" as const;

/**
 * A permit issued by an organization, e.g. a parking pass.
 * @see https://schema.org/Permit
 */
export interface SchemaOrg_Permit extends SchemaOrg_Intangible {
    /**
     * The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]].
     * @see https://schema.org/issuedBy
     */
    issuedBy?: Array<SchemaOrg_Organization>;
    /**
     * The service through which the permit was granted.
     * @see https://schema.org/issuedThrough
     */
    issuedThrough?: Array<SchemaOrg_Service>;
    /**
     * The target audience for this permit.
     * @see https://schema.org/permitAudience
     */
    permitAudience?: Array<SchemaOrg_Audience>;
    /**
     * The duration of validity of a permit or similar thing.
     * @see https://schema.org/validFor
     */
    validFor?: Array<SchemaOrg_Duration>;
    /**
     * The date when the item becomes valid.
     * @see https://schema.org/validFrom
     */
    validFrom?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]].
     * @see https://schema.org/validIn
     */
    validIn?: Array<SchemaOrg_AdministrativeArea>;
    /**
     * The date when the item is no longer valid.
     * @see https://schema.org/validUntil
     */
    validUntil?: Array<SchemaOrg_Date>;
}
