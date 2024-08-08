// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_AggregateRating } from "./SchemaOrg_AggregateRating.ts";
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_Brand } from "./SchemaOrg_Brand.ts";
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_Certification } from "./SchemaOrg_Certification.ts";
import type { SchemaOrg_Demand } from "./SchemaOrg_Demand.ts";
import type { SchemaOrg_GeoShape } from "./SchemaOrg_GeoShape.ts";
import type { SchemaOrg_GovernmentBenefitsType } from "./SchemaOrg_GovernmentBenefitsType.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Offer } from "./SchemaOrg_Offer.ts";
import type { SchemaOrg_OfferCatalog } from "./SchemaOrg_OfferCatalog.ts";
import type { SchemaOrg_OpeningHoursSpecification } from "./SchemaOrg_OpeningHoursSpecification.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_PhysicalActivityCategory } from "./SchemaOrg_PhysicalActivityCategory.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_Review } from "./SchemaOrg_Review.ts";
import type { SchemaOrg_Service } from "./SchemaOrg_Service.ts";
import type { SchemaOrg_ServiceChannel } from "./SchemaOrg_ServiceChannel.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A service provided by an organization, e.g. delivery service, print services, etc.
 * @see https://schema.org/Service
 */
export const SCHEMA_ORG_Service = "https://schema.org/Service" as const;

/**
 * A service provided by an organization, e.g. delivery service, print services, etc.
 * @see https://schema.org/Service
 */
export interface SchemaOrg_Service extends SchemaOrg_Intangible {
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating?: Array<SchemaOrg_AggregateRating>;
  /**
   * The geographic area where a service or offered item is provided.
   * @see https://schema.org/areaServed
   */
  areaServed?: Array<
    | SchemaOrg_Place
    | SchemaOrg_AdministrativeArea
    | SchemaOrg_GeoShape
    | SchemaOrg_Text
  >;
  /**
   * An intended audience, i.e. a group for whom something was created.
   * @see https://schema.org/audience
   */
  audience?: Array<SchemaOrg_Audience>;
  /**
   * A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
   * @see https://schema.org/availableChannel
   */
  availableChannel?: Array<SchemaOrg_ServiceChannel>;
  /**
   * An award won by or for this item.
   * @see https://schema.org/award
   */
  award?: Array<SchemaOrg_Text>;
  /**
   * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   * @see https://schema.org/brand
   */
  brand?: Array<SchemaOrg_Brand | SchemaOrg_Organization>;
  /**
   * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
   * @see https://schema.org/broker
   */
  broker?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   * @see https://schema.org/category
   */
  category?: Array<
    | SchemaOrg_URL
    | SchemaOrg_Thing
    | SchemaOrg_PhysicalActivityCategory
    | SchemaOrg_CategoryCode
    | SchemaOrg_Text
  >;
  /**
   * Certification information about a product, organization, service, place, or person.
   * @see https://schema.org/hasCertification
   */
  hasCertification?: Array<SchemaOrg_Certification>;
  /**
   * Indicates an OfferCatalog listing for this Organization, Person, or Service.
   * @see https://schema.org/hasOfferCatalog
   */
  hasOfferCatalog?: Array<SchemaOrg_OfferCatalog>;
  /**
   * The hours during which this service or contact is available.
   * @see https://schema.org/hoursAvailable
   */
  hoursAvailable?: Array<SchemaOrg_OpeningHoursSpecification>;
  /**
   * A pointer to another, somehow related product (or multiple products).
   * @see https://schema.org/isRelatedTo
   */
  isRelatedTo?: Array<SchemaOrg_Service | SchemaOrg_Product>;
  /**
   * A pointer to another, functionally similar product (or multiple products).
   * @see https://schema.org/isSimilarTo
   */
  isSimilarTo?: Array<SchemaOrg_Product | SchemaOrg_Service>;
  /**
   * An associated logo.
   * @see https://schema.org/logo
   */
  logo?: Array<SchemaOrg_ImageObject | SchemaOrg_URL>;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/offers
   */
  offers?: Array<SchemaOrg_Demand | SchemaOrg_Offer>;
  /**
   * The tangible thing generated by the service, e.g. a passport, permit, etc.
   * @see https://schema.org/produces
   */
  produces?: Array<SchemaOrg_Thing>;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   * @see https://schema.org/provider
   */
  provider?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
   * @see https://schema.org/providerMobility
   */
  providerMobility?: Array<SchemaOrg_Text>;
  /**
   * A review of the item.
   * @see https://schema.org/review
   */
  review?: Array<SchemaOrg_Review>;
  /**
   * The geographic area where the service is provided.
   * @see https://schema.org/serviceArea
   */
  serviceArea?: Array<
    SchemaOrg_AdministrativeArea | SchemaOrg_GeoShape | SchemaOrg_Place
  >;
  /**
   * The audience eligible for this service.
   * @see https://schema.org/serviceAudience
   */
  serviceAudience?: Array<SchemaOrg_Audience>;
  /**
   * The tangible thing generated by the service, e.g. a passport, permit, etc.
   * @see https://schema.org/serviceOutput
   */
  serviceOutput?: Array<SchemaOrg_Thing>;
  /**
   * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
   * @see https://schema.org/serviceType
   */
  serviceType?: Array<SchemaOrg_Text | SchemaOrg_GovernmentBenefitsType>;
  /**
   * A slogan or motto associated with the item.
   * @see https://schema.org/slogan
   */
  slogan?: Array<SchemaOrg_Text>;
  /**
   * Human-readable terms of service documentation.
   * @see https://schema.org/termsOfService
   */
  termsOfService?: Array<SchemaOrg_Text | SchemaOrg_URL>;
}
