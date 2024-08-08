// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_SpeakableSpecification } from "./SchemaOrg_SpeakableSpecification.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 * @see https://schema.org/Article
 */
export const SCHEMA_ORG_Article = "https://schema.org/Article" as const;

/**
 * An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 * @see https://schema.org/Article
 */
export interface SchemaOrg_Article extends SchemaOrg_CreativeWork {
    /**
     * The actual body of the article.
     * @see https://schema.org/articleBody
     */
    articleBody?: Array<SchemaOrg_Text>;
    /**
     * Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.
     * @see https://schema.org/articleSection
     */
    articleSection?: Array<SchemaOrg_Text>;
    /**
     * For an [[Article]], typically a [[NewsArticle]], the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc.
     * @see https://schema.org/backstory
     */
    backstory?: Array<SchemaOrg_Text | SchemaOrg_CreativeWork>;
    /**
     * The page on which the work ends; for example "138" or "xvi".
     * @see https://schema.org/pageEnd
     */
    pageEnd?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * The page on which the work starts; for example "135" or "xiii".
     * @see https://schema.org/pageStart
     */
    pageStart?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
     * @see https://schema.org/pagination
     */
    pagination?: Array<SchemaOrg_Text>;
    /**
     * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
     *
     * The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
     *
     * 1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.
     *
     * 2.) CSS Selectors - addresses content in the annotated page, e.g. via class attribute. Use the [[cssSelector]] property.
     *
     * 3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.
     *
     *
     * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
     * we define a supporting type, [[SpeakableSpecification]]  which is defined to be a possible value of the *speakable* property.
     * @see https://schema.org/speakable
     */
    speakable?: Array<SchemaOrg_SpeakableSpecification | SchemaOrg_URL>;
    /**
     * The number of words in the text of the Article.
     * @see https://schema.org/wordCount
     */
    wordCount?: Array<SchemaOrg_Integer>;
}
