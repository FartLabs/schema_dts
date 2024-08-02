// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassOrganization } from "./Organization.ts";

/** A News/Media organization such as a newspaper or TV station. */
export interface ClassNewsMediaOrganization extends ClassOrganization {
  /** For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication. */
  actionableFeedbackPolicy: Array<{ "@id": string }>;
  /** For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors. */
  correctionsPolicy: Array<{ "@id": string }>;
  /** Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data. */
  diversityPolicy: Array<{ "@id": string }>;
  /** For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported. */
  diversityStaffingReport: Array<{ "@id": string }>;
  /** Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization. */
  ethicsPolicy: Array<{ "@id": string }>;
  /** For a [[NewsMediaOrganization]], a link to the masthead page or a page listing top editorial management. */
  masthead: Array<{ "@id": string }>;
  /** For a [[NewsMediaOrganization]], a statement on coverage priorities, including any public agenda or stance on issues. */
  missionCoveragePrioritiesPolicy: Array<{ "@id": string }>;
  /** For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement explaining when authors of articles are not named in bylines. */
  noBylinesPolicy: Array<{ "@id": string }>;
  /** For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable. */
  ownershipFundingInfo: Array<string | { "@id": string }>;
  /** For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required. */
  unnamedSourcesPolicy: Array<{ "@id": string }>;
  /** Disclosure about verification and fact-checking processes for a [[NewsMediaOrganization]] or other fact-checking [[Organization]]. */
  verificationFactCheckingPolicy: Array<{ "@id": string }>;
}
