// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AlignmentObject } from "labs/SchemaOrg_AlignmentObject.ts";
import type { SchemaOrg_Course } from "labs/SchemaOrg_Course.ts";
import type { SchemaOrg_CourseInstance } from "labs/SchemaOrg_CourseInstance.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_DefinedTerm } from "labs/SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_EducationalOccupationalCredential } from "labs/SchemaOrg_EducationalOccupationalCredential.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_Language } from "labs/SchemaOrg_Language.ts";
import type { SchemaOrg_LearningResource } from "labs/SchemaOrg_LearningResource.ts";
import type { SchemaOrg_StructuredValue } from "labs/SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Syllabus } from "labs/SchemaOrg_Syllabus.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A description of an educational course which may be offered as distinct instances which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 * @see https://schema.org/Course
 */
export const SCHEMA_ORG_Course = "https://schema.org/Course" as const;

/**
 * A description of an educational course which may be offered as distinct instances which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 * @see https://schema.org/Course
 */
export interface SchemaOrg_Course extends SchemaOrg_LearningResource, SchemaOrg_CreativeWork {
    /**
     * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
     * @see https://schema.org/availableLanguage
     */
    availableLanguage: Array<SchemaOrg_Text | SchemaOrg_Language>;
    /**
     * The identifier for the [[Course]] used by the course [[provider]] (e.g. CS101 or 6.001).
     * @see https://schema.org/courseCode
     */
    courseCode: Array<SchemaOrg_Text>;
    /**
     * Requirements for taking the Course. May be completion of another [[Course]] or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using [[AlignmentObject]].
     * @see https://schema.org/coursePrerequisites
     */
    coursePrerequisites: Array<SchemaOrg_Text | SchemaOrg_AlignmentObject | SchemaOrg_Course>;
    /**
     * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
     * @see https://schema.org/educationalCredentialAwarded
     */
    educationalCredentialAwarded: Array<SchemaOrg_URL | SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text>;
    /**
     * A financial aid type or program which students may use to pay for tuition or fees associated with the program.
     * @see https://schema.org/financialAidEligible
     */
    financialAidEligible: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students.
     * @see https://schema.org/hasCourseInstance
     */
    hasCourseInstance: Array<SchemaOrg_CourseInstance>;
    /**
     * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
     * @see https://schema.org/numberOfCredits
     */
    numberOfCredits: Array<SchemaOrg_Integer | SchemaOrg_StructuredValue>;
    /**
     * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
     * @see https://schema.org/occupationalCredentialAwarded
     */
    occupationalCredentialAwarded: Array<SchemaOrg_URL | SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text>;
    /**
     * Indicates (typically several) Syllabus entities that lay out what each section of the overall course will cover.
     * @see https://schema.org/syllabusSections
     */
    syllabusSections: Array<SchemaOrg_Syllabus>;
    /**
     * The total number of students that have enrolled in the history of the course.
     * @see https://schema.org/totalHistoricalEnrollment
     */
    totalHistoricalEnrollment: Array<SchemaOrg_Integer>;
}
