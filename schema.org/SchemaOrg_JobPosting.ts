// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_EducationalOccupationalCredential } from "./SchemaOrg_EducationalOccupationalCredential.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_MonetaryAmountDistribution } from "./SchemaOrg_MonetaryAmountDistribution.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Occupation } from "./SchemaOrg_Occupation.ts";
import type { SchemaOrg_OccupationalExperienceRequirements } from "./SchemaOrg_OccupationalExperienceRequirements.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PriceSpecification } from "./SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A listing that describes a job opening in a certain organization.
 * @see https://schema.org/JobPosting
 */
export const SCHEMA_ORG_JobPosting = "https://schema.org/JobPosting" as const;

/**
 * A listing that describes a job opening in a certain organization.
 * @see https://schema.org/JobPosting
 */
export interface SchemaOrg_JobPosting extends SchemaOrg_Intangible {
  /**
   * The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements.
   * @see https://schema.org/applicantLocationRequirements
   */
  applicantLocationRequirements?: Array<SchemaOrg_AdministrativeArea>;
  /**
   * Contact details for further information relevant to this job posting.
   * @see https://schema.org/applicationContact
   */
  applicationContact?: Array<SchemaOrg_ContactPoint>;
  /**
   * The base salary of the job or of an employee in an EmployeeRole.
   * @see https://schema.org/baseSalary
   */
  baseSalary?: Array<
    SchemaOrg_PriceSpecification | SchemaOrg_MonetaryAmount | SchemaOrg_Number
  >;
  /**
   * Description of benefits associated with the job.
   * @see https://schema.org/benefits
   */
  benefits?: Array<SchemaOrg_Text>;
  /**
   * Publication date of an online listing.
   * @see https://schema.org/datePosted
   */
  datePosted?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * Indicates whether an [[url]] that is associated with a [[JobPosting]] enables direct application for the job, via the posting website. A job posting is considered to have directApply of [[True]] if an application process for the specified job can be directly initiated via the url(s) given (noting that e.g. multiple internet domains might nevertheless be involved at an implementation level). A value of [[False]] is appropriate if there is no clear path to applying directly online for the specified job, navigating directly from the JobPosting url(s) supplied.
   * @see https://schema.org/directApply
   */
  directApply?: Array<SchemaOrg_Boolean>;
  /**
   * Educational background needed for the position or Occupation.
   * @see https://schema.org/educationRequirements
   */
  educationRequirements?: Array<
    SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text
  >;
  /**
   * The legal requirements such as citizenship, visa and other documentation required for an applicant to this job.
   * @see https://schema.org/eligibilityToWorkRequirement
   */
  eligibilityToWorkRequirement?: Array<SchemaOrg_Text>;
  /**
   * A description of the employer, career opportunities and work environment for this position.
   * @see https://schema.org/employerOverview
   */
  employerOverview?: Array<SchemaOrg_Text>;
  /**
   * Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).
   * @see https://schema.org/employmentType
   */
  employmentType?: Array<SchemaOrg_Text>;
  /**
   * Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed.
   * @see https://schema.org/employmentUnit
   */
  employmentUnit?: Array<SchemaOrg_Organization>;
  /**
   * An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
   * @see https://schema.org/estimatedSalary
   */
  estimatedSalary?: Array<
    | SchemaOrg_MonetaryAmountDistribution
    | SchemaOrg_Number
    | SchemaOrg_MonetaryAmount
  >;
  /**
   * Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient.
   * @see https://schema.org/experienceInPlaceOfEducation
   */
  experienceInPlaceOfEducation?: Array<SchemaOrg_Boolean>;
  /**
   * Description of skills and experience needed for the position or Occupation.
   * @see https://schema.org/experienceRequirements
   */
  experienceRequirements?: Array<
    SchemaOrg_OccupationalExperienceRequirements | SchemaOrg_Text
  >;
  /**
   * Organization or Person offering the job position.
   * @see https://schema.org/hiringOrganization
   */
  hiringOrganization?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * Description of bonus and commission compensation aspects of the job.
   * @see https://schema.org/incentiveCompensation
   */
  incentiveCompensation?: Array<SchemaOrg_Text>;
  /**
   * Description of bonus and commission compensation aspects of the job.
   * @see https://schema.org/incentives
   */
  incentives?: Array<SchemaOrg_Text>;
  /**
   * The industry associated with the job position.
   * @see https://schema.org/industry
   */
  industry?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
  /**
   * Description of benefits associated with the job.
   * @see https://schema.org/jobBenefits
   */
  jobBenefits?: Array<SchemaOrg_Text>;
  /**
   * An indicator as to whether a position is available for an immediate start.
   * @see https://schema.org/jobImmediateStart
   */
  jobImmediateStart?: Array<SchemaOrg_Boolean>;
  /**
   * A (typically single) geographic location associated with the job position.
   * @see https://schema.org/jobLocation
   */
  jobLocation?: Array<SchemaOrg_Place>;
  /**
   * A description of the job location (e.g. TELECOMMUTE for telecommute jobs).
   * @see https://schema.org/jobLocationType
   */
  jobLocationType?: Array<SchemaOrg_Text>;
  /**
   * The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible.
   * @see https://schema.org/jobStartDate
   */
  jobStartDate?: Array<SchemaOrg_Date | SchemaOrg_Text>;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   * @see https://schema.org/occupationalCategory
   */
  occupationalCategory?: Array<SchemaOrg_CategoryCode | SchemaOrg_Text>;
  /**
   * A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
   * @see https://schema.org/physicalRequirement
   */
  physicalRequirement?: Array<
    SchemaOrg_URL | SchemaOrg_Text | SchemaOrg_DefinedTerm
  >;
  /**
   * Specific qualifications required for this role or Occupation.
   * @see https://schema.org/qualifications
   */
  qualifications?: Array<
    SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text
  >;
  /**
   * The Occupation for the JobPosting.
   * @see https://schema.org/relevantOccupation
   */
  relevantOccupation?: Array<SchemaOrg_Occupation>;
  /**
   * Responsibilities associated with this role or Occupation.
   * @see https://schema.org/responsibilities
   */
  responsibilities?: Array<SchemaOrg_Text>;
  /**
   * The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217)) used for the main salary information in this job posting or for this employee.
   * @see https://schema.org/salaryCurrency
   */
  salaryCurrency?: Array<SchemaOrg_Text>;
  /**
   * A description of any security clearance requirements of the job.
   * @see https://schema.org/securityClearanceRequirement
   */
  securityClearanceRequirement?: Array<SchemaOrg_URL | SchemaOrg_Text>;
  /**
   * A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
   * @see https://schema.org/sensoryRequirement
   */
  sensoryRequirement?: Array<
    SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL
  >;
  /**
   * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.
   * @see https://schema.org/skills
   */
  skills?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
  /**
   * Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.
   * @see https://schema.org/specialCommitments
   */
  specialCommitments?: Array<SchemaOrg_Text>;
  /**
   * The title of the job.
   * @see https://schema.org/title
   */
  title?: Array<SchemaOrg_Text>;
  /**
   * The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known.
   * @see https://schema.org/totalJobOpenings
   */
  totalJobOpenings?: Array<SchemaOrg_Integer>;
  /**
   * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   * @see https://schema.org/validThrough
   */
  validThrough?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).
   * @see https://schema.org/workHours
   */
  workHours?: Array<SchemaOrg_Text>;
}
