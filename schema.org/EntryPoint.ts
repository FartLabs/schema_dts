// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** An entry point, within some Web-based protocol. */
export interface ClassEntryPoint extends ClassIntangible {
  /** An application that can complete the request. */
  actionApplication: Array<{ "@id": string }>;
  /** The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication. */
  actionPlatform: Array<string | { "@id": string }>;
  /** An application that can complete the request. */
  application: Array<{ "@id": string }>;
  /** The supported content type(s) for an EntryPoint response. */
  contentType: Array<string>;
  /** The supported encoding type(s) for an EntryPoint request. */
  encodingType: Array<string>;
  /** An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP. */
  httpMethod: Array<string>;
  /** An url template (RFC6570) that will be used to construct the target of the execution of the action. */
  urlTemplate: Array<string>;
}
