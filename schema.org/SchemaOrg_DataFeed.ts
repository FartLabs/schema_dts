// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DataFeedItem } from "./SchemaOrg_DataFeedItem.ts";
import type { SchemaOrg_Dataset } from "./SchemaOrg_Dataset.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";

/**
 * A single feed providing structured information about one or more entities or topics.
 * @see https://schema.org/DataFeed
 */
export const SCHEMA_ORG_DataFeed = "https://schema.org/DataFeed" as const;

/**
 * A single feed providing structured information about one or more entities or topics.
 * @see https://schema.org/DataFeed
 */
export interface SchemaOrg_DataFeed extends SchemaOrg_Dataset {
    /**
     * An item within a data feed. Data feeds may have many elements.
     * @see https://schema.org/dataFeedElement
     */
    dataFeedElement?: Array<SchemaOrg_Thing | SchemaOrg_DataFeedItem | SchemaOrg_Text>;
}
