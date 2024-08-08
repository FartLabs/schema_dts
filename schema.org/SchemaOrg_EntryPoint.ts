// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DigitalPlatformEnumeration } from "./SchemaOrg_DigitalPlatformEnumeration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_SoftwareApplication } from "./SchemaOrg_SoftwareApplication.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * An entry point, within some Web-based protocol.
 * @see https://schema.org/EntryPoint
 */
export const SCHEMA_ORG_EntryPoint = "https://schema.org/EntryPoint" as const;

/**
 * An entry point, within some Web-based protocol.
 * @see https://schema.org/EntryPoint
 */
export interface SchemaOrg_EntryPoint extends SchemaOrg_Intangible {
  /**
   * An application that can complete the request.
   * @see https://schema.org/actionApplication
   */
  actionApplication?: Array<SchemaOrg_SoftwareApplication>;
  /**
   * The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.
   * @see https://schema.org/actionPlatform
   */
  actionPlatform?: Array<
    SchemaOrg_DigitalPlatformEnumeration | SchemaOrg_Text | SchemaOrg_URL
  >;
  /**
   * An application that can complete the request.
   * @see https://schema.org/application
   */
  application?: Array<SchemaOrg_SoftwareApplication>;
  /**
   * The supported content type(s) for an EntryPoint response.
   * @see https://schema.org/contentType
   */
  contentType?: Array<SchemaOrg_Text>;
  /**
   * The supported encoding type(s) for an EntryPoint request.
   * @see https://schema.org/encodingType
   */
  encodingType?: Array<SchemaOrg_Text>;
  /**
   * An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.
   * @see https://schema.org/httpMethod
   */
  httpMethod?: Array<SchemaOrg_Text>;
  /**
   * An url template (RFC6570) that will be used to construct the target of the execution of the action.
   * @see https://schema.org/urlTemplate
   */
  urlTemplate?: Array<SchemaOrg_Text>;
}
