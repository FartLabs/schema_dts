// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * @see https://schema.org/ProgramMembership
 */
export const SCHEMA_ORG_ProgramMembership = "https://schema.org/ProgramMembership" as const;

/**
 * Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * @see https://schema.org/ProgramMembership
 */
export interface SchemaOrg_ProgramMembership extends SchemaOrg_Intangible {
    /**
     * The organization (airline, travelers' club, etc.) the membership is made with.
     * @see https://schema.org/hostingOrganization
     */
    hostingOrganization?: Array<SchemaOrg_Organization>;
    /**
     * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
     * @see https://schema.org/member
     */
    member?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A member of this organization.
     * @see https://schema.org/members
     */
    members?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A unique identifier for the membership.
     * @see https://schema.org/membershipNumber
     */
    membershipNumber?: Array<SchemaOrg_Text>;
    /**
     * The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (E.g. stars, miles, etc.)
     * @see https://schema.org/membershipPointsEarned
     */
    membershipPointsEarned?: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue>;
    /**
     * The program providing the membership.
     * @see https://schema.org/programName
     */
    programName?: Array<SchemaOrg_Text>;
}
