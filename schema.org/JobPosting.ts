// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A listing that describes a job opening in a certain organization. */
export interface ClassJobPosting extends ClassIntangible {
  /** The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements. */
  applicantLocationRequirements: Array<{ "@id": string }>;
  /** Contact details for further information relevant to this job posting. */
  applicationContact: Array<{ "@id": string }>;
  /** The base salary of the job or of an employee in an EmployeeRole. */
  baseSalary: Array<number | { "@id": string }>;
  /** Description of benefits associated with the job. */
  benefits: Array<string>;
  /** Publication date of an online listing. */
  datePosted: Array<string>;
  /** Indicates whether an [[url]] that is associated with a [[JobPosting]] enables direct application for the job, via the posting website. A job posting is considered to have directApply of [[True]] if an application process for the specified job can be directly initiated via the url(s) given (noting that e.g. multiple internet domains might nevertheless be involved at an implementation level). A value of [[False]] is appropriate if there is no clear path to applying directly online for the specified job, navigating directly from the JobPosting url(s) supplied. */
  directApply: Array<boolean>;
  /** Educational background needed for the position or Occupation. */
  educationRequirements: Array<string | { "@id": string }>;
  /** The legal requirements such as citizenship, visa and other documentation required for an applicant to this job. */
  eligibilityToWorkRequirement: Array<string>;
  /** A description of the employer, career opportunities and work environment for this position. */
  employerOverview: Array<string>;
  /** Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship). */
  employmentType: Array<string>;
  /** Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed. */
  employmentUnit: Array<{ "@id": string }>;
  /** An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value. */
  estimatedSalary: Array<number | { "@id": string }>;
  /** Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient. */
  experienceInPlaceOfEducation: Array<boolean>;
  /** Description of skills and experience needed for the position or Occupation. */
  experienceRequirements: Array<string | { "@id": string }>;
  /** Organization or Person offering the job position. */
  hiringOrganization: Array<{ "@id": string }>;
  /** Description of bonus and commission compensation aspects of the job. */
  incentiveCompensation: Array<string>;
  /** Description of bonus and commission compensation aspects of the job. */
  incentives: Array<string>;
  /** The industry associated with the job position. */
  industry: Array<string | { "@id": string }>;
  /** Description of benefits associated with the job. */
  jobBenefits: Array<string>;
  /** An indicator as to whether a position is available for an immediate start. */
  jobImmediateStart: Array<boolean>;
  /** A (typically single) geographic location associated with the job position. */
  jobLocation: Array<{ "@id": string }>;
  /** A description of the job location (e.g. TELECOMMUTE for telecommute jobs). */
  jobLocationType: Array<string>;
  /** The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible. */
  jobStartDate: Array<string>;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   */
  occupationalCategory: Array<string | { "@id": string }>;
  /** A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term. */
  physicalRequirement: Array<string | { "@id": string }>;
  /** Specific qualifications required for this role or Occupation. */
  qualifications: Array<string | { "@id": string }>;
  /** The Occupation for the JobPosting. */
  relevantOccupation: Array<{ "@id": string }>;
  /** Responsibilities associated with this role or Occupation. */
  responsibilities: Array<string>;
  /** The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217)) used for the main salary information in this job posting or for this employee. */
  salaryCurrency: Array<string>;
  /** A description of any security clearance requirements of the job. */
  securityClearanceRequirement: Array<string | { "@id": string }>;
  /** A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term. */
  sensoryRequirement: Array<string | { "@id": string }>;
  /** A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation. */
  skills: Array<string | { "@id": string }>;
  /** Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc. */
  specialCommitments: Array<string>;
  /** The title of the job. */
  title: Array<string>;
  /** The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known. */
  totalJobOpenings: Array<{ "@id": string }>;
  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
  validThrough: Array<string>;
  /** The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm). */
  workHours: Array<string>;
}
