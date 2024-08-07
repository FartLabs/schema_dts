// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Article } from "labs/SchemaOrg_Article.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 * @see https://schema.org/TechArticle
 */
export const SCHEMA_ORG_TechArticle = "https://schema.org/TechArticle" as const;

/**
 * A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 * @see https://schema.org/TechArticle
 */
export interface SchemaOrg_TechArticle extends SchemaOrg_Article {
    /**
     * Prerequisites needed to fulfill steps in article.
     * @see https://schema.org/dependencies
     */
    dependencies: Array<SchemaOrg_Text>;
    /**
     * Proficiency needed for this content; expected values: 'Beginner', 'Expert'.
     * @see https://schema.org/proficiencyLevel
     */
    proficiencyLevel: Array<SchemaOrg_Text>;
}
