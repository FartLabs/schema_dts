// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc. */
export interface ClassProgramMembership extends ClassIntangible {
  /** The organization (airline, travelers' club, etc.) the membership is made with. */
  hostingOrganization: Array<{ "@id": string }>;
  /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. */
  member: Array<{ "@id": string }>;
  /** A member of this organization. */
  members: Array<{ "@id": string }>;
  /** A unique identifier for the membership. */
  membershipNumber: Array<string>;
  /** The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (E.g. stars, miles, etc.) */
  membershipPointsEarned: Array<number | { "@id": string }>;
  /** The program providing the membership. */
  programName: Array<string>;
}
