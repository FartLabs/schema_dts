// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Language } from "labs/SchemaOrg_Language.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Data type: PronounceableText.
 * @see https://schema.org/PronounceableText
 */
export const SCHEMA_ORG_PronounceableText = "https://schema.org/PronounceableText" as const;

/**
 * Data type: PronounceableText.
 * @see https://schema.org/PronounceableText
 */
export interface SchemaOrg_PronounceableText extends SchemaOrg_Text {
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * @see https://schema.org/inLanguage
     */
    inLanguage: Array<SchemaOrg_Language | SchemaOrg_Text>;
    /**
     * Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ˈhjuːstən/.
     * @see https://schema.org/phoneticText
     */
    phoneticText: Array<SchemaOrg_Text>;
    /**
     * Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898).
     * @see https://schema.org/speechToTextMarkup
     */
    speechToTextMarkup: Array<SchemaOrg_Text>;
    /**
     * Text value being annotated.
     * @see https://schema.org/textValue
     */
    textValue: Array<SchemaOrg_Text>;
}
