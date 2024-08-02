// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A profession, may involve prolonged training and/or a formal qualification. */
export interface ClassOccupation extends ClassIntangible {
  /** Educational background needed for the position or Occupation. */
  educationRequirements: Array<string | { "@id": string }>;
  /** An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value. */
  estimatedSalary: Array<number | { "@id": string }>;
  /** Description of skills and experience needed for the position or Occupation. */
  experienceRequirements: Array<string | { "@id": string }>;
  /**  The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions. */
  occupationLocation: Array<{ "@id": string }>;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   */
  occupationalCategory: Array<string | { "@id": string }>;
  /** Specific qualifications required for this role or Occupation. */
  qualifications: Array<string | { "@id": string }>;
  /** Responsibilities associated with this role or Occupation. */
  responsibilities: Array<string>;
  /** A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation. */
  skills: Array<string | { "@id": string }>;
}
