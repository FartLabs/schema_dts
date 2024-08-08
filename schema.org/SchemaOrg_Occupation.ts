// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_EducationalOccupationalCredential } from "./SchemaOrg_EducationalOccupationalCredential.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_MonetaryAmountDistribution } from "./SchemaOrg_MonetaryAmountDistribution.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_OccupationalExperienceRequirements } from "./SchemaOrg_OccupationalExperienceRequirements.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A profession, may involve prolonged training and/or a formal qualification.
 * @see https://schema.org/Occupation
 */
export const SCHEMA_ORG_Occupation = "https://schema.org/Occupation" as const;

/**
 * A profession, may involve prolonged training and/or a formal qualification.
 * @see https://schema.org/Occupation
 */
export interface SchemaOrg_Occupation extends SchemaOrg_Intangible {
  /**
   * Educational background needed for the position or Occupation.
   * @see https://schema.org/educationRequirements
   */
  educationRequirements?: Array<
    SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text
  >;
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
   * Description of skills and experience needed for the position or Occupation.
   * @see https://schema.org/experienceRequirements
   */
  experienceRequirements?: Array<
    SchemaOrg_OccupationalExperienceRequirements | SchemaOrg_Text
  >;
  /**
   * The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.
   * @see https://schema.org/occupationLocation
   */
  occupationLocation?: Array<SchemaOrg_AdministrativeArea>;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   * @see https://schema.org/occupationalCategory
   */
  occupationalCategory?: Array<SchemaOrg_CategoryCode | SchemaOrg_Text>;
  /**
   * Specific qualifications required for this role or Occupation.
   * @see https://schema.org/qualifications
   */
  qualifications?: Array<
    SchemaOrg_EducationalOccupationalCredential | SchemaOrg_Text
  >;
  /**
   * Responsibilities associated with this role or Occupation.
   * @see https://schema.org/responsibilities
   */
  responsibilities?: Array<SchemaOrg_Text>;
  /**
   * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.
   * @see https://schema.org/skills
   */
  skills?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
}
