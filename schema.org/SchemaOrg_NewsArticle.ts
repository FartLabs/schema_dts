// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Article } from "./SchemaOrg_Article.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.
 *
 * A more detailed overview of [schema.org News markup](/docs/news.html) is also available.
 * @see https://schema.org/NewsArticle
 */
export const SCHEMA_ORG_NewsArticle = "https://schema.org/NewsArticle" as const;

/**
 * A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.
 *
 * A more detailed overview of [schema.org News markup](/docs/news.html) is also available.
 * @see https://schema.org/NewsArticle
 */
export interface SchemaOrg_NewsArticle extends SchemaOrg_Article {
  /**
   * A [dateline](https://en.wikipedia.org/wiki/Dateline) is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.
   *
   * Structured representations of dateline-related information can also be expressed more explicitly using [[locationCreated]] (which represents where a work was created, e.g. where a news report was written).  For location depicted or described in the content, use [[contentLocation]].
   *
   * Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines".
   * @see https://schema.org/dateline
   */
  dateline?: Array<SchemaOrg_Text>;
  /**
   * The number of the column in which the NewsArticle appears in the print edition.
   * @see https://schema.org/printColumn
   */
  printColumn?: Array<SchemaOrg_Text>;
  /**
   * The edition of the print product in which the NewsArticle appears.
   * @see https://schema.org/printEdition
   */
  printEdition?: Array<SchemaOrg_Text>;
  /**
   * If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).
   * @see https://schema.org/printPage
   */
  printPage?: Array<SchemaOrg_Text>;
  /**
   * If this NewsArticle appears in print, this field indicates the print section in which the article appeared.
   * @see https://schema.org/printSection
   */
  printSection?: Array<SchemaOrg_Text>;
}
