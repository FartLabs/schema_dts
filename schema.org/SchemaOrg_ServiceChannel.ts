// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_Service } from "./SchemaOrg_Service.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A means for accessing a service, e.g. a government office location, web site, or phone number.
 * @see https://schema.org/ServiceChannel
 */
export const SCHEMA_ORG_ServiceChannel =
  "https://schema.org/ServiceChannel" as const;

/**
 * A means for accessing a service, e.g. a government office location, web site, or phone number.
 * @see https://schema.org/ServiceChannel
 */
export interface SchemaOrg_ServiceChannel extends SchemaOrg_Intangible {
  /**
   * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
   * @see https://schema.org/availableLanguage
   */
  availableLanguage?: Array<SchemaOrg_Text | SchemaOrg_Language>;
  /**
   * Estimated processing time for the service using this channel.
   * @see https://schema.org/processingTime
   */
  processingTime?: Array<SchemaOrg_Duration>;
  /**
   * The service provided by this channel.
   * @see https://schema.org/providesService
   */
  providesService?: Array<SchemaOrg_Service>;
  /**
   * The location (e.g. civic structure, local business, etc.) where a person can go to access the service.
   * @see https://schema.org/serviceLocation
   */
  serviceLocation?: Array<SchemaOrg_Place>;
  /**
   * The phone number to use to access the service.
   * @see https://schema.org/servicePhone
   */
  servicePhone?: Array<SchemaOrg_ContactPoint>;
  /**
   * The address for accessing the service by mail.
   * @see https://schema.org/servicePostalAddress
   */
  servicePostalAddress?: Array<SchemaOrg_PostalAddress>;
  /**
   * The number to access the service by text message.
   * @see https://schema.org/serviceSmsNumber
   */
  serviceSmsNumber?: Array<SchemaOrg_ContactPoint>;
  /**
   * The website to access the service.
   * @see https://schema.org/serviceUrl
   */
  serviceUrl?: Array<SchemaOrg_URL>;
}
