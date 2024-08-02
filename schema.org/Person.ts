// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** A person (alive, dead, undead, or fictional). */
export interface ClassPerson extends ClassThing {
  /** An additional name for a Person, can be used for a middle name. */
  additionalName: Array<string>;
  /** Physical address of the item. */
  address: Array<string | { "@id": string }>;
  /** An organization that this person is affiliated with. For example, a school/university, a club, or a team. */
  affiliation: Array<{ "@id": string }>;
  /** The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService). */
  agentInteractionStatistic: Array<{ "@id": string }>;
  /** An organization that the person is an alumni of. */
  alumniOf: Array<{ "@id": string }>;
  /** An award won by or for this item. */
  award: Array<string>;
  /** Awards won by or for this item. */
  awards: Array<string>;
  /** Date of birth. */
  birthDate: Array<string>;
  /** The place where the person was born. */
  birthPlace: Array<{ "@id": string }>;
  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
  brand: Array<{ "@id": string }>;
  /** A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
  callSign: Array<string>;
  /** A child of the person. */
  children: Array<{ "@id": string }>;
  /** A colleague of the person. */
  colleague: Array<{ "@id": string }>;
  /** A colleague of the person. */
  colleagues: Array<{ "@id": string }>;
  /** A contact point for a person or organization. */
  contactPoint: Array<{ "@id": string }>;
  /** A contact point for a person or organization. */
  contactPoints: Array<{ "@id": string }>;
  /** Date of death. */
  deathDate: Array<string>;
  /** The place where the person died. */
  deathPlace: Array<{ "@id": string }>;
  /** The Dun & Bradstreet DUNS number for identifying an organization or business person. */
  duns: Array<string>;
  /** Email address. */
  email: Array<string>;
  /** Family name. In the U.S., the last name of a Person. */
  familyName: Array<string>;
  /** The fax number. */
  faxNumber: Array<string>;
  /** The most generic uni-directional social relation. */
  follows: Array<{ "@id": string }>;
  /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
  funder: Array<{ "@id": string }>;
  /** A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]]. */
  funding: Array<{ "@id": string }>;
  /** Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed". */
  gender: Array<string | { "@id": string }>;
  /** Given name. In the U.S., the first name of a Person. */
  givenName: Array<string>;
  /** The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
  globalLocationNumber: Array<string>;
  /** Certification information about a product, organization, service, place, or person. */
  hasCertification: Array<{ "@id": string }>;
  /** A credential awarded to the Person or Organization. */
  hasCredential: Array<{ "@id": string }>;
  /** The Person's occupation. For past professions, use Role for expressing dates. */
  hasOccupation: Array<{ "@id": string }>;
  /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
  hasOfferCatalog: Array<{ "@id": string }>;
  /** Points-of-Sales operated by the organization or person. */
  hasPOS: Array<{ "@id": string }>;
  /** The height of the item. */
  height: Array<{ "@id": string }>;
  /** A contact location for a person's residence. */
  homeLocation: Array<{ "@id": string }>;
  /** An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. */
  honorificPrefix: Array<string>;
  /** An honorific suffix following a Person's name such as M.D./PhD/MSCSW. */
  honorificSuffix: Array<string>;
  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
  interactionStatistic: Array<{ "@id": string }>;
  /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
  isicV4: Array<string>;
  /** The job title of the person (for example, Financial Manager). */
  jobTitle: Array<string | { "@id": string }>;
  /** The most generic bi-directional social/work relation. */
  knows: Array<{ "@id": string }>;
  /** Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions. */
  knowsAbout: Array<string | { "@id": string }>;
  /** Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). */
  knowsLanguage: Array<string | { "@id": string }>;
  /** A pointer to products or services offered by the organization or person. */
  makesOffer: Array<{ "@id": string }>;
  /** An Organization (or ProgramMembership) to which this Person or Organization belongs. */
  memberOf: Array<{ "@id": string }>;
  /** The North American Industry Classification System (NAICS) code for a particular organization or business person. */
  naics: Array<string>;
  /** Nationality of the person. */
  nationality: Array<{ "@id": string }>;
  /** The total financial value of the person as calculated by subtracting assets from liabilities. */
  netWorth: Array<{ "@id": string }>;
  /** Products owned by the organization or person. */
  owns: Array<{ "@id": string }>;
  /** A parent of this person. */
  parent: Array<{ "@id": string }>;
  /** A parents of the person. */
  parents: Array<{ "@id": string }>;
  /** Event that this person is a performer or participant in. */
  performerIn: Array<{ "@id": string }>;
  /**
   * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
   *
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
   */
  publishingPrinciples: Array<{ "@id": string }>;
  /** The most generic familial relation. */
  relatedTo: Array<{ "@id": string }>;
  /** A pointer to products or services sought by the organization or person (demand). */
  seeks: Array<{ "@id": string }>;
  /** A sibling of the person. */
  sibling: Array<{ "@id": string }>;
  /** A sibling of the person. */
  siblings: Array<{ "@id": string }>;
  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
  sponsor: Array<{ "@id": string }>;
  /** The person's spouse. */
  spouse: Array<{ "@id": string }>;
  /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. */
  taxID: Array<string>;
  /** The telephone number. */
  telephone: Array<string>;
  /** The Value-added Tax ID of the organization or person. */
  vatID: Array<string>;
  /** The weight of the product or person. */
  weight: Array<{ "@id": string }>;
  /** A contact location for a person's place of work. */
  workLocation: Array<{ "@id": string }>;
  /** Organizations that the person works for. */
  worksFor: Array<{ "@id": string }>;
}
