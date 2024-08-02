// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassText } from "./Text.ts";

/** Data type: PronounceableText. */
export interface ClassPronounceableText extends ClassText {
  /** The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]]. */
  inLanguage: Array<string | { "@id": string }>;
  /** Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ˈhjuːstən/. */
  phoneticText: Array<string>;
  /** Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898). */
  speechToTextMarkup: Array<string>;
  /** Text value being annotated. */
  textValue: Array<string>;
}
