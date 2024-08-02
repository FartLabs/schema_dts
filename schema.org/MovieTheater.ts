// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEntertainmentBusiness } from "./EntertainmentBusiness.ts";
import type { ClassCivicStructure } from "./CivicStructure.ts";

/** A movie theater. */
export interface ClassMovieTheater
  extends ClassEntertainmentBusiness, ClassCivicStructure {
  /** The number of screens in the movie theater. */
  screenCount: Array<number>;
}
