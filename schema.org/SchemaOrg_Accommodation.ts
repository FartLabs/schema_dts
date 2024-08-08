// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BedDetails } from "./SchemaOrg_BedDetails.ts";
import type { SchemaOrg_BedType } from "./SchemaOrg_BedType.ts";
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_FloorPlan } from "./SchemaOrg_FloorPlan.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_LocationFeatureSpecification } from "./SchemaOrg_LocationFeatureSpecification.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
 * For more specific types of accommodations not defined in schema.org, one can use [[additionalType]] with external vocabularies.
 * <br /><br />
 * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * @see https://schema.org/Accommodation
 */
export const SCHEMA_ORG_Accommodation = "https://schema.org/Accommodation" as const;

/**
 * An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
 * For more specific types of accommodations not defined in schema.org, one can use [[additionalType]] with external vocabularies.
 * <br /><br />
 * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * @see https://schema.org/Accommodation
 */
export interface SchemaOrg_Accommodation extends SchemaOrg_Place {
    /**
     * Category of an [[Accommodation]], following real estate conventions, e.g. RESO (see [PropertySubType](https://ddwiki.reso.org/display/DDW17/PropertySubType+Field), and [PropertyType](https://ddwiki.reso.org/display/DDW17/PropertyType+Field) fields  for suggested values).
     * @see https://schema.org/accommodationCategory
     */
    accommodationCategory?: Array<SchemaOrg_Text>;
    /**
     * A floorplan of some [[Accommodation]].
     * @see https://schema.org/accommodationFloorPlan
     */
    accommodationFloorPlan?: Array<SchemaOrg_FloorPlan>;
    /**
     * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
     * @see https://schema.org/amenityFeature
     */
    amenityFeature?: Array<SchemaOrg_LocationFeatureSpecification>;
    /**
     * The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
     *       If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
     * @see https://schema.org/bed
     */
    bed?: Array<SchemaOrg_BedType | SchemaOrg_Text | SchemaOrg_BedDetails>;
    /**
     * The floor level for an [[Accommodation]] in a multi-storey building. Since counting
     *   systems [vary internationally](https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations), the local system should be used where possible.
     * @see https://schema.org/floorLevel
     */
    floorLevel?: Array<SchemaOrg_Text>;
    /**
     * The size of the accommodation, e.g. in square meter or squarefoot.
     * Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard.
     * @see https://schema.org/floorSize
     */
    floorSize?: Array<SchemaOrg_QuantitativeValue>;
    /**
     * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
     * @see https://schema.org/leaseLength
     */
    leaseLength?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Duration>;
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
     * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
     * Typical unit code(s): C62 for person.
     * @see https://schema.org/occupancy
     */
    occupancy?: Array<SchemaOrg_QuantitativeValue>;
    /**
     * Indications regarding the permitted usage of the accommodation.
     * @see https://schema.org/permittedUsage
     */
    permittedUsage?: Array<SchemaOrg_Text>;
    /**
     * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
     * @see https://schema.org/petsAllowed
     */
    petsAllowed?: Array<SchemaOrg_Text | SchemaOrg_Boolean>;
    /**
     * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
     * @see https://schema.org/tourBookingPage
     */
    tourBookingPage?: Array<SchemaOrg_URL>;
    /**
     * The year an [[Accommodation]] was constructed. This corresponds to the [YearBuilt field in RESO](https://ddwiki.reso.org/display/DDW17/YearBuilt+Field).
     * @see https://schema.org/yearBuilt
     */
    yearBuilt?: Array<SchemaOrg_Number>;
}
