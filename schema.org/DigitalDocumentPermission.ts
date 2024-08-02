// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A permission for a particular person or group to access a particular file. */
export interface ClassDigitalDocumentPermission extends ClassIntangible {
  /** The person, organization, contact point, or audience that has been granted this permission. */
  grantee: Array<{ "@id": string }>;
  /** The type of permission granted the person, organization, or audience. */
  permissionType: Array<{ "@id": string }>;
}
