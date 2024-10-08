// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Series } from "./SchemaOrg_Series.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike [[ItemList]] which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as TV, radio and games).\n\nSpecific subtypes are available for describing [[TVSeries]], [[RadioSeries]], [[MovieSeries]], [[BookSeries]], [[Periodical]] and [[VideoGameSeries]]. In each case, the [[hasPart]] / [[isPartOf]] properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.\n\nIt is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
 * @see https://schema.org/CreativeWorkSeries
 */
export const SCHEMA_ORG_CreativeWorkSeries =
  "https://schema.org/CreativeWorkSeries" as const;

/**
 * A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike [[ItemList]] which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as TV, radio and games).\n\nSpecific subtypes are available for describing [[TVSeries]], [[RadioSeries]], [[MovieSeries]], [[BookSeries]], [[Periodical]] and [[VideoGameSeries]]. In each case, the [[hasPart]] / [[isPartOf]] properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.\n\nIt is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
 * @see https://schema.org/CreativeWorkSeries
 */
export interface SchemaOrg_CreativeWorkSeries
  extends SchemaOrg_Series, SchemaOrg_CreativeWork {
  /**
   * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   * @see https://schema.org/endDate
   */
  endDate?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
   * @see https://schema.org/issn
   */
  issn?: Array<SchemaOrg_Text>;
  /**
   * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   * @see https://schema.org/startDate
   */
  startDate?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
}
