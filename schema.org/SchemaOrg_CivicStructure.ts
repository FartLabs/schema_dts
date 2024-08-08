// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A public structure, such as a town hall or concert hall.
 * @see https://schema.org/CivicStructure
 */
export const SCHEMA_ORG_CivicStructure =
  "https://schema.org/CivicStructure" as const;

/**
 * A public structure, such as a town hall or concert hall.
 * @see https://schema.org/CivicStructure
 */
export interface SchemaOrg_CivicStructure extends SchemaOrg_Place {
  /**
   * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
   * @see https://schema.org/openingHours
   */
  openingHours?: Array<SchemaOrg_Text>;
}
