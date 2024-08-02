// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassResidence } from "./Residence.ts";

/** Residence type: Apartment complex. */
export interface ClassApartmentComplex extends ClassResidence {
  /** Indicates the total (available plus unavailable) number of accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAvailableAccommodationUnits]]. */
  numberOfAccommodationUnits: Array<{ "@id": string }>;
  /** Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]]. */
  numberOfAvailableAccommodationUnits: Array<{ "@id": string }>;
  /** The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]]. */
  numberOfBedrooms: Array<number | { "@id": string }>;
  /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
  petsAllowed: Array<boolean | string>;
  /** A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate. */
  tourBookingPage: Array<{ "@id": string }>;
}
