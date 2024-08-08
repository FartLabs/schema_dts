// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Brand } from "./SchemaOrg_Brand.ts";
import type { SchemaOrg_Certification } from "./SchemaOrg_Certification.ts";
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_Country } from "./SchemaOrg_Country.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Demand } from "./SchemaOrg_Demand.ts";
import type { SchemaOrg_Distance } from "./SchemaOrg_Distance.ts";
import type { SchemaOrg_EducationalOccupationalCredential } from "./SchemaOrg_EducationalOccupationalCredential.ts";
import type { SchemaOrg_EducationalOrganization } from "./SchemaOrg_EducationalOrganization.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_GenderType } from "./SchemaOrg_GenderType.ts";
import type { SchemaOrg_Grant } from "./SchemaOrg_Grant.ts";
import type { SchemaOrg_InteractionCounter } from "./SchemaOrg_InteractionCounter.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Occupation } from "./SchemaOrg_Occupation.ts";
import type { SchemaOrg_Offer } from "./SchemaOrg_Offer.ts";
import type { SchemaOrg_OfferCatalog } from "./SchemaOrg_OfferCatalog.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_OwnershipInfo } from "./SchemaOrg_OwnershipInfo.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_PriceSpecification } from "./SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_ProgramMembership } from "./SchemaOrg_ProgramMembership.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A person (alive, dead, undead, or fictional).
 * @see https://schema.org/Person
 */
export const SCHEMA_ORG_Person = "https://schema.org/Person" as const;

/**
 * A person (alive, dead, undead, or fictional).
 * @see https://schema.org/Person
 */
export interface SchemaOrg_Person extends SchemaOrg_Thing {
  /**
   * An additional name for a Person, can be used for a middle name.
   * @see https://schema.org/additionalName
   */
  additionalName?: Array<SchemaOrg_Text>;
  /**
   * Physical address of the item.
   * @see https://schema.org/address
   */
  address?: Array<SchemaOrg_PostalAddress | SchemaOrg_Text>;
  /**
   * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
   * @see https://schema.org/affiliation
   */
  affiliation?: Array<SchemaOrg_Organization>;
  /**
   * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
   * @see https://schema.org/agentInteractionStatistic
   */
  agentInteractionStatistic?: Array<SchemaOrg_InteractionCounter>;
  /**
   * An organization that the person is an alumni of.
   * @see https://schema.org/alumniOf
   */
  alumniOf?: Array<SchemaOrg_EducationalOrganization | SchemaOrg_Organization>;
  /**
   * An award won by or for this item.
   * @see https://schema.org/award
   */
  award?: Array<SchemaOrg_Text>;
  /**
   * Awards won by or for this item.
   * @see https://schema.org/awards
   */
  awards?: Array<SchemaOrg_Text>;
  /**
   * Date of birth.
   * @see https://schema.org/birthDate
   */
  birthDate?: Array<SchemaOrg_Date>;
  /**
   * The place where the person was born.
   * @see https://schema.org/birthPlace
   */
  birthPlace?: Array<SchemaOrg_Place>;
  /**
   * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   * @see https://schema.org/brand
   */
  brand?: Array<SchemaOrg_Brand | SchemaOrg_Organization>;
  /**
   * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
   * @see https://schema.org/callSign
   */
  callSign?: Array<SchemaOrg_Text>;
  /**
   * A child of the person.
   * @see https://schema.org/children
   */
  children?: Array<SchemaOrg_Person>;
  /**
   * A colleague of the person.
   * @see https://schema.org/colleague
   */
  colleague?: Array<SchemaOrg_URL | SchemaOrg_Person>;
  /**
   * A colleague of the person.
   * @see https://schema.org/colleagues
   */
  colleagues?: Array<SchemaOrg_Person>;
  /**
   * A contact point for a person or organization.
   * @see https://schema.org/contactPoint
   */
  contactPoint?: Array<SchemaOrg_ContactPoint>;
  /**
   * A contact point for a person or organization.
   * @see https://schema.org/contactPoints
   */
  contactPoints?: Array<SchemaOrg_ContactPoint>;
  /**
   * Date of death.
   * @see https://schema.org/deathDate
   */
  deathDate?: Array<SchemaOrg_Date>;
  /**
   * The place where the person died.
   * @see https://schema.org/deathPlace
   */
  deathPlace?: Array<SchemaOrg_Place>;
  /**
   * The Dun & Bradstreet DUNS number for identifying an organization or business person.
   * @see https://schema.org/duns
   */
  duns?: Array<SchemaOrg_Text>;
  /**
   * Email address.
   * @see https://schema.org/email
   */
  email?: Array<SchemaOrg_Text>;
  /**
   * Family name. In the U.S., the last name of a Person.
   * @see https://schema.org/familyName
   */
  familyName?: Array<SchemaOrg_Text>;
  /**
   * The fax number.
   * @see https://schema.org/faxNumber
   */
  faxNumber?: Array<SchemaOrg_Text>;
  /**
   * The most generic uni-directional social relation.
   * @see https://schema.org/follows
   */
  follows?: Array<SchemaOrg_Person>;
  /**
   * A person or organization that supports (sponsors) something through some kind of financial contribution.
   * @see https://schema.org/funder
   */
  funder?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
   * @see https://schema.org/funding
   */
  funding?: Array<SchemaOrg_Grant>;
  /**
   * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
   * @see https://schema.org/gender
   */
  gender?: Array<SchemaOrg_GenderType | SchemaOrg_Text>;
  /**
   * Given name. In the U.S., the first name of a Person.
   * @see https://schema.org/givenName
   */
  givenName?: Array<SchemaOrg_Text>;
  /**
   * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
   * @see https://schema.org/globalLocationNumber
   */
  globalLocationNumber?: Array<SchemaOrg_Text>;
  /**
   * Certification information about a product, organization, service, place, or person.
   * @see https://schema.org/hasCertification
   */
  hasCertification?: Array<SchemaOrg_Certification>;
  /**
   * A credential awarded to the Person or Organization.
   * @see https://schema.org/hasCredential
   */
  hasCredential?: Array<SchemaOrg_EducationalOccupationalCredential>;
  /**
   * The Person's occupation. For past professions, use Role for expressing dates.
   * @see https://schema.org/hasOccupation
   */
  hasOccupation?: Array<SchemaOrg_Occupation>;
  /**
   * Indicates an OfferCatalog listing for this Organization, Person, or Service.
   * @see https://schema.org/hasOfferCatalog
   */
  hasOfferCatalog?: Array<SchemaOrg_OfferCatalog>;
  /**
   * Points-of-Sales operated by the organization or person.
   * @see https://schema.org/hasPOS
   */
  hasPOS?: Array<SchemaOrg_Place>;
  /**
   * The height of the item.
   * @see https://schema.org/height
   */
  height?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Distance>;
  /**
   * A contact location for a person's residence.
   * @see https://schema.org/homeLocation
   */
  homeLocation?: Array<SchemaOrg_ContactPoint | SchemaOrg_Place>;
  /**
   * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
   * @see https://schema.org/honorificPrefix
   */
  honorificPrefix?: Array<SchemaOrg_Text>;
  /**
   * An honorific suffix following a Person's name such as M.D./PhD/MSCSW.
   * @see https://schema.org/honorificSuffix
   */
  honorificSuffix?: Array<SchemaOrg_Text>;
  /**
   * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
   * @see https://schema.org/interactionStatistic
   */
  interactionStatistic?: Array<SchemaOrg_InteractionCounter>;
  /**
   * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
   * @see https://schema.org/isicV4
   */
  isicV4?: Array<SchemaOrg_Text>;
  /**
   * The job title of the person (for example, Financial Manager).
   * @see https://schema.org/jobTitle
   */
  jobTitle?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
  /**
   * The most generic bi-directional social/work relation.
   * @see https://schema.org/knows
   */
  knows?: Array<SchemaOrg_Person>;
  /**
   * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
   * @see https://schema.org/knowsAbout
   */
  knowsAbout?: Array<SchemaOrg_Text | SchemaOrg_URL | SchemaOrg_Thing>;
  /**
   * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
   * @see https://schema.org/knowsLanguage
   */
  knowsLanguage?: Array<SchemaOrg_Text | SchemaOrg_Language>;
  /**
   * A pointer to products or services offered by the organization or person.
   * @see https://schema.org/makesOffer
   */
  makesOffer?: Array<SchemaOrg_Offer>;
  /**
   * An Organization (or ProgramMembership) to which this Person or Organization belongs.
   * @see https://schema.org/memberOf
   */
  memberOf?: Array<SchemaOrg_Organization | SchemaOrg_ProgramMembership>;
  /**
   * The North American Industry Classification System (NAICS) code for a particular organization or business person.
   * @see https://schema.org/naics
   */
  naics?: Array<SchemaOrg_Text>;
  /**
   * Nationality of the person.
   * @see https://schema.org/nationality
   */
  nationality?: Array<SchemaOrg_Country>;
  /**
   * The total financial value of the person as calculated by subtracting assets from liabilities.
   * @see https://schema.org/netWorth
   */
  netWorth?: Array<SchemaOrg_MonetaryAmount | SchemaOrg_PriceSpecification>;
  /**
   * Products owned by the organization or person.
   * @see https://schema.org/owns
   */
  owns?: Array<SchemaOrg_OwnershipInfo | SchemaOrg_Product>;
  /**
   * A parent of this person.
   * @see https://schema.org/parent
   */
  parent?: Array<SchemaOrg_Person>;
  /**
   * A parents of the person.
   * @see https://schema.org/parents
   */
  parents?: Array<SchemaOrg_Person>;
  /**
   * Event that this person is a performer or participant in.
   * @see https://schema.org/performerIn
   */
  performerIn?: Array<SchemaOrg_Event>;
  /**
   * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
   *
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
   * @see https://schema.org/publishingPrinciples
   */
  publishingPrinciples?: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
  /**
   * The most generic familial relation.
   * @see https://schema.org/relatedTo
   */
  relatedTo?: Array<SchemaOrg_Person>;
  /**
   * A pointer to products or services sought by the organization or person (demand).
   * @see https://schema.org/seeks
   */
  seeks?: Array<SchemaOrg_Demand>;
  /**
   * A sibling of the person.
   * @see https://schema.org/sibling
   */
  sibling?: Array<SchemaOrg_Person>;
  /**
   * A sibling of the person.
   * @see https://schema.org/siblings
   */
  siblings?: Array<SchemaOrg_Person>;
  /**
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   * @see https://schema.org/sponsor
   */
  sponsor?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The person's spouse.
   * @see https://schema.org/spouse
   */
  spouse?: Array<SchemaOrg_Person>;
  /**
   * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
   * @see https://schema.org/taxID
   */
  taxID?: Array<SchemaOrg_Text>;
  /**
   * The telephone number.
   * @see https://schema.org/telephone
   */
  telephone?: Array<SchemaOrg_Text>;
  /**
   * The Value-added Tax ID of the organization or person.
   * @see https://schema.org/vatID
   */
  vatID?: Array<SchemaOrg_Text>;
  /**
   * The weight of the product or person.
   * @see https://schema.org/weight
   */
  weight?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * A contact location for a person's place of work.
   * @see https://schema.org/workLocation
   */
  workLocation?: Array<SchemaOrg_ContactPoint | SchemaOrg_Place>;
  /**
   * Organizations that the person works for.
   * @see https://schema.org/worksFor
   */
  worksFor?: Array<SchemaOrg_Organization>;
}
