// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AggregateRating } from "./SchemaOrg_AggregateRating.ts";
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_Certification } from "./SchemaOrg_Certification.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_GeoCoordinates } from "./SchemaOrg_GeoCoordinates.ts";
import type { SchemaOrg_GeoShape } from "./SchemaOrg_GeoShape.ts";
import type { SchemaOrg_GeospatialGeometry } from "./SchemaOrg_GeospatialGeometry.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_LocationFeatureSpecification } from "./SchemaOrg_LocationFeatureSpecification.ts";
import type { SchemaOrg_Map } from "./SchemaOrg_Map.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_OpeningHoursSpecification } from "./SchemaOrg_OpeningHoursSpecification.ts";
import type { SchemaOrg_Photograph } from "./SchemaOrg_Photograph.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_Review } from "./SchemaOrg_Review.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * Entities that have a somewhat fixed, physical extension.
 * @see https://schema.org/Place
 */
export const SCHEMA_ORG_Place = "https://schema.org/Place" as const;

/**
 * Entities that have a somewhat fixed, physical extension.
 * @see https://schema.org/Place
 */
export interface SchemaOrg_Place extends SchemaOrg_Thing {
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty?: Array<SchemaOrg_PropertyValue>;
  /**
   * Physical address of the item.
   * @see https://schema.org/address
   */
  address?: Array<SchemaOrg_PostalAddress | SchemaOrg_Text>;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating?: Array<SchemaOrg_AggregateRating>;
  /**
   * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
   * @see https://schema.org/amenityFeature
   */
  amenityFeature?: Array<SchemaOrg_LocationFeatureSpecification>;
  /**
   * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
   * @see https://schema.org/branchCode
   */
  branchCode?: Array<SchemaOrg_Text>;
  /**
   * The basic containment relation between a place and one that contains it.
   * @see https://schema.org/containedIn
   */
  containedIn?: Array<SchemaOrg_Place>;
  /**
   * The basic containment relation between a place and one that contains it.
   * @see https://schema.org/containedInPlace
   */
  containedInPlace?: Array<SchemaOrg_Place>;
  /**
   * The basic containment relation between a place and another that it contains.
   * @see https://schema.org/containsPlace
   */
  containsPlace?: Array<SchemaOrg_Place>;
  /**
   * Upcoming or past event associated with this place, organization, or action.
   * @see https://schema.org/event
   */
  event?: Array<SchemaOrg_Event>;
  /**
   * Upcoming or past events associated with this place or organization.
   * @see https://schema.org/events
   */
  events?: Array<SchemaOrg_Event>;
  /**
   * The fax number.
   * @see https://schema.org/faxNumber
   */
  faxNumber?: Array<SchemaOrg_Text>;
  /**
   * The geo coordinates of the place.
   * @see https://schema.org/geo
   */
  geo?: Array<SchemaOrg_GeoCoordinates | SchemaOrg_GeoShape>;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   * @see https://schema.org/geoContains
   */
  geoContains?: Array<SchemaOrg_Place | SchemaOrg_GeospatialGeometry>;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   * @see https://schema.org/geoCoveredBy
   */
  geoCoveredBy?: Array<SchemaOrg_Place | SchemaOrg_GeospatialGeometry>;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   * @see https://schema.org/geoCovers
   */
  geoCovers?: Array<SchemaOrg_GeospatialGeometry | SchemaOrg_Place>;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   * @see https://schema.org/geoCrosses
   */
  geoCrosses?: Array<SchemaOrg_Place | SchemaOrg_GeospatialGeometry>;
  /**
   * Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: "they have no point in common. They form a set of disconnected geometries." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)
   * @see https://schema.org/geoDisjoint
   */
  geoDisjoint?: Array<SchemaOrg_GeospatialGeometry | SchemaOrg_Place>;
  /**
   * Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship).
   * @see https://schema.org/geoEquals
   */
  geoEquals?: Array<SchemaOrg_Place | SchemaOrg_GeospatialGeometry>;
  /**
   * Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   * @see https://schema.org/geoIntersects
   */
  geoIntersects?: Array<SchemaOrg_GeospatialGeometry | SchemaOrg_Place>;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   * @see https://schema.org/geoOverlaps
   */
  geoOverlaps?: Array<SchemaOrg_GeospatialGeometry | SchemaOrg_Place>;
  /**
   * Represents spatial relations in which two geometries (or the places they represent) touch: "they have at least one boundary point in common, but no interior points." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)
   * @see https://schema.org/geoTouches
   */
  geoTouches?: Array<SchemaOrg_GeospatialGeometry | SchemaOrg_Place>;
  /**
   * Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
   * @see https://schema.org/geoWithin
   */
  geoWithin?: Array<SchemaOrg_Place | SchemaOrg_GeospatialGeometry>;
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
   * Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users.
   * @see https://schema.org/hasDriveThroughService
   */
  hasDriveThroughService?: Array<SchemaOrg_Boolean>;
  /**
   * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
   * @see https://schema.org/hasGS1DigitalLink
   */
  hasGS1DigitalLink?: Array<SchemaOrg_URL>;
  /**
   * A URL to a map of the place.
   * @see https://schema.org/hasMap
   */
  hasMap?: Array<SchemaOrg_URL | SchemaOrg_Map>;
  /**
   * A flag to signal that the item, event, or place is accessible for free.
   * @see https://schema.org/isAccessibleForFree
   */
  isAccessibleForFree?: Array<SchemaOrg_Boolean>;
  /**
   * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
   * @see https://schema.org/isicV4
   */
  isicV4?: Array<SchemaOrg_Text>;
  /**
   * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
   * @see https://schema.org/keywords
   */
  keywords?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL>;
  /**
   * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
   * @see https://schema.org/latitude
   */
  latitude?: Array<SchemaOrg_Text | SchemaOrg_Number>;
  /**
   * An associated logo.
   * @see https://schema.org/logo
   */
  logo?: Array<SchemaOrg_ImageObject | SchemaOrg_URL>;
  /**
   * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
   * @see https://schema.org/longitude
   */
  longitude?: Array<SchemaOrg_Text | SchemaOrg_Number>;
  /**
   * A URL to a map of the place.
   * @see https://schema.org/map
   */
  map?: Array<SchemaOrg_URL>;
  /**
   * A URL to a map of the place.
   * @see https://schema.org/maps
   */
  maps?: Array<SchemaOrg_URL>;
  /**
   * The total number of individuals that may attend an event or venue.
   * @see https://schema.org/maximumAttendeeCapacity
   */
  maximumAttendeeCapacity?: Array<SchemaOrg_Integer>;
  /**
   * The opening hours of a certain place.
   * @see https://schema.org/openingHoursSpecification
   */
  openingHoursSpecification?: Array<SchemaOrg_OpeningHoursSpecification>;
  /**
   * A photograph of this place.
   * @see https://schema.org/photo
   */
  photo?: Array<SchemaOrg_ImageObject | SchemaOrg_Photograph>;
  /**
   * Photographs of this place.
   * @see https://schema.org/photos
   */
  photos?: Array<SchemaOrg_Photograph | SchemaOrg_ImageObject>;
  /**
   * A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value.
   * @see https://schema.org/publicAccess
   */
  publicAccess?: Array<SchemaOrg_Boolean>;
  /**
   * A review of the item.
   * @see https://schema.org/review
   */
  review?: Array<SchemaOrg_Review>;
  /**
   * Review of the item.
   * @see https://schema.org/reviews
   */
  reviews?: Array<SchemaOrg_Review>;
  /**
   * A slogan or motto associated with the item.
   * @see https://schema.org/slogan
   */
  slogan?: Array<SchemaOrg_Text>;
  /**
   * Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.
   * @see https://schema.org/smokingAllowed
   */
  smokingAllowed?: Array<SchemaOrg_Boolean>;
  /**
   * The special opening hours of a certain place.\n\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].
   * @see https://schema.org/specialOpeningHoursSpecification
   */
  specialOpeningHoursSpecification?: Array<SchemaOrg_OpeningHoursSpecification>;
  /**
   * The telephone number.
   * @see https://schema.org/telephone
   */
  telephone?: Array<SchemaOrg_Text>;
  /**
   * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
   * @see https://schema.org/tourBookingPage
   */
  tourBookingPage?: Array<SchemaOrg_URL>;
}
