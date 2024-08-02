// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** An electronic file or document. */
export interface ClassDigitalDocument extends ClassCreativeWork {
  /** A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public". */
  hasDigitalDocumentPermission: Array<{ "@id": string }>;
}
