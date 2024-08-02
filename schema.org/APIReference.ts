// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTechArticle } from "./TechArticle.ts";

/** Reference documentation for application programming interfaces (APIs). */
export interface ClassAPIReference extends ClassTechArticle {
  /** Library file name, e.g., mscorlib.dll, system.web.dll. */
  assembly: Array<string>;
  /** Associated product/technology version. E.g., .NET Framework 4.5. */
  assemblyVersion: Array<string>;
  /** Library file name, e.g., mscorlib.dll, system.web.dll. */
  executableLibraryName: Array<string>;
  /** Indicates whether API is managed or unmanaged. */
  programmingModel: Array<string>;
  /** Type of app development: phone, Metro style, desktop, XBox, etc. */
  targetPlatform: Array<string>;
}
