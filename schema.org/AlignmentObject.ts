// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/**
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 *
 * Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 */
export interface ClassAlignmentObject extends ClassIntangible {
  /** A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'. */
  alignmentType: Array<string>;
  /** The framework to which the resource being described is aligned. */
  educationalFramework: Array<string>;
  /** The description of a node in an established educational framework. */
  targetDescription: Array<string>;
  /** The name of a node in an established educational framework. */
  targetName: Array<string>;
  /** The URL of a node in an established educational framework. */
  targetUrl: Array<{ "@id": string }>;
}
