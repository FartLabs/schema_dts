// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAccommodation } from "./Accommodation.ts";

/** A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>). */
export interface ClassHouse extends ClassAccommodation {
  /**
   * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
   * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
   */
  numberOfRooms: Array<number | { "@id": string }>;
}
