// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AlignmentObject } from "./SchemaOrg_AlignmentObject.ts";
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_Course } from "./SchemaOrg_Course.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DayOfWeek } from "./SchemaOrg_DayOfWeek.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Demand } from "./SchemaOrg_Demand.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_EducationalOccupationalCredential } from "./SchemaOrg_EducationalOccupationalCredential.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_MonetaryAmountDistribution } from "./SchemaOrg_MonetaryAmountDistribution.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Offer } from "./SchemaOrg_Offer.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree).
 * @see https://schema.org/EducationalOccupationalProgram
 */
export const SCHEMA_ORG_EducationalOccupationalProgram = "https://schema.org/EducationalOccupationalProgram" as const;

/**
 * A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree).
 * @see https://schema.org/EducationalOccupationalProgram
 */
export interface SchemaOrg_EducationalOccupationalProgram extends SchemaOrg_Intangible {
    /**
     * The date at which the program stops collecting applications for the next enrollment cycle.
     * @see https://schema.org/applicationDeadline
     */
    applicationDeadline?: Array<SchemaOrg_Date>;
    /**
     * The date at which the program begins collecting applications for the next enrollment cycle.
     * @see https://schema.org/applicationStartDate
     */
    applicationStartDate?: Array<SchemaOrg_Date>;
    /**
     * The day of the week for which these opening hours are valid.
     * @see https://schema.org/dayOfWeek
     */
    dayOfWeek?: Array<SchemaOrg_DayOfWeek>;
    /**
     * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
     * @see https://schema.org/educationalCredentialAwarded
     */
    educationalCredentialAwarded?: Array<SchemaOrg_URL | SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text>;
    /**
     * Similar to courseMode, the medium or means of delivery of the program as a whole. The value may either be a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
     * @see https://schema.org/educationalProgramMode
     */
    educationalProgramMode?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * @see https://schema.org/endDate
     */
    endDate?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * A financial aid type or program which students may use to pay for tuition or fees associated with the program.
     * @see https://schema.org/financialAidEligible
     */
    financialAidEligible?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program.
     * @see https://schema.org/hasCourse
     */
    hasCourse?: Array<SchemaOrg_Course>;
    /**
     * The maximum number of students who may be enrolled in the program.
     * @see https://schema.org/maximumEnrollment
     */
    maximumEnrollment?: Array<SchemaOrg_Integer>;
    /**
     * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
     * @see https://schema.org/numberOfCredits
     */
    numberOfCredits?: Array<SchemaOrg_Integer | SchemaOrg_StructuredValue>;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     * @see https://schema.org/occupationalCategory
     */
    occupationalCategory?: Array<SchemaOrg_CategoryCode | SchemaOrg_Text>;
    /**
     * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
     * @see https://schema.org/occupationalCredentialAwarded
     */
    occupationalCredentialAwarded?: Array<SchemaOrg_URL | SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text>;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     * @see https://schema.org/offers
     */
    offers?: Array<SchemaOrg_Demand | SchemaOrg_Offer>;
    /**
     * Prerequisites for enrolling in the program.
     * @see https://schema.org/programPrerequisites
     */
    programPrerequisites?: Array<SchemaOrg_Course | SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text | SchemaOrg_AlignmentObject>;
    /**
     * The type of educational or occupational program. For example, classroom, internship, alternance, etc.
     * @see https://schema.org/programType
     */
    programType?: Array<SchemaOrg_DefinedTerm | SchemaOrg_Text>;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * @see https://schema.org/provider
     */
    provider?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The expected salary upon completing the training.
     * @see https://schema.org/salaryUponCompletion
     */
    salaryUponCompletion?: Array<SchemaOrg_MonetaryAmountDistribution>;
    /**
     * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * @see https://schema.org/startDate
     */
    startDate?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term.
     * @see https://schema.org/termDuration
     */
    termDuration?: Array<SchemaOrg_Duration>;
    /**
     * The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2.
     * @see https://schema.org/termsPerYear
     */
    termsPerYear?: Array<SchemaOrg_Number>;
    /**
     * The time of day the program normally runs. For example, "evenings".
     * @see https://schema.org/timeOfDay
     */
    timeOfDay?: Array<SchemaOrg_Text>;
    /**
     * The expected length of time to complete the program if attending full-time.
     * @see https://schema.org/timeToComplete
     */
    timeToComplete?: Array<SchemaOrg_Duration>;
    /**
     * The estimated salary earned while in the program.
     * @see https://schema.org/trainingSalary
     */
    trainingSalary?: Array<SchemaOrg_MonetaryAmountDistribution>;
    /**
     * The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution.
     * @see https://schema.org/typicalCreditsPerTerm
     */
    typicalCreditsPerTerm?: Array<SchemaOrg_StructuredValue | SchemaOrg_Integer>;
}
