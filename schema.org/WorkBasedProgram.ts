// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEducationalOccupationalProgram } from "./EducationalOccupationalProgram.ts";

/** A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs. */
export interface ClassWorkBasedProgram
  extends ClassEducationalOccupationalProgram {
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   */
  occupationalCategory: Array<string | { "@id": string }>;
  /** The estimated salary earned while in the program. */
  trainingSalary: Array<{ "@id": string }>;
}
