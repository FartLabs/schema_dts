// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development). */
export interface ClassBedDetails extends ClassIntangible {
  /** The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment. */
  numberOfBeds: Array<number>;
  /** The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity. */
  typeOfBed: Array<string | { "@id": string }>;
}
