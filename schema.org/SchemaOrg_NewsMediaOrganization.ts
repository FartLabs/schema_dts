// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AboutPage } from "labs/SchemaOrg_AboutPage.ts";
import type { SchemaOrg_Article } from "labs/SchemaOrg_Article.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A News/Media organization such as a newspaper or TV station.
 * @see https://schema.org/NewsMediaOrganization
 */
export const SCHEMA_ORG_NewsMediaOrganization = "https://schema.org/NewsMediaOrganization" as const;

/**
 * A News/Media organization such as a newspaper or TV station.
 * @see https://schema.org/NewsMediaOrganization
 */
export interface SchemaOrg_NewsMediaOrganization extends SchemaOrg_Organization {
    /**
     * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
     * @see https://schema.org/actionableFeedbackPolicy
     */
    actionableFeedbackPolicy: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
     * @see https://schema.org/correctionsPolicy
     */
    correctionsPolicy: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
     * @see https://schema.org/diversityPolicy
     */
    diversityPolicy: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
     * @see https://schema.org/diversityStaffingReport
     */
    diversityStaffingReport: Array<SchemaOrg_Article | SchemaOrg_URL>;
    /**
     * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
     * @see https://schema.org/ethicsPolicy
     */
    ethicsPolicy: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * For a [[NewsMediaOrganization]], a link to the masthead page or a page listing top editorial management.
     * @see https://schema.org/masthead
     */
    masthead: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * For a [[NewsMediaOrganization]], a statement on coverage priorities, including any public agenda or stance on issues.
     * @see https://schema.org/missionCoveragePrioritiesPolicy
     */
    missionCoveragePrioritiesPolicy: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement explaining when authors of articles are not named in bylines.
     * @see https://schema.org/noBylinesPolicy
     */
    noBylinesPolicy: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
     * @see https://schema.org/ownershipFundingInfo
     */
    ownershipFundingInfo: Array<SchemaOrg_URL | SchemaOrg_AboutPage | SchemaOrg_CreativeWork | SchemaOrg_Text>;
    /**
     * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
     * @see https://schema.org/unnamedSourcesPolicy
     */
    unnamedSourcesPolicy: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * Disclosure about verification and fact-checking processes for a [[NewsMediaOrganization]] or other fact-checking [[Organization]].
     * @see https://schema.org/verificationFactCheckingPolicy
     */
    verificationFactCheckingPolicy: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
}
