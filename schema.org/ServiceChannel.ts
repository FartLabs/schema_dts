// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A means for accessing a service, e.g. a government office location, web site, or phone number. */
export interface ClassServiceChannel extends ClassIntangible {
  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]. */
  availableLanguage: Array<string | { "@id": string }>;
  /** Estimated processing time for the service using this channel. */
  processingTime: Array<{ "@id": string }>;
  /** The service provided by this channel. */
  providesService: Array<{ "@id": string }>;
  /** The location (e.g. civic structure, local business, etc.) where a person can go to access the service. */
  serviceLocation: Array<{ "@id": string }>;
  /** The phone number to use to access the service. */
  servicePhone: Array<{ "@id": string }>;
  /** The address for accessing the service by mail. */
  servicePostalAddress: Array<{ "@id": string }>;
  /** The number to access the service by text message. */
  serviceSmsNumber: Array<{ "@id": string }>;
  /** The website to access the service. */
  serviceUrl: Array<{ "@id": string }>;
}
