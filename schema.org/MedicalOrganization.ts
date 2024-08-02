// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassOrganization } from "./Organization.ts";

/** A medical organization (physical or not), such as hospital, institution or clinic. */
export interface ClassMedicalOrganization extends ClassOrganization {
  /** Name or unique ID of network. (Networks are often reused across different insurance plans.) */
  healthPlanNetworkId: Array<string>;
  /** Whether the provider is accepting new patients. */
  isAcceptingNewPatients: Array<boolean>;
  /** A medical specialty of the provider. */
  medicalSpecialty: Array<{ "@id": string }>;
}
