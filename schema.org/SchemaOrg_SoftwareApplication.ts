// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_DataFeed } from "./SchemaOrg_DataFeed.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_SoftwareApplication } from "./SchemaOrg_SoftwareApplication.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A software application.
 * @see https://schema.org/SoftwareApplication
 */
export const SCHEMA_ORG_SoftwareApplication = "https://schema.org/SoftwareApplication" as const;

/**
 * A software application.
 * @see https://schema.org/SoftwareApplication
 */
export interface SchemaOrg_SoftwareApplication extends SchemaOrg_CreativeWork {
    /**
     * Type of software application, e.g. 'Game, Multimedia'.
     * @see https://schema.org/applicationCategory
     */
    applicationCategory?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * Subcategory of the application, e.g. 'Arcade Game'.
     * @see https://schema.org/applicationSubCategory
     */
    applicationSubCategory?: Array<SchemaOrg_Text | SchemaOrg_URL>;
    /**
     * The name of the application suite to which the application belongs (e.g. Excel belongs to Office).
     * @see https://schema.org/applicationSuite
     */
    applicationSuite?: Array<SchemaOrg_Text>;
    /**
     * Device required to run the application. Used in cases where a specific make/model is required to run the application.
     * @see https://schema.org/availableOnDevice
     */
    availableOnDevice?: Array<SchemaOrg_Text>;
    /**
     * Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
     * @see https://schema.org/countriesNotSupported
     */
    countriesNotSupported?: Array<SchemaOrg_Text>;
    /**
     * Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
     * @see https://schema.org/countriesSupported
     */
    countriesSupported?: Array<SchemaOrg_Text>;
    /**
     * Device required to run the application. Used in cases where a specific make/model is required to run the application.
     * @see https://schema.org/device
     */
    device?: Array<SchemaOrg_Text>;
    /**
     * If the file can be downloaded, URL to download the binary.
     * @see https://schema.org/downloadUrl
     */
    downloadUrl?: Array<SchemaOrg_URL>;
    /**
     * Features or modules provided by this application (and possibly required by other applications).
     * @see https://schema.org/featureList
     */
    featureList?: Array<SchemaOrg_Text | SchemaOrg_URL>;
    /**
     * Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.
     * @see https://schema.org/fileSize
     */
    fileSize?: Array<SchemaOrg_Text>;
    /**
     * URL at which the app may be installed, if different from the URL of the item.
     * @see https://schema.org/installUrl
     */
    installUrl?: Array<SchemaOrg_URL>;
    /**
     * Minimum memory requirements.
     * @see https://schema.org/memoryRequirements
     */
    memoryRequirements?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * Operating systems supported (Windows 7, OS X 10.6, Android 1.6).
     * @see https://schema.org/operatingSystem
     */
    operatingSystem?: Array<SchemaOrg_Text>;
    /**
     * Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).
     * @see https://schema.org/permissions
     */
    permissions?: Array<SchemaOrg_Text>;
    /**
     * Processor architecture required to run the application (e.g. IA64).
     * @see https://schema.org/processorRequirements
     */
    processorRequirements?: Array<SchemaOrg_Text>;
    /**
     * Description of what changed in this version.
     * @see https://schema.org/releaseNotes
     */
    releaseNotes?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).
     * @see https://schema.org/requirements
     */
    requirements?: Array<SchemaOrg_Text | SchemaOrg_URL>;
    /**
     * A link to a screenshot image of the app.
     * @see https://schema.org/screenshot
     */
    screenshot?: Array<SchemaOrg_URL | SchemaOrg_ImageObject>;
    /**
     * Additional content for a software application.
     * @see https://schema.org/softwareAddOn
     */
    softwareAddOn?: Array<SchemaOrg_SoftwareApplication>;
    /**
     * Software application help.
     * @see https://schema.org/softwareHelp
     */
    softwareHelp?: Array<SchemaOrg_CreativeWork>;
    /**
     * Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).
     * @see https://schema.org/softwareRequirements
     */
    softwareRequirements?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * Version of the software instance.
     * @see https://schema.org/softwareVersion
     */
    softwareVersion?: Array<SchemaOrg_Text>;
    /**
     * Storage requirements (free space required).
     * @see https://schema.org/storageRequirements
     */
    storageRequirements?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * Supporting data for a SoftwareApplication.
     * @see https://schema.org/supportingData
     */
    supportingData?: Array<SchemaOrg_DataFeed>;
}
