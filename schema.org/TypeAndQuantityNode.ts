// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer. */
export interface ClassTypeAndQuantityNode extends ClassStructuredValue {
  /** The quantity of the goods included in the offer. */
  amountOfThisGood: Array<number>;
  /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
  businessFunction: Array<{ "@id": string }>;
  /** The product that this structured value is referring to. */
  typeOfGood: Array<{ "@id": string }>;
  /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
  unitCode: Array<string | { "@id": string }>;
  /**
   * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
   * <a href='unitCode'>unitCode</a>.
   */
  unitText: Array<string>;
}
