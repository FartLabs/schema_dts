// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassGrant } from "./Grant.ts";

/** A monetary grant. */
export interface ClassMonetaryGrant extends ClassGrant {
  /** The amount of money. */
  amount: Array<number | { "@id": string }>;
  /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
  funder: Array<{ "@id": string }>;
}
