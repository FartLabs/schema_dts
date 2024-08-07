// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MonetaryAmount } from "labs/SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_OrganizationRole } from "labs/SchemaOrg_OrganizationRole.ts";
import type { SchemaOrg_PriceSpecification } from "labs/SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A subclass of OrganizationRole used to describe employee relationships.
 * @see https://schema.org/EmployeeRole
 */
export const SCHEMA_ORG_EmployeeRole = "https://schema.org/EmployeeRole" as const;

/**
 * A subclass of OrganizationRole used to describe employee relationships.
 * @see https://schema.org/EmployeeRole
 */
export interface SchemaOrg_EmployeeRole extends SchemaOrg_OrganizationRole {
    /**
     * The base salary of the job or of an employee in an EmployeeRole.
     * @see https://schema.org/baseSalary
     */
    baseSalary: Array<SchemaOrg_PriceSpecification | SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
    /**
     * The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217)) used for the main salary information in this job posting or for this employee.
     * @see https://schema.org/salaryCurrency
     */
    salaryCurrency: Array<SchemaOrg_Text>;
}
