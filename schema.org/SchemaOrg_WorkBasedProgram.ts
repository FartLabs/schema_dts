// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_EducationalOccupationalProgram } from "./SchemaOrg_EducationalOccupationalProgram.ts";
import type { SchemaOrg_MonetaryAmountDistribution } from "./SchemaOrg_MonetaryAmountDistribution.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs.
 * @see https://schema.org/WorkBasedProgram
 */
export const SCHEMA_ORG_WorkBasedProgram =
  "https://schema.org/WorkBasedProgram" as const;

/**
 * A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs.
 * @see https://schema.org/WorkBasedProgram
 */
export interface SchemaOrg_WorkBasedProgram
  extends SchemaOrg_EducationalOccupationalProgram {
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   * @see https://schema.org/occupationalCategory
   */
  occupationalCategory?: Array<SchemaOrg_CategoryCode | SchemaOrg_Text>;
  /**
   * The estimated salary earned while in the program.
   * @see https://schema.org/trainingSalary
   */
  trainingSalary?: Array<SchemaOrg_MonetaryAmountDistribution>;
}
