// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product. */
export interface ClassWarrantyPromise extends ClassStructuredValue {
  /** The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days. */
  durationOfWarranty: Array<{ "@id": string }>;
  /** The scope of the warranty promise. */
  warrantyScope: Array<{ "@id": string }>;
}
