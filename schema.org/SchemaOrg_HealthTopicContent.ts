// DO NOT EDIT: This file is generated.
import type { SchemaOrg_HealthAspectEnumeration } from "./SchemaOrg_HealthAspectEnumeration.ts";
import type { SchemaOrg_WebContent } from "./SchemaOrg_WebContent.ts";

/**
 * [[HealthTopicContent]] is [[WebContent]] that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of [[WebContent]] (and hence [[HealthTopicContent]]) can be related using [[hasPart]] / [[isPartOf]] where there is some kind of content hierarchy, and their content described with [[about]] and [[mentions]] e.g. building upon the existing [[MedicalCondition]] vocabulary.
 * @see https://schema.org/HealthTopicContent
 */
export const SCHEMA_ORG_HealthTopicContent =
  "https://schema.org/HealthTopicContent" as const;

/**
 * [[HealthTopicContent]] is [[WebContent]] that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of [[WebContent]] (and hence [[HealthTopicContent]]) can be related using [[hasPart]] / [[isPartOf]] where there is some kind of content hierarchy, and their content described with [[about]] and [[mentions]] e.g. building upon the existing [[MedicalCondition]] vocabulary.
 * @see https://schema.org/HealthTopicContent
 */
export interface SchemaOrg_HealthTopicContent extends SchemaOrg_WebContent {
  /**
   * Indicates the aspect or aspects specifically addressed in some [[HealthTopicContent]]. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects.
   * @see https://schema.org/hasHealthAspect
   */
  hasHealthAspect?: Array<SchemaOrg_HealthAspectEnumeration>;
}
