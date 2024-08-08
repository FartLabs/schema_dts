// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_LegalForceStatus } from "./SchemaOrg_LegalForceStatus.ts";
import type { SchemaOrg_Legislation } from "./SchemaOrg_Legislation.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article).
 * @see https://schema.org/Legislation
 */
export const SCHEMA_ORG_Legislation = "https://schema.org/Legislation" as const;

/**
 * A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article).
 * @see https://schema.org/Legislation
 */
export interface SchemaOrg_Legislation extends SchemaOrg_CreativeWork {
  /**
   * Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based.
   * @see https://schema.org/jurisdiction
   */
  jurisdiction?: Array<SchemaOrg_AdministrativeArea | SchemaOrg_Text>;
  /**
   * Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the <a href="/legislationTransposes">legislationTransposes</a> property. For example an informative consolidated law of a European Union's member state "applies" the consolidated version of the European Directive implemented in it.
   * @see https://schema.org/legislationApplies
   */
  legislationApplies?: Array<SchemaOrg_Legislation>;
  /**
   * Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the <a href="/legislationConsolidates">legislationConsolidates</a> property.
   * @see https://schema.org/legislationChanges
   */
  legislationChanges?: Array<SchemaOrg_Legislation>;
  /**
   * Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change.
   * @see https://schema.org/legislationConsolidates
   */
  legislationConsolidates?: Array<SchemaOrg_Legislation>;
  /**
   * The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force.
   * @see https://schema.org/legislationDate
   */
  legislationDate?: Array<SchemaOrg_Date>;
  /**
   * The point-in-time at which the provided description of the legislation is valid (e.g.: when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the "National Insurance Contributions Act 2015")
   * @see https://schema.org/legislationDateVersion
   */
  legislationDateVersion?: Array<SchemaOrg_Date>;
  /**
   * An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex.
   * @see https://schema.org/legislationIdentifier
   */
  legislationIdentifier?: Array<SchemaOrg_Text | SchemaOrg_URL>;
  /**
   * The jurisdiction from which the legislation originates.
   * @see https://schema.org/legislationJurisdiction
   */
  legislationJurisdiction?: Array<
    SchemaOrg_AdministrativeArea | SchemaOrg_Text
  >;
  /**
   * Whether the legislation is currently in force, not in force, or partially in force.
   * @see https://schema.org/legislationLegalForce
   */
  legislationLegalForce?: Array<SchemaOrg_LegalForceStatus>;
  /**
   * The person or organization that originally passed or made the law: typically parliament (for primary legislation) or government (for secondary legislation). This indicates the "legal author" of the law, as opposed to its physical author.
   * @see https://schema.org/legislationPassedBy
   */
  legislationPassedBy?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published.
   * @see https://schema.org/legislationResponsible
   */
  legislationResponsible?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations.
   * @see https://schema.org/legislationTransposes
   */
  legislationTransposes?: Array<SchemaOrg_Legislation>;
  /**
   * The type of the legislation. Examples of values are "law", "act", "directive", "decree", "regulation", "statutory instrument", "loi organique", "règlement grand-ducal", etc., depending on the country.
   * @see https://schema.org/legislationType
   */
  legislationType?: Array<SchemaOrg_CategoryCode | SchemaOrg_Text>;
}
