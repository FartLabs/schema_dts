// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page. */
export interface ClassWebPage extends ClassCreativeWork {
  /** A set of links that can help a user understand and navigate a website hierarchy. */
  breadcrumb: Array<string | { "@id": string }>;
  /** Date on which the content on this web page was last reviewed for accuracy and/or completeness. */
  lastReviewed: Array<string>;
  /** Indicates if this web page element is the main subject of the page. */
  mainContentOfPage: Array<{ "@id": string }>;
  /** Indicates the main image on the page. */
  primaryImageOfPage: Array<{ "@id": string }>;
  /** A link related to this web page, for example to other related web pages. */
  relatedLink: Array<{ "@id": string }>;
  /** People or organizations that have reviewed the content on this web page for accuracy and/or completeness. */
  reviewedBy: Array<{ "@id": string }>;
  /** One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most. */
  significantLink: Array<{ "@id": string }>;
  /** The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most. */
  significantLinks: Array<{ "@id": string }>;
  /**
   * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
   *
   * The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
   *
   * 1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.
   *
   * 2.) CSS Selectors - addresses content in the annotated page, e.g. via class attribute. Use the [[cssSelector]] property.
   *
   * 3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.
   *
   * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
   * we define a supporting type, [[SpeakableSpecification]]  which is defined to be a possible value of the *speakable* property.
   */
  speakable: Array<{ "@id": string }>;
  /** One of the domain specialities to which this web page's content applies. */
  specialty: Array<{ "@id": string }>;
}
