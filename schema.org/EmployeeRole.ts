// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassOrganizationRole } from "./OrganizationRole.ts";

/** A subclass of OrganizationRole used to describe employee relationships. */
export interface ClassEmployeeRole extends ClassOrganizationRole {
  /** The base salary of the job or of an employee in an EmployeeRole. */
  baseSalary: Array<number | { "@id": string }>;
  /** The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217)) used for the main salary information in this job posting or for this employee. */
  salaryCurrency: Array<string>;
}
