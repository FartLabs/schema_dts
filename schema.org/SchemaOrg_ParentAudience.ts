// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_PeopleAudience } from "./SchemaOrg_PeopleAudience.ts";

/**
 * A set of characteristics describing parents, who can be interested in viewing some content.
 * @see https://schema.org/ParentAudience
 */
export const SCHEMA_ORG_ParentAudience = "https://schema.org/ParentAudience" as const;

/**
 * A set of characteristics describing parents, who can be interested in viewing some content.
 * @see https://schema.org/ParentAudience
 */
export interface SchemaOrg_ParentAudience extends SchemaOrg_PeopleAudience {
    /**
     * Maximal age of the child.
     * @see https://schema.org/childMaxAge
     */
    childMaxAge?: Array<SchemaOrg_Number>;
    /**
     * Minimal age of the child.
     * @see https://schema.org/childMinAge
     */
    childMinAge?: Array<SchemaOrg_Number>;
}
