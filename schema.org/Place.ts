// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** Entities that have a somewhat fixed, physical extension. */
export interface ClassPlace extends ClassThing {
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   */
  additionalProperty: Array<{ "@id": string }>;
  /** Physical address of the item. */
  address: Array<string | { "@id": string }>;
  /** The overall rating, based on a collection of reviews or ratings, of the item. */
  aggregateRating: Array<{ "@id": string }>;
  /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
  amenityFeature: Array<{ "@id": string }>;
  /**
   * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
   */
  branchCode: Array<string>;
  /** The basic containment relation between a place and one that contains it. */
  containedIn: Array<{ "@id": string }>;
  /** The basic containment relation between a place and one that contains it. */
  containedInPlace: Array<{ "@id": string }>;
  /** The basic containment relation between a place and another that it contains. */
  containsPlace: Array<{ "@id": string }>;
  /** Upcoming or past event associated with this place, organization, or action. */
  event: Array<{ "@id": string }>;
  /** Upcoming or past events associated with this place or organization. */
  events: Array<{ "@id": string }>;
  /** The fax number. */
  faxNumber: Array<string>;
  /** The geo coordinates of the place. */
  geo: Array<{ "@id": string }>;
  /** Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoContains: Array<{ "@id": string }>;
  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoCoveredBy: Array<{ "@id": string }>;
  /** Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoCovers: Array<{ "@id": string }>;
  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoCrosses: Array<{ "@id": string }>;
  /** Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: "they have no point in common. They form a set of disconnected geometries." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).) */
  geoDisjoint: Array<{ "@id": string }>;
  /** Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship). */
  geoEquals: Array<{ "@id": string }>;
  /** Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoIntersects: Array<{ "@id": string }>;
  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoOverlaps: Array<{ "@id": string }>;
  /** Represents spatial relations in which two geometries (or the places they represent) touch: "they have at least one boundary point in common, but no interior points." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).) */
  geoTouches: Array<{ "@id": string }>;
  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). */
  geoWithin: Array<{ "@id": string }>;
  /** The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
  globalLocationNumber: Array<string>;
  /** Certification information about a product, organization, service, place, or person. */
  hasCertification: Array<{ "@id": string }>;
  /** Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users. */
  hasDriveThroughService: Array<boolean>;
  /** The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly. */
  hasGS1DigitalLink: Array<{ "@id": string }>;
  /** A URL to a map of the place. */
  hasMap: Array<{ "@id": string }>;
  /** A flag to signal that the item, event, or place is accessible for free. */
  isAccessibleForFree: Array<boolean>;
  /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
  isicV4: Array<string>;
  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property. */
  keywords: Array<string | { "@id": string }>;
  /** The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). */
  latitude: Array<number | string>;
  /** An associated logo. */
  logo: Array<{ "@id": string }>;
  /** The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). */
  longitude: Array<number | string>;
  /** A URL to a map of the place. */
  map: Array<{ "@id": string }>;
  /** A URL to a map of the place. */
  maps: Array<{ "@id": string }>;
  /** The total number of individuals that may attend an event or venue. */
  maximumAttendeeCapacity: Array<{ "@id": string }>;
  /** The opening hours of a certain place. */
  openingHoursSpecification: Array<{ "@id": string }>;
  /** A photograph of this place. */
  photo: Array<{ "@id": string }>;
  /** Photographs of this place. */
  photos: Array<{ "@id": string }>;
  /** A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value. */
  publicAccess: Array<boolean>;
  /** A review of the item. */
  review: Array<{ "@id": string }>;
  /** Review of the item. */
  reviews: Array<{ "@id": string }>;
  /** A slogan or motto associated with the item. */
  slogan: Array<string>;
  /** Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room. */
  smokingAllowed: Array<boolean>;
  /**
   * The special opening hours of a certain place.\n\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].
   */
  specialOpeningHoursSpecification: Array<{ "@id": string }>;
  /** The telephone number. */
  telephone: Array<string>;
  /** A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate. */
  tourBookingPage: Array<{ "@id": string }>;
}
