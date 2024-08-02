// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassSoftwareApplication } from "./SoftwareApplication.ts";

/** A software application designed specifically to work well on a mobile device such as a telephone. */
export interface ClassMobileApplication extends ClassSoftwareApplication {
  /** Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network). */
  carrierRequirements: Array<string>;
}
