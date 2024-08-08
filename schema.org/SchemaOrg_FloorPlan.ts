// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Accommodation } from "./SchemaOrg_Accommodation.ts";
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_LocationFeatureSpecification } from "./SchemaOrg_LocationFeatureSpecification.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some [[ApartmentComplex]] has an [[accommodationFloorPlan]] which is a [[FloorPlan]].  A FloorPlan is always in the context of a particular place, either a larger [[ApartmentComplex]] or a single [[Apartment]]. The visual/spatial aspects of a floor plan (i.e. room layout, [see wikipedia](https://en.wikipedia.org/wiki/Floor_plan)) can be indicated using [[image]].
 * @see https://schema.org/FloorPlan
 */
export const SCHEMA_ORG_FloorPlan = "https://schema.org/FloorPlan" as const;

/**
 * A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some [[ApartmentComplex]] has an [[accommodationFloorPlan]] which is a [[FloorPlan]].  A FloorPlan is always in the context of a particular place, either a larger [[ApartmentComplex]] or a single [[Apartment]]. The visual/spatial aspects of a floor plan (i.e. room layout, [see wikipedia](https://en.wikipedia.org/wiki/Floor_plan)) can be indicated using [[image]].
 * @see https://schema.org/FloorPlan
 */
export interface SchemaOrg_FloorPlan extends SchemaOrg_Intangible {
  /**
   * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
   * @see https://schema.org/amenityFeature
   */
  amenityFeature?: Array<SchemaOrg_LocationFeatureSpecification>;
  /**
   * The size of the accommodation, e.g. in square meter or squarefoot.
   * Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard.
   * @see https://schema.org/floorSize
   */
  floorSize?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * Indicates some accommodation that this floor plan describes.
   * @see https://schema.org/isPlanForApartment
   */
  isPlanForApartment?: Array<SchemaOrg_Accommodation>;
  /**
   * A schematic image showing the floorplan layout.
   * @see https://schema.org/layoutImage
   */
  layoutImage?: Array<SchemaOrg_ImageObject | SchemaOrg_URL>;
  /**
   * Indicates the total (available plus unavailable) number of accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAvailableAccommodationUnits]].
   * @see https://schema.org/numberOfAccommodationUnits
   */
  numberOfAccommodationUnits?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]].
   * @see https://schema.org/numberOfAvailableAccommodationUnits
   */
  numberOfAvailableAccommodationUnits?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * The total integer number of bathrooms in some [[Accommodation]], following real estate conventions as [documented in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field): "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also [[numberOfRooms]].
   * @see https://schema.org/numberOfBathroomsTotal
   */
  numberOfBathroomsTotal?: Array<SchemaOrg_Integer>;
  /**
   * The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]].
   * @see https://schema.org/numberOfBedrooms
   */
  numberOfBedrooms?: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue>;
  /**
   * Number of full bathrooms - The total number of full and ¾ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsFull field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field).
   * @see https://schema.org/numberOfFullBathrooms
   */
  numberOfFullBathrooms?: Array<SchemaOrg_Number>;
  /**
   * Number of partial bathrooms - The total number of half and ¼ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsPartial field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field).
   * @see https://schema.org/numberOfPartialBathrooms
   */
  numberOfPartialBathrooms?: Array<SchemaOrg_Number>;
  /**
   * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
   * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
   * @see https://schema.org/numberOfRooms
   */
  numberOfRooms?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
  /**
   * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
   * @see https://schema.org/petsAllowed
   */
  petsAllowed?: Array<SchemaOrg_Text | SchemaOrg_Boolean>;
}
