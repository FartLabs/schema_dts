// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassLegislation } from "./Legislation.ts";
import type { ClassMediaObject } from "./MediaObject.ts";

/** A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version. */
export interface ClassLegislationObject
  extends ClassLegislation, ClassMediaObject {
  /** The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a "stronger" legal value than the HTML file of the same act. */
  legislationLegalValue: Array<{ "@id": string }>;
}
