// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalIntangible } from "./MedicalIntangible.ts";

/** An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it. */
export interface ClassDDxElement extends ClassMedicalIntangible {
  /** One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process. */
  diagnosis: Array<{ "@id": string }>;
  /** One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis. */
  distinguishingSign: Array<{ "@id": string }>;
}
