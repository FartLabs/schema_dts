// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEvent } from "./Event.ts";

/** Event type: Sports event. */
export interface ClassSportsEvent extends ClassEvent {
  /** The away team in a sports event. */
  awayTeam: Array<{ "@id": string }>;
  /** A competitor in a sports event. */
  competitor: Array<{ "@id": string }>;
  /** The home team in a sports event. */
  homeTeam: Array<{ "@id": string }>;
  /** A type of sport (e.g. Baseball). */
  sport: Array<string | { "@id": string }>;
}
