// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/**
 * The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.
 *
 * [[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.
 *
 * [[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
 */
export interface ClassLearningResource extends ClassCreativeWork {
  /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
  assesses: Array<string | { "@id": string }>;
  /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
  competencyRequired: Array<string | { "@id": string }>;
  /**
   * An alignment to an established educational framework.
   *
   * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
   */
  educationalAlignment: Array<{ "@id": string }>;
  /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
  educationalLevel: Array<string | { "@id": string }>;
  /** The purpose of a work in the context of education; for example, 'assignment', 'group work'. */
  educationalUse: Array<string | { "@id": string }>;
  /** The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. */
  learningResourceType: Array<string | { "@id": string }>;
  /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
  teaches: Array<string | { "@id": string }>;
}
