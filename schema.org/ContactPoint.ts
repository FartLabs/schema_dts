// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A contact point&#x2014;for example, a Customer Complaints department. */
export interface ClassContactPoint extends ClassStructuredValue {
  /** The geographic area where a service or offered item is provided. */
  areaServed: Array<string | { "@id": string }>;
  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]. */
  availableLanguage: Array<string | { "@id": string }>;
  /** An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers). */
  contactOption: Array<{ "@id": string }>;
  /** A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point. */
  contactType: Array<string>;
  /** Email address. */
  email: Array<string>;
  /** The fax number. */
  faxNumber: Array<string>;
  /** The hours during which this service or contact is available. */
  hoursAvailable: Array<{ "@id": string }>;
  /** The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones"). */
  productSupported: Array<string | { "@id": string }>;
  /** The geographic area where the service is provided. */
  serviceArea: Array<{ "@id": string }>;
  /** The telephone number. */
  telephone: Array<string>;
}
