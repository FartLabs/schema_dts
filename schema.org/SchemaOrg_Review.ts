// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_ItemList } from "./SchemaOrg_ItemList.ts";
import type { SchemaOrg_ListItem } from "./SchemaOrg_ListItem.ts";
import type { SchemaOrg_Rating } from "./SchemaOrg_Rating.ts";
import type { SchemaOrg_Review } from "./SchemaOrg_Review.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_WebContent } from "./SchemaOrg_WebContent.ts";

/**
 * A review of an item - for example, of a restaurant, movie, or store.
 * @see https://schema.org/Review
 */
export const SCHEMA_ORG_Review = "https://schema.org/Review" as const;

/**
 * A review of an item - for example, of a restaurant, movie, or store.
 * @see https://schema.org/Review
 */
export interface SchemaOrg_Review extends SchemaOrg_CreativeWork {
    /**
     * An associated [[ClaimReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[relatedClaimReview]] would be used on [[MediaReview]].
     * @see https://schema.org/associatedClaimReview
     */
    associatedClaimReview?: Array<SchemaOrg_Review>;
    /**
     * An associated [[MediaReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[relatedClaimReview]] would be used on [[MediaReview]].
     * @see https://schema.org/associatedMediaReview
     */
    associatedMediaReview?: Array<SchemaOrg_Review>;
    /**
     * An associated [[Review]].
     * @see https://schema.org/associatedReview
     */
    associatedReview?: Array<SchemaOrg_Review>;
    /**
     * The item that is being reviewed/rated.
     * @see https://schema.org/itemReviewed
     */
    itemReviewed?: Array<SchemaOrg_Thing>;
    /**
     * Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry 
     *
     * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions 
     * tend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].
     *
     * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).
     * @see https://schema.org/negativeNotes
     */
    negativeNotes?: Array<SchemaOrg_ListItem | SchemaOrg_WebContent | SchemaOrg_ItemList | SchemaOrg_Text>;
    /**
     * Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.
     *
     * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.
     *
     * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).
     * @see https://schema.org/positiveNotes
     */
    positiveNotes?: Array<SchemaOrg_ItemList | SchemaOrg_Text | SchemaOrg_ListItem | SchemaOrg_WebContent>;
    /**
     * This Review or Rating is relevant to this part or facet of the itemReviewed.
     * @see https://schema.org/reviewAspect
     */
    reviewAspect?: Array<SchemaOrg_Text>;
    /**
     * The actual body of the review.
     * @see https://schema.org/reviewBody
     */
    reviewBody?: Array<SchemaOrg_Text>;
    /**
     * The rating given in this review. Note that reviews can themselves be rated. The ```reviewRating``` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work.
     * @see https://schema.org/reviewRating
     */
    reviewRating?: Array<SchemaOrg_Rating>;
}
