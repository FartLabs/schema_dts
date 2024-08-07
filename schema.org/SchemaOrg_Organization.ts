// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AboutPage } from "labs/SchemaOrg_AboutPage.ts";
import type { SchemaOrg_AdministrativeArea } from "labs/SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_AggregateRating } from "labs/SchemaOrg_AggregateRating.ts";
import type { SchemaOrg_Article } from "labs/SchemaOrg_Article.ts";
import type { SchemaOrg_Brand } from "labs/SchemaOrg_Brand.ts";
import type { SchemaOrg_Certification } from "labs/SchemaOrg_Certification.ts";
import type { SchemaOrg_ContactPoint } from "labs/SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DefinedTerm } from "labs/SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Demand } from "labs/SchemaOrg_Demand.ts";
import type { SchemaOrg_EducationalOccupationalCredential } from "labs/SchemaOrg_EducationalOccupationalCredential.ts";
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";
import type { SchemaOrg_GeoShape } from "labs/SchemaOrg_GeoShape.ts";
import type { SchemaOrg_Grant } from "labs/SchemaOrg_Grant.ts";
import type { SchemaOrg_ImageObject } from "labs/SchemaOrg_ImageObject.ts";
import type { SchemaOrg_InteractionCounter } from "labs/SchemaOrg_InteractionCounter.ts";
import type { SchemaOrg_Language } from "labs/SchemaOrg_Language.ts";
import type { SchemaOrg_LoanOrCredit } from "labs/SchemaOrg_LoanOrCredit.ts";
import type { SchemaOrg_MerchantReturnPolicy } from "labs/SchemaOrg_MerchantReturnPolicy.ts";
import type { SchemaOrg_NonprofitType } from "labs/SchemaOrg_NonprofitType.ts";
import type { SchemaOrg_Offer } from "labs/SchemaOrg_Offer.ts";
import type { SchemaOrg_OfferCatalog } from "labs/SchemaOrg_OfferCatalog.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_OwnershipInfo } from "labs/SchemaOrg_OwnershipInfo.ts";
import type { SchemaOrg_PaymentMethod } from "labs/SchemaOrg_PaymentMethod.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "labs/SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "labs/SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_ProgramMembership } from "labs/SchemaOrg_ProgramMembership.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Review } from "labs/SchemaOrg_Review.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";
import type { SchemaOrg_VirtualLocation } from "labs/SchemaOrg_VirtualLocation.ts";

/**
 * An organization such as a school, NGO, corporation, club, etc.
 * @see https://schema.org/Organization
 */
export const SCHEMA_ORG_Organization = "https://schema.org/Organization" as const;

/**
 * An organization such as a school, NGO, corporation, club, etc.
 * @see https://schema.org/Organization
 */
export interface SchemaOrg_Organization extends SchemaOrg_Thing {
    /**
     * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
     * @see https://schema.org/acceptedPaymentMethod
     */
    acceptedPaymentMethod: Array<SchemaOrg_PaymentMethod | SchemaOrg_LoanOrCredit>;
    /**
     * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
     * @see https://schema.org/actionableFeedbackPolicy
     */
    actionableFeedbackPolicy: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * Physical address of the item.
     * @see https://schema.org/address
     */
    address: Array<SchemaOrg_PostalAddress | SchemaOrg_Text>;
    /**
     * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
     * @see https://schema.org/agentInteractionStatistic
     */
    agentInteractionStatistic: Array<SchemaOrg_InteractionCounter>;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     * @see https://schema.org/aggregateRating
     */
    aggregateRating: Array<SchemaOrg_AggregateRating>;
    /**
     * Alumni of an organization.
     * @see https://schema.org/alumni
     */
    alumni: Array<SchemaOrg_Person>;
    /**
     * The geographic area where a service or offered item is provided.
     * @see https://schema.org/areaServed
     */
    areaServed: Array<SchemaOrg_Place | SchemaOrg_AdministrativeArea | SchemaOrg_GeoShape | SchemaOrg_Text>;
    /**
     * An award won by or for this item.
     * @see https://schema.org/award
     */
    award: Array<SchemaOrg_Text>;
    /**
     * Awards won by or for this item.
     * @see https://schema.org/awards
     */
    awards: Array<SchemaOrg_Text>;
    /**
     * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
     * @see https://schema.org/brand
     */
    brand: Array<SchemaOrg_Brand | SchemaOrg_Organization>;
    /**
     * A contact point for a person or organization.
     * @see https://schema.org/contactPoint
     */
    contactPoint: Array<SchemaOrg_ContactPoint>;
    /**
     * A contact point for a person or organization.
     * @see https://schema.org/contactPoints
     */
    contactPoints: Array<SchemaOrg_ContactPoint>;
    /**
     * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
     * @see https://schema.org/correctionsPolicy
     */
    correctionsPolicy: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
     * @see https://schema.org/department
     */
    department: Array<SchemaOrg_Organization>;
    /**
     * The date that this organization was dissolved.
     * @see https://schema.org/dissolutionDate
     */
    dissolutionDate: Array<SchemaOrg_Date>;
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
     * The Dun & Bradstreet DUNS number for identifying an organization or business person.
     * @see https://schema.org/duns
     */
    duns: Array<SchemaOrg_Text>;
    /**
     * Email address.
     * @see https://schema.org/email
     */
    email: Array<SchemaOrg_Text>;
    /**
     * Someone working for this organization.
     * @see https://schema.org/employee
     */
    employee: Array<SchemaOrg_Person>;
    /**
     * People working for this organization.
     * @see https://schema.org/employees
     */
    employees: Array<SchemaOrg_Person>;
    /**
     * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
     * @see https://schema.org/ethicsPolicy
     */
    ethicsPolicy: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * Upcoming or past event associated with this place, organization, or action.
     * @see https://schema.org/event
     */
    event: Array<SchemaOrg_Event>;
    /**
     * Upcoming or past events associated with this place or organization.
     * @see https://schema.org/events
     */
    events: Array<SchemaOrg_Event>;
    /**
     * The fax number.
     * @see https://schema.org/faxNumber
     */
    faxNumber: Array<SchemaOrg_Text>;
    /**
     * A person who founded this organization.
     * @see https://schema.org/founder
     */
    founder: Array<SchemaOrg_Person>;
    /**
     * A person who founded this organization.
     * @see https://schema.org/founders
     */
    founders: Array<SchemaOrg_Person>;
    /**
     * The date that this organization was founded.
     * @see https://schema.org/foundingDate
     */
    foundingDate: Array<SchemaOrg_Date>;
    /**
     * The place where the Organization was founded.
     * @see https://schema.org/foundingLocation
     */
    foundingLocation: Array<SchemaOrg_Place>;
    /**
     * A person or organization that supports (sponsors) something through some kind of financial contribution.
     * @see https://schema.org/funder
     */
    funder: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
     * @see https://schema.org/funding
     */
    funding: Array<SchemaOrg_Grant>;
    /**
     * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
     * @see https://schema.org/globalLocationNumber
     */
    globalLocationNumber: Array<SchemaOrg_Text>;
    /**
     * Certification information about a product, organization, service, place, or person.
     * @see https://schema.org/hasCertification
     */
    hasCertification: Array<SchemaOrg_Certification>;
    /**
     * A credential awarded to the Person or Organization.
     * @see https://schema.org/hasCredential
     */
    hasCredential: Array<SchemaOrg_EducationalOccupationalCredential>;
    /**
     * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
     * @see https://schema.org/hasGS1DigitalLink
     */
    hasGS1DigitalLink: Array<SchemaOrg_URL>;
    /**
     * Specifies a MerchantReturnPolicy that may be applicable.
     * @see https://schema.org/hasMerchantReturnPolicy
     */
    hasMerchantReturnPolicy: Array<SchemaOrg_MerchantReturnPolicy>;
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or Service.
     * @see https://schema.org/hasOfferCatalog
     */
    hasOfferCatalog: Array<SchemaOrg_OfferCatalog>;
    /**
     * Points-of-Sales operated by the organization or person.
     * @see https://schema.org/hasPOS
     */
    hasPOS: Array<SchemaOrg_Place>;
    /**
     * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
     * @see https://schema.org/interactionStatistic
     */
    interactionStatistic: Array<SchemaOrg_InteractionCounter>;
    /**
     * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     * @see https://schema.org/isicV4
     */
    isicV4: Array<SchemaOrg_Text>;
    /**
     * An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.
     * @see https://schema.org/iso6523Code
     */
    iso6523Code: Array<SchemaOrg_Text>;
    /**
     * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
     * @see https://schema.org/keywords
     */
    keywords: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL>;
    /**
     * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
     * @see https://schema.org/knowsAbout
     */
    knowsAbout: Array<SchemaOrg_Text | SchemaOrg_URL | SchemaOrg_Thing>;
    /**
     * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
     * @see https://schema.org/knowsLanguage
     */
    knowsLanguage: Array<SchemaOrg_Text | SchemaOrg_Language>;
    /**
     * The official name of the organization, e.g. the registered company name.
     * @see https://schema.org/legalName
     */
    legalName: Array<SchemaOrg_Text>;
    /**
     * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
     * @see https://schema.org/leiCode
     */
    leiCode: Array<SchemaOrg_Text>;
    /**
     * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
     * @see https://schema.org/location
     */
    location: Array<SchemaOrg_Text | SchemaOrg_VirtualLocation | SchemaOrg_Place | SchemaOrg_PostalAddress>;
    /**
     * An associated logo.
     * @see https://schema.org/logo
     */
    logo: Array<SchemaOrg_ImageObject | SchemaOrg_URL>;
    /**
     * A pointer to products or services offered by the organization or person.
     * @see https://schema.org/makesOffer
     */
    makesOffer: Array<SchemaOrg_Offer>;
    /**
     * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
     * @see https://schema.org/member
     */
    member: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     * @see https://schema.org/memberOf
     */
    memberOf: Array<SchemaOrg_Organization | SchemaOrg_ProgramMembership>;
    /**
     * A member of this organization.
     * @see https://schema.org/members
     */
    members: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The North American Industry Classification System (NAICS) code for a particular organization or business person.
     * @see https://schema.org/naics
     */
    naics: Array<SchemaOrg_Text>;
    /**
     * nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.
     * @see https://schema.org/nonprofitStatus
     */
    nonprofitStatus: Array<SchemaOrg_NonprofitType>;
    /**
     * The number of employees in an organization, e.g. business.
     * @see https://schema.org/numberOfEmployees
     */
    numberOfEmployees: Array<SchemaOrg_QuantitativeValue>;
    /**
     * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
     * @see https://schema.org/ownershipFundingInfo
     */
    ownershipFundingInfo: Array<SchemaOrg_URL | SchemaOrg_AboutPage | SchemaOrg_CreativeWork | SchemaOrg_Text>;
    /**
     * Products owned by the organization or person.
     * @see https://schema.org/owns
     */
    owns: Array<SchemaOrg_OwnershipInfo | SchemaOrg_Product>;
    /**
     * The larger organization that this organization is a [[subOrganization]] of, if any.
     * @see https://schema.org/parentOrganization
     */
    parentOrganization: Array<SchemaOrg_Organization>;
    /**
     * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
     * @see https://schema.org/publishingPrinciples
     */
    publishingPrinciples: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * A review of the item.
     * @see https://schema.org/review
     */
    review: Array<SchemaOrg_Review>;
    /**
     * Review of the item.
     * @see https://schema.org/reviews
     */
    reviews: Array<SchemaOrg_Review>;
    /**
     * A pointer to products or services sought by the organization or person (demand).
     * @see https://schema.org/seeks
     */
    seeks: Array<SchemaOrg_Demand>;
    /**
     * The geographic area where the service is provided.
     * @see https://schema.org/serviceArea
     */
    serviceArea: Array<SchemaOrg_AdministrativeArea | SchemaOrg_GeoShape | SchemaOrg_Place>;
    /**
     * A slogan or motto associated with the item.
     * @see https://schema.org/slogan
     */
    slogan: Array<SchemaOrg_Text>;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     * @see https://schema.org/sponsor
     */
    sponsor: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
     * @see https://schema.org/subOrganization
     */
    subOrganization: Array<SchemaOrg_Organization>;
    /**
     * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
     * @see https://schema.org/taxID
     */
    taxID: Array<SchemaOrg_Text>;
    /**
     * The telephone number.
     * @see https://schema.org/telephone
     */
    telephone: Array<SchemaOrg_Text>;
    /**
     * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
     * @see https://schema.org/unnamedSourcesPolicy
     */
    unnamedSourcesPolicy: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * The Value-added Tax ID of the organization or person.
     * @see https://schema.org/vatID
     */
    vatID: Array<SchemaOrg_Text>;
}
