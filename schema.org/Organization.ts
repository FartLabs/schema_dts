// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** An organization such as a school, NGO, corporation, club, etc. */
export interface ClassOrganization extends ClassThing {
  /** The payment method(s) that are accepted in general by an organization, or for some specific demand or offer. */
  acceptedPaymentMethod: Array<{ "@id": string }>;
  /** For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication. */
  actionableFeedbackPolicy: Array<{ "@id": string }>;
  /** Physical address of the item. */
  address: Array<string | { "@id": string }>;
  /** The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService). */
  agentInteractionStatistic: Array<{ "@id": string }>;
  /** The overall rating, based on a collection of reviews or ratings, of the item. */
  aggregateRating: Array<{ "@id": string }>;
  /** Alumni of an organization. */
  alumni: Array<{ "@id": string }>;
  /** The geographic area where a service or offered item is provided. */
  areaServed: Array<string | { "@id": string }>;
  /** An award won by or for this item. */
  award: Array<string>;
  /** Awards won by or for this item. */
  awards: Array<string>;
  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
  brand: Array<{ "@id": string }>;
  /** A contact point for a person or organization. */
  contactPoint: Array<{ "@id": string }>;
  /** A contact point for a person or organization. */
  contactPoints: Array<{ "@id": string }>;
  /** For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors. */
  correctionsPolicy: Array<{ "@id": string }>;
  /** A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe. */
  department: Array<{ "@id": string }>;
  /** The date that this organization was dissolved. */
  dissolutionDate: Array<string>;
  /** Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data. */
  diversityPolicy: Array<{ "@id": string }>;
  /** For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported. */
  diversityStaffingReport: Array<{ "@id": string }>;
  /** The Dun & Bradstreet DUNS number for identifying an organization or business person. */
  duns: Array<string>;
  /** Email address. */
  email: Array<string>;
  /** Someone working for this organization. */
  employee: Array<{ "@id": string }>;
  /** People working for this organization. */
  employees: Array<{ "@id": string }>;
  /** Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization. */
  ethicsPolicy: Array<{ "@id": string }>;
  /** Upcoming or past event associated with this place, organization, or action. */
  event: Array<{ "@id": string }>;
  /** Upcoming or past events associated with this place or organization. */
  events: Array<{ "@id": string }>;
  /** The fax number. */
  faxNumber: Array<string>;
  /** A person who founded this organization. */
  founder: Array<{ "@id": string }>;
  /** A person who founded this organization. */
  founders: Array<{ "@id": string }>;
  /** The date that this organization was founded. */
  foundingDate: Array<string>;
  /** The place where the Organization was founded. */
  foundingLocation: Array<{ "@id": string }>;
  /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
  funder: Array<{ "@id": string }>;
  /** A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]]. */
  funding: Array<{ "@id": string }>;
  /** The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
  globalLocationNumber: Array<string>;
  /** Certification information about a product, organization, service, place, or person. */
  hasCertification: Array<{ "@id": string }>;
  /** A credential awarded to the Person or Organization. */
  hasCredential: Array<{ "@id": string }>;
  /** The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly. */
  hasGS1DigitalLink: Array<{ "@id": string }>;
  /** Specifies a MerchantReturnPolicy that may be applicable. */
  hasMerchantReturnPolicy: Array<{ "@id": string }>;
  /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
  hasOfferCatalog: Array<{ "@id": string }>;
  /** Points-of-Sales operated by the organization or person. */
  hasPOS: Array<{ "@id": string }>;
  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
  interactionStatistic: Array<{ "@id": string }>;
  /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
  isicV4: Array<string>;
  /** An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous. */
  iso6523Code: Array<string>;
  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property. */
  keywords: Array<string | { "@id": string }>;
  /** Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions. */
  knowsAbout: Array<string | { "@id": string }>;
  /** Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). */
  knowsLanguage: Array<string | { "@id": string }>;
  /** The official name of the organization, e.g. the registered company name. */
  legalName: Array<string>;
  /** An organization identifier that uniquely identifies a legal entity as defined in ISO 17442. */
  leiCode: Array<string>;
  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
  location: Array<string | { "@id": string }>;
  /** An associated logo. */
  logo: Array<{ "@id": string }>;
  /** A pointer to products or services offered by the organization or person. */
  makesOffer: Array<{ "@id": string }>;
  /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. */
  member: Array<{ "@id": string }>;
  /** An Organization (or ProgramMembership) to which this Person or Organization belongs. */
  memberOf: Array<{ "@id": string }>;
  /** A member of this organization. */
  members: Array<{ "@id": string }>;
  /** The North American Industry Classification System (NAICS) code for a particular organization or business person. */
  naics: Array<string>;
  /** nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business. */
  nonprofitStatus: Array<{ "@id": string }>;
  /** The number of employees in an organization, e.g. business. */
  numberOfEmployees: Array<{ "@id": string }>;
  /** For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable. */
  ownershipFundingInfo: Array<string | { "@id": string }>;
  /** Products owned by the organization or person. */
  owns: Array<{ "@id": string }>;
  /** The larger organization that this organization is a [[subOrganization]] of, if any. */
  parentOrganization: Array<{ "@id": string }>;
  /**
   * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
   *
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
   */
  publishingPrinciples: Array<{ "@id": string }>;
  /** A review of the item. */
  review: Array<{ "@id": string }>;
  /** Review of the item. */
  reviews: Array<{ "@id": string }>;
  /** A pointer to products or services sought by the organization or person (demand). */
  seeks: Array<{ "@id": string }>;
  /** The geographic area where the service is provided. */
  serviceArea: Array<{ "@id": string }>;
  /** A slogan or motto associated with the item. */
  slogan: Array<string>;
  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
  sponsor: Array<{ "@id": string }>;
  /** A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property. */
  subOrganization: Array<{ "@id": string }>;
  /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. */
  taxID: Array<string>;
  /** The telephone number. */
  telephone: Array<string>;
  /** For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required. */
  unnamedSourcesPolicy: Array<{ "@id": string }>;
  /** The Value-added Tax ID of the organization or person. */
  vatID: Array<string>;
}
