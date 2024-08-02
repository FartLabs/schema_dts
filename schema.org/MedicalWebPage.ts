// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassWebPage } from "./WebPage.ts";

/** A web page that provides medical information. */
export interface ClassMedicalWebPage extends ClassWebPage {
  /** An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc. */
  aspect: Array<string>;
  /** Medical audience for page. */
  medicalAudience: Array<{ "@id": string }>;
}
