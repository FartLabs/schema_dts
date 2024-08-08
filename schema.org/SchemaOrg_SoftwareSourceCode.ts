// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ComputerLanguage } from "./SchemaOrg_ComputerLanguage.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_SoftwareApplication } from "./SchemaOrg_SoftwareApplication.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 * @see https://schema.org/SoftwareSourceCode
 */
export const SCHEMA_ORG_SoftwareSourceCode = "https://schema.org/SoftwareSourceCode" as const;

/**
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 * @see https://schema.org/SoftwareSourceCode
 */
export interface SchemaOrg_SoftwareSourceCode extends SchemaOrg_CreativeWork {
    /**
     * Link to the repository where the un-compiled, human readable code and related code is located (SVN, GitHub, CodePlex).
     * @see https://schema.org/codeRepository
     */
    codeRepository?: Array<SchemaOrg_URL>;
    /**
     * What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
     * @see https://schema.org/codeSampleType
     */
    codeSampleType?: Array<SchemaOrg_Text>;
    /**
     * The computer programming language.
     * @see https://schema.org/programmingLanguage
     */
    programmingLanguage?: Array<SchemaOrg_Text | SchemaOrg_ComputerLanguage>;
    /**
     * Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0).
     * @see https://schema.org/runtime
     */
    runtime?: Array<SchemaOrg_Text>;
    /**
     * Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0).
     * @see https://schema.org/runtimePlatform
     */
    runtimePlatform?: Array<SchemaOrg_Text>;
    /**
     * What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
     * @see https://schema.org/sampleType
     */
    sampleType?: Array<SchemaOrg_Text>;
    /**
     * Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.
     * @see https://schema.org/targetProduct
     */
    targetProduct?: Array<SchemaOrg_SoftwareApplication>;
}
