// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassLearningResource } from "./LearningResource.ts";
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A description of an educational course which may be offered as distinct instances which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners. */
export interface ClassCourse extends ClassLearningResource, ClassCreativeWork {
  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]. */
  availableLanguage: Array<string | { "@id": string }>;
  /** The identifier for the [[Course]] used by the course [[provider]] (e.g. CS101 or 6.001). */
  courseCode: Array<string>;
  /** Requirements for taking the Course. May be completion of another [[Course]] or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using [[AlignmentObject]]. */
  coursePrerequisites: Array<string | { "@id": string }>;
  /** A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program. */
  educationalCredentialAwarded: Array<string | { "@id": string }>;
  /** A financial aid type or program which students may use to pay for tuition or fees associated with the program. */
  financialAidEligible: Array<string | { "@id": string }>;
  /** An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students. */
  hasCourseInstance: Array<{ "@id": string }>;
  /** The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram. */
  numberOfCredits: Array<{ "@id": string }>;
  /** A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program. */
  occupationalCredentialAwarded: Array<string | { "@id": string }>;
  /** Indicates (typically several) Syllabus entities that lay out what each section of the overall course will cover. */
  syllabusSections: Array<{ "@id": string }>;
  /** The total number of students that have enrolled in the history of the course. */
  totalHistoricalEnrollment: Array<{ "@id": string }>;
}
