// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_InteractAction } from "./SchemaOrg_InteractAction.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";

/**
 * The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 * @see https://schema.org/CommunicateAction
 */
export const SCHEMA_ORG_CommunicateAction = "https://schema.org/CommunicateAction" as const;

/**
 * The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 * @see https://schema.org/CommunicateAction
 */
export interface SchemaOrg_CommunicateAction extends SchemaOrg_InteractAction {
    /**
     * The subject matter of the content.
     * @see https://schema.org/about
     */
    about?: Array<SchemaOrg_Thing>;
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
    /**
     * A sub property of participant. The participant who is at the receiving end of the action.
     * @see https://schema.org/recipient
     */
    recipient?: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
}
