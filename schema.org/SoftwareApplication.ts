// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A software application. */
export interface ClassSoftwareApplication extends ClassCreativeWork {
  /** Type of software application, e.g. 'Game, Multimedia'. */
  applicationCategory: Array<string | { "@id": string }>;
  /** Subcategory of the application, e.g. 'Arcade Game'. */
  applicationSubCategory: Array<string | { "@id": string }>;
  /** The name of the application suite to which the application belongs (e.g. Excel belongs to Office). */
  applicationSuite: Array<string>;
  /** Device required to run the application. Used in cases where a specific make/model is required to run the application. */
  availableOnDevice: Array<string>;
  /** Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. */
  countriesNotSupported: Array<string>;
  /** Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. */
  countriesSupported: Array<string>;
  /** Device required to run the application. Used in cases where a specific make/model is required to run the application. */
  device: Array<string>;
  /** If the file can be downloaded, URL to download the binary. */
  downloadUrl: Array<{ "@id": string }>;
  /** Features or modules provided by this application (and possibly required by other applications). */
  featureList: Array<string | { "@id": string }>;
  /** Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed. */
  fileSize: Array<string>;
  /** URL at which the app may be installed, if different from the URL of the item. */
  installUrl: Array<{ "@id": string }>;
  /** Minimum memory requirements. */
  memoryRequirements: Array<string | { "@id": string }>;
  /** Operating systems supported (Windows 7, OS X 10.6, Android 1.6). */
  operatingSystem: Array<string>;
  /** Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi). */
  permissions: Array<string>;
  /** Processor architecture required to run the application (e.g. IA64). */
  processorRequirements: Array<string>;
  /** Description of what changed in this version. */
  releaseNotes: Array<string | { "@id": string }>;
  /** Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime). */
  requirements: Array<string | { "@id": string }>;
  /** A link to a screenshot image of the app. */
  screenshot: Array<{ "@id": string }>;
  /** Additional content for a software application. */
  softwareAddOn: Array<{ "@id": string }>;
  /** Software application help. */
  softwareHelp: Array<{ "@id": string }>;
  /** Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime). */
  softwareRequirements: Array<string | { "@id": string }>;
  /** Version of the software instance. */
  softwareVersion: Array<string>;
  /** Storage requirements (free space required). */
  storageRequirements: Array<string | { "@id": string }>;
  /** Supporting data for a SoftwareApplication. */
  supportingData: Array<{ "@id": string }>;
}
