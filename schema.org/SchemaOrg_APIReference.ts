// DO NOT EDIT: This file is generated.
import type { SchemaOrg_TechArticle } from "labs/SchemaOrg_TechArticle.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Reference documentation for application programming interfaces (APIs).
 * @see https://schema.org/APIReference
 */
export const SCHEMA_ORG_APIReference = "https://schema.org/APIReference" as const;

/**
 * Reference documentation for application programming interfaces (APIs).
 * @see https://schema.org/APIReference
 */
export interface SchemaOrg_APIReference extends SchemaOrg_TechArticle {
    /**
     * Library file name, e.g., mscorlib.dll, system.web.dll.
     * @see https://schema.org/assembly
     */
    assembly: Array<SchemaOrg_Text>;
    /**
     * Associated product/technology version. E.g., .NET Framework 4.5.
     * @see https://schema.org/assemblyVersion
     */
    assemblyVersion: Array<SchemaOrg_Text>;
    /**
     * Library file name, e.g., mscorlib.dll, system.web.dll.
     * @see https://schema.org/executableLibraryName
     */
    executableLibraryName: Array<SchemaOrg_Text>;
    /**
     * Indicates whether API is managed or unmanaged.
     * @see https://schema.org/programmingModel
     */
    programmingModel: Array<SchemaOrg_Text>;
    /**
     * Type of app development: phone, Metro style, desktop, XBox, etc.
     * @see https://schema.org/targetPlatform
     */
    targetPlatform: Array<SchemaOrg_Text>;
}
