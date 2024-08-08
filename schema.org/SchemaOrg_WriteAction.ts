// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreateAction } from "./SchemaOrg_CreateAction.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * The act of authoring written creative content.
 * @see https://schema.org/WriteAction
 */
export const SCHEMA_ORG_WriteAction = "https://schema.org/WriteAction" as const;

/**
 * The act of authoring written creative content.
 * @see https://schema.org/WriteAction
 */
export interface SchemaOrg_WriteAction extends SchemaOrg_CreateAction {
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * @see https://schema.org/inLanguage
     */
    inLanguage?: Array<SchemaOrg_Language | SchemaOrg_Text>;
    /**
     * A sub property of instrument. The language used on this action.
     * @see https://schema.org/language
     */
    language?: Array<SchemaOrg_Language>;
}
