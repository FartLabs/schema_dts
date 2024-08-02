// DO NOT EDIT: This file is generated from schema.org data.
/** The most generic type of item. */
export interface ClassThing {
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
   *     use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
   */
  additionalType: Array<string | { "@id": string }>;
  /** An alias for the item. */
  alternateName: Array<string>;
  /** A description of the item. */
  description: Array<string | { "@id": string }>;
  /** A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation. */
  disambiguatingDescription: Array<string>;
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   */
  identifier: Array<string | { "@id": string }>;
  /** An image of the item. This can be a [[URL]] or a fully described [[ImageObject]]. */
  image: Array<{ "@id": string }>;
  /** Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details. */
  mainEntityOfPage: Array<{ "@id": string }>;
  /** The name of the item. */
  name: Array<string>;
  /** Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. */
  potentialAction: Array<{ "@id": string }>;
  /** URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website. */
  sameAs: Array<{ "@id": string }>;
  /** A CreativeWork or Event about this Thing. */
  subjectOf: Array<{ "@id": string }>;
  /** URL of the item. */
  url: Array<{ "@id": string }>;
}
