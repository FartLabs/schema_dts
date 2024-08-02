// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTrip } from "./Trip.ts";

/** An airline flight. */
export interface ClassFlight extends ClassTrip {
  /** The kind of aircraft (e.g., "Boeing 747"). */
  aircraft: Array<string | { "@id": string }>;
  /** The airport where the flight terminates. */
  arrivalAirport: Array<{ "@id": string }>;
  /** Identifier of the flight's arrival gate. */
  arrivalGate: Array<string>;
  /** Identifier of the flight's arrival terminal. */
  arrivalTerminal: Array<string>;
  /** The type of boarding policy used by the airline (e.g. zone-based or group-based). */
  boardingPolicy: Array<{ "@id": string }>;
  /** 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights. */
  carrier: Array<{ "@id": string }>;
  /** The airport where the flight originates. */
  departureAirport: Array<{ "@id": string }>;
  /** Identifier of the flight's departure gate. */
  departureGate: Array<string>;
  /** Identifier of the flight's departure terminal. */
  departureTerminal: Array<string>;
  /** The estimated time the flight will take. */
  estimatedFlightDuration: Array<string | { "@id": string }>;
  /** The distance of the flight. */
  flightDistance: Array<string | { "@id": string }>;
  /** The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'. */
  flightNumber: Array<string>;
  /** Description of the meals that will be provided or available for purchase. */
  mealService: Array<string>;
  /** An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider. */
  seller: Array<{ "@id": string }>;
  /** The time when a passenger can check into the flight online. */
  webCheckinTime: Array<string>;
}
