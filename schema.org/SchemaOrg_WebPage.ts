// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BreadcrumbList } from "./SchemaOrg_BreadcrumbList.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_SpeakableSpecification } from "./SchemaOrg_SpeakableSpecification.ts";
import type { SchemaOrg_Specialty } from "./SchemaOrg_Specialty.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";
import type { SchemaOrg_WebPageElement } from "./SchemaOrg_WebPageElement.ts";

/**
 * A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
 * @see https://schema.org/WebPage
 */
export const SCHEMA_ORG_WebPage = "https://schema.org/WebPage" as const;

/**
 * A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
 * @see https://schema.org/WebPage
 */
export interface SchemaOrg_WebPage extends SchemaOrg_CreativeWork {
  /**
   * A set of links that can help a user understand and navigate a website hierarchy.
   * @see https://schema.org/breadcrumb
   */
  breadcrumb?: Array<SchemaOrg_Text | SchemaOrg_BreadcrumbList>;
  /**
   * Date on which the content on this web page was last reviewed for accuracy and/or completeness.
   * @see https://schema.org/lastReviewed
   */
  lastReviewed?: Array<SchemaOrg_Date>;
  /**
   * Indicates if this web page element is the main subject of the page.
   * @see https://schema.org/mainContentOfPage
   */
  mainContentOfPage?: Array<SchemaOrg_WebPageElement>;
  /**
   * Indicates the main image on the page.
   * @see https://schema.org/primaryImageOfPage
   */
  primaryImageOfPage?: Array<SchemaOrg_ImageObject>;
  /**
   * A link related to this web page, for example to other related web pages.
   * @see https://schema.org/relatedLink
   */
  relatedLink?: Array<SchemaOrg_URL>;
  /**
   * People or organizations that have reviewed the content on this web page for accuracy and/or completeness.
   * @see https://schema.org/reviewedBy
   */
  reviewedBy?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
   * @see https://schema.org/significantLink
   */
  significantLink?: Array<SchemaOrg_URL>;
  /**
   * The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
   * @see https://schema.org/significantLinks
   */
  significantLinks?: Array<SchemaOrg_URL>;
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
   * @see https://schema.org/speakable
   */
  speakable?: Array<SchemaOrg_SpeakableSpecification | SchemaOrg_URL>;
  /**
   * One of the domain specialities to which this web page's content applies.
   * @see https://schema.org/specialty
   */
  specialty?: Array<SchemaOrg_Specialty>;
}
