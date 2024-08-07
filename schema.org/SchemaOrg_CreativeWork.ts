// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AggregateRating } from "labs/SchemaOrg_AggregateRating.ts";
import type { SchemaOrg_AlignmentObject } from "labs/SchemaOrg_AlignmentObject.ts";
import type { SchemaOrg_Audience } from "labs/SchemaOrg_Audience.ts";
import type { SchemaOrg_AudioObject } from "labs/SchemaOrg_AudioObject.ts";
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_Claim } from "labs/SchemaOrg_Claim.ts";
import type { SchemaOrg_Clip } from "labs/SchemaOrg_Clip.ts";
import type { SchemaOrg_Comment } from "labs/SchemaOrg_Comment.ts";
import type { SchemaOrg_CorrectionComment } from "labs/SchemaOrg_CorrectionComment.ts";
import type { SchemaOrg_Country } from "labs/SchemaOrg_Country.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_DefinedTerm } from "labs/SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Demand } from "labs/SchemaOrg_Demand.ts";
import type { SchemaOrg_Duration } from "labs/SchemaOrg_Duration.ts";
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";
import type { SchemaOrg_Grant } from "labs/SchemaOrg_Grant.ts";
import type { SchemaOrg_ImageObject } from "labs/SchemaOrg_ImageObject.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_InteractionCounter } from "labs/SchemaOrg_InteractionCounter.ts";
import type { SchemaOrg_IPTCDigitalSourceEnumeration } from "labs/SchemaOrg_IPTCDigitalSourceEnumeration.ts";
import type { SchemaOrg_ItemList } from "labs/SchemaOrg_ItemList.ts";
import type { SchemaOrg_Language } from "labs/SchemaOrg_Language.ts";
import type { SchemaOrg_MediaObject } from "labs/SchemaOrg_MediaObject.ts";
import type { SchemaOrg_MusicRecording } from "labs/SchemaOrg_MusicRecording.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Offer } from "labs/SchemaOrg_Offer.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "labs/SchemaOrg_Place.ts";
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_PublicationEvent } from "labs/SchemaOrg_PublicationEvent.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Rating } from "labs/SchemaOrg_Rating.ts";
import type { SchemaOrg_Review } from "labs/SchemaOrg_Review.ts";
import type { SchemaOrg_SizeSpecification } from "labs/SchemaOrg_SizeSpecification.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";
import type { SchemaOrg_VideoObject } from "labs/SchemaOrg_VideoObject.ts";
import type { SchemaOrg_WebPage } from "labs/SchemaOrg_WebPage.ts";

/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 * @see https://schema.org/CreativeWork
 */
export const SCHEMA_ORG_CreativeWork = "https://schema.org/CreativeWork" as const;

/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 * @see https://schema.org/CreativeWork
 */
export interface SchemaOrg_CreativeWork extends SchemaOrg_Thing {
    /**
     * The subject matter of the content.
     * @see https://schema.org/about
     */
    about: Array<SchemaOrg_Thing>;
    /**
     * An abstract is a short description that summarizes a [[CreativeWork]].
     * @see https://schema.org/abstract
     */
    abstract: Array<SchemaOrg_Text>;
    /**
     * The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessMode-vocabulary).
     * @see https://schema.org/accessMode
     */
    accessMode: Array<SchemaOrg_Text>;
    /**
     * A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessModeSufficient-vocabulary).
     * @see https://schema.org/accessModeSufficient
     */
    accessModeSufficient: Array<SchemaOrg_ItemList>;
    /**
     * Indicates that the resource is compatible with the referenced accessibility API. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityAPI-vocabulary).
     * @see https://schema.org/accessibilityAPI
     */
    accessibilityAPI: Array<SchemaOrg_Text>;
    /**
     * Identifies input methods that are sufficient to fully control the described resource. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityControl-vocabulary).
     * @see https://schema.org/accessibilityControl
     */
    accessibilityControl: Array<SchemaOrg_Text>;
    /**
     * Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityFeature-vocabulary).
     * @see https://schema.org/accessibilityFeature
     */
    accessibilityFeature: Array<SchemaOrg_Text>;
    /**
     * A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityHazard-vocabulary).
     * @see https://schema.org/accessibilityHazard
     */
    accessibilityHazard: Array<SchemaOrg_Text>;
    /**
     * A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed".
     * @see https://schema.org/accessibilitySummary
     */
    accessibilitySummary: Array<SchemaOrg_Text>;
    /**
     * Specifies the Person that is legally accountable for the CreativeWork.
     * @see https://schema.org/accountablePerson
     */
    accountablePerson: Array<SchemaOrg_Person>;
    /**
     * Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.
     * @see https://schema.org/acquireLicensePage
     */
    acquireLicensePage: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     * @see https://schema.org/aggregateRating
     */
    aggregateRating: Array<SchemaOrg_AggregateRating>;
    /**
     * A secondary title of the CreativeWork.
     * @see https://schema.org/alternativeHeadline
     */
    alternativeHeadline: Array<SchemaOrg_Text>;
    /**
     * Indicates a page or other link involved in archival of a [[CreativeWork]]. In the case of [[MediaReview]], the items in a [[MediaReviewItem]] may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content.
     * @see https://schema.org/archivedAt
     */
    archivedAt: Array<SchemaOrg_WebPage | SchemaOrg_URL>;
    /**
     * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
     * @see https://schema.org/assesses
     */
    assesses: Array<SchemaOrg_DefinedTerm | SchemaOrg_Text>;
    /**
     * A media object that encodes this CreativeWork. This property is a synonym for encoding.
     * @see https://schema.org/associatedMedia
     */
    associatedMedia: Array<SchemaOrg_MediaObject>;
    /**
     * An intended audience, i.e. a group for whom something was created.
     * @see https://schema.org/audience
     */
    audience: Array<SchemaOrg_Audience>;
    /**
     * An embedded audio object.
     * @see https://schema.org/audio
     */
    audio: Array<SchemaOrg_MusicRecording | SchemaOrg_AudioObject | SchemaOrg_Clip>;
    /**
     * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
     * @see https://schema.org/author
     */
    author: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * An award won by or for this item.
     * @see https://schema.org/award
     */
    award: Array<SchemaOrg_Text>;
    /**
     * Awards won by or for this item.
     * @see https://schema.org/awards
     */
    awards: Array<SchemaOrg_Text>;
    /**
     * Fictional person connected with a creative work.
     * @see https://schema.org/character
     */
    character: Array<SchemaOrg_Person>;
    /**
     * A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
     * @see https://schema.org/citation
     */
    citation: Array<SchemaOrg_CreativeWork | SchemaOrg_Text>;
    /**
     * Comments, typically from users.
     * @see https://schema.org/comment
     */
    comment: Array<SchemaOrg_Comment>;
    /**
     * The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
     * @see https://schema.org/commentCount
     */
    commentCount: Array<SchemaOrg_Integer>;
    /**
     * Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\n\nFor example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ".
     * @see https://schema.org/conditionsOfAccess
     */
    conditionsOfAccess: Array<SchemaOrg_Text>;
    /**
     * The location depicted or described in the content. For example, the location in a photograph or painting.
     * @see https://schema.org/contentLocation
     */
    contentLocation: Array<SchemaOrg_Place>;
    /**
     * Official rating of a piece of content&#x2014;for example, 'MPAA PG-13'.
     * @see https://schema.org/contentRating
     */
    contentRating: Array<SchemaOrg_Rating | SchemaOrg_Text>;
    /**
     * The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.
     * @see https://schema.org/contentReferenceTime
     */
    contentReferenceTime: Array<SchemaOrg_DateTime>;
    /**
     * A secondary contributor to the CreativeWork or Event.
     * @see https://schema.org/contributor
     */
    contributor: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The party holding the legal copyright to the CreativeWork.
     * @see https://schema.org/copyrightHolder
     */
    copyrightHolder: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.
     * @see https://schema.org/copyrightNotice
     */
    copyrightNotice: Array<SchemaOrg_Text>;
    /**
     * The year during which the claimed copyright for the CreativeWork was first asserted.
     * @see https://schema.org/copyrightYear
     */
    copyrightYear: Array<SchemaOrg_Number>;
    /**
     * Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document.
     * @see https://schema.org/correction
     */
    correction: Array<SchemaOrg_Text | SchemaOrg_CorrectionComment | SchemaOrg_URL>;
    /**
     * The country of origin of something, including products as well as creative  works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     * @see https://schema.org/countryOfOrigin
     */
    countryOfOrigin: Array<SchemaOrg_Country>;
    /**
     * The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.
     * @see https://schema.org/creativeWorkStatus
     */
    creativeWorkStatus: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
     * @see https://schema.org/creator
     */
    creator: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.
     * @see https://schema.org/creditText
     */
    creditText: Array<SchemaOrg_Text>;
    /**
     * The date on which the CreativeWork was created or the item was added to a DataFeed.
     * @see https://schema.org/dateCreated
     */
    dateCreated: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
     * @see https://schema.org/dateModified
     */
    dateModified: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * Date of first publication or broadcast. For example the date a [[CreativeWork]] was broadcast or a [[Certification]] was issued.
     * @see https://schema.org/datePublished
     */
    datePublished: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * Indicates an IPTCDigitalSourceEnumeration code indicating the nature of the digital source(s) for some [[CreativeWork]].
     * @see https://schema.org/digitalSourceType
     */
    digitalSourceType: Array<SchemaOrg_IPTCDigitalSourceEnumeration>;
    /**
     * A link to the page containing the comments of the CreativeWork.
     * @see https://schema.org/discussionUrl
     */
    discussionUrl: Array<SchemaOrg_URL>;
    /**
     * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing a specific edit / edition for a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" whose [[titleEIDR]] is "10.5240/7EC7-228A-510A-053E-CBB8-J" has several edits, e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".
     *
     * Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
     * @see https://schema.org/editEIDR
     */
    editEIDR: Array<SchemaOrg_Text | SchemaOrg_URL>;
    /**
     * Specifies the Person who edited the CreativeWork.
     * @see https://schema.org/editor
     */
    editor: Array<SchemaOrg_Person>;
    /**
     * An alignment to an established educational framework.
     *
     * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
     * @see https://schema.org/educationalAlignment
     */
    educationalAlignment: Array<SchemaOrg_AlignmentObject>;
    /**
     * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
     * @see https://schema.org/educationalLevel
     */
    educationalLevel: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL>;
    /**
     * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
     * @see https://schema.org/educationalUse
     */
    educationalUse: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.
     * @see https://schema.org/encoding
     */
    encoding: Array<SchemaOrg_MediaObject>;
    /**
     * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.
     *
     * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
     *
     * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
     * @see https://schema.org/encodingFormat
     */
    encodingFormat: Array<SchemaOrg_Text | SchemaOrg_URL>;
    /**
     * A media object that encodes this CreativeWork.
     * @see https://schema.org/encodings
     */
    encodings: Array<SchemaOrg_MediaObject>;
    /**
     * A creative work that this work is an example/instance/realization/derivation of.
     * @see https://schema.org/exampleOfWork
     */
    exampleOfWork: Array<SchemaOrg_CreativeWork>;
    /**
     * Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [[Certification]] the validity has expired.
     * @see https://schema.org/expires
     */
    expires: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content, e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
     * @see https://schema.org/fileFormat
     */
    fileFormat: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * A person or organization that supports (sponsors) something through some kind of financial contribution.
     * @see https://schema.org/funder
     */
    funder: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
     * @see https://schema.org/funding
     */
    funding: Array<SchemaOrg_Grant>;
    /**
     * Genre of the creative work, broadcast channel or group.
     * @see https://schema.org/genre
     */
    genre: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).
     * @see https://schema.org/hasPart
     */
    hasPart: Array<SchemaOrg_CreativeWork>;
    /**
     * Headline of the article.
     * @see https://schema.org/headline
     */
    headline: Array<SchemaOrg_Text>;
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * @see https://schema.org/inLanguage
     */
    inLanguage: Array<SchemaOrg_Language | SchemaOrg_Text>;
    /**
     * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
     * @see https://schema.org/interactionStatistic
     */
    interactionStatistic: Array<SchemaOrg_InteractionCounter>;
    /**
     * The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
     * @see https://schema.org/interactivityType
     */
    interactivityType: Array<SchemaOrg_Text>;
    /**
     * Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]].
     * @see https://schema.org/interpretedAsClaim
     */
    interpretedAsClaim: Array<SchemaOrg_Claim>;
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     * @see https://schema.org/isAccessibleForFree
     */
    isAccessibleForFree: Array<SchemaOrg_Boolean>;
    /**
     * A resource from which this work is derived or from which it is a modification or adaptation.
     * @see https://schema.org/isBasedOn
     */
    isBasedOn: Array<SchemaOrg_URL | SchemaOrg_Product | SchemaOrg_CreativeWork>;
    /**
     * A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
     * @see https://schema.org/isBasedOnUrl
     */
    isBasedOnUrl: Array<SchemaOrg_URL | SchemaOrg_Product | SchemaOrg_CreativeWork>;
    /**
     * Indicates whether this content is family friendly.
     * @see https://schema.org/isFamilyFriendly
     */
    isFamilyFriendly: Array<SchemaOrg_Boolean>;
    /**
     * Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.
     * @see https://schema.org/isPartOf
     */
    isPartOf: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
     * @see https://schema.org/keywords
     */
    keywords: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL>;
    /**
     * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
     * @see https://schema.org/learningResourceType
     */
    learningResourceType: Array<SchemaOrg_DefinedTerm | SchemaOrg_Text>;
    /**
     * A license document that applies to this content, typically indicated by URL.
     * @see https://schema.org/license
     */
    license: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
     * @see https://schema.org/locationCreated
     */
    locationCreated: Array<SchemaOrg_Place>;
    /**
     * Indicates the primary entity described in some page or other CreativeWork.
     * @see https://schema.org/mainEntity
     */
    mainEntity: Array<SchemaOrg_Thing>;
    /**
     * A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always  possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
     * @see https://schema.org/maintainer
     */
    maintainer: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A material that something is made from, e.g. leather, wool, cotton, paper.
     * @see https://schema.org/material
     */
    material: Array<SchemaOrg_URL | SchemaOrg_Product | SchemaOrg_Text>;
    /**
     * The quantity of the materials being described or an expression of the physical space they occupy.
     * @see https://schema.org/materialExtent
     */
    materialExtent: Array<SchemaOrg_Text | SchemaOrg_QuantitativeValue>;
    /**
     * Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
     * @see https://schema.org/mentions
     */
    mentions: Array<SchemaOrg_Thing>;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     * @see https://schema.org/offers
     */
    offers: Array<SchemaOrg_Demand | SchemaOrg_Offer>;
    /**
     * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
     * @see https://schema.org/pattern
     */
    pattern: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * The position of an item in a series or sequence of items.
     * @see https://schema.org/position
     */
    position: Array<SchemaOrg_Integer | SchemaOrg_Text>;
    /**
     * The person or organization who produced the work (e.g. music album, movie, TV/radio series etc.).
     * @see https://schema.org/producer
     */
    producer: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * @see https://schema.org/provider
     */
    provider: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A publication event associated with the item.
     * @see https://schema.org/publication
     */
    publication: Array<SchemaOrg_PublicationEvent>;
    /**
     * The publisher of the creative work.
     * @see https://schema.org/publisher
     */
    publisher: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The publishing division which published the comic.
     * @see https://schema.org/publisherImprint
     */
    publisherImprint: Array<SchemaOrg_Organization>;
    /**
     * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
     * @see https://schema.org/publishingPrinciples
     */
    publishingPrinciples: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
     * @see https://schema.org/recordedAt
     */
    recordedAt: Array<SchemaOrg_Event>;
    /**
     * The place and time the release was issued, expressed as a PublicationEvent.
     * @see https://schema.org/releasedEvent
     */
    releasedEvent: Array<SchemaOrg_PublicationEvent>;
    /**
     * A review of the item.
     * @see https://schema.org/review
     */
    review: Array<SchemaOrg_Review>;
    /**
     * Review of the item.
     * @see https://schema.org/reviews
     */
    reviews: Array<SchemaOrg_Review>;
    /**
     * Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to
     *     indicate the use of a specific schema.org release, e.g. ```10.0``` as a simple string, or more explicitly via URL, ```https://schema.org/docs/releases.html#v10.0```. There may be situations in which other schemas might usefully be referenced this way, e.g. ```http://dublincore.org/specifications/dublin-core/dces/1999-07-02/``` but this has not been carefully explored in the community.
     * @see https://schema.org/schemaVersion
     */
    schemaVersion: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]].
     * @see https://schema.org/sdDatePublished
     */
    sdDatePublished: Array<SchemaOrg_Date>;
    /**
     * A license document that applies to this structured data, typically indicated by URL.
     * @see https://schema.org/sdLicense
     */
    sdLicense: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
    /**
     * Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The
     * [[sdPublisher]] property helps make such practices more explicit.
     * @see https://schema.org/sdPublisher
     */
    sdPublisher: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable.
     * @see https://schema.org/size
     */
    size: Array<SchemaOrg_QuantitativeValue | SchemaOrg_SizeSpecification | SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * The Organization on whose behalf the creator was working.
     * @see https://schema.org/sourceOrganization
     */
    sourceOrganization: Array<SchemaOrg_Organization>;
    /**
     * The "spatial" property can be used in cases when more specific properties
     * (e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.
     * @see https://schema.org/spatial
     */
    spatial: Array<SchemaOrg_Place>;
    /**
     * The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
     *       contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
     *       areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
     * @see https://schema.org/spatialCoverage
     */
    spatialCoverage: Array<SchemaOrg_Place>;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     * @see https://schema.org/sponsor
     */
    sponsor: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
     * @see https://schema.org/teaches
     */
    teaches: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
    /**
     * The "temporal" property can be used in cases where more specific properties
     * (e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.
     * @see https://schema.org/temporal
     */
    temporal: Array<SchemaOrg_Text | SchemaOrg_DateTime>;
    /**
     * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In
     *       the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content, e.g. ScholarlyArticle, Book, TVSeries or TVEpisode, may indicate their temporalCoverage in broader terms - textually or via well-known URL.
     *       Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
     *
     * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
     * @see https://schema.org/temporalCoverage
     */
    temporalCoverage: Array<SchemaOrg_URL | SchemaOrg_Text | SchemaOrg_DateTime>;
    /**
     * The textual content of this CreativeWork.
     * @see https://schema.org/text
     */
    text: Array<SchemaOrg_Text>;
    /**
     * Thumbnail image for an image or video.
     * @see https://schema.org/thumbnail
     */
    thumbnail: Array<SchemaOrg_ImageObject>;
    /**
     * A thumbnail image relevant to the Thing.
     * @see https://schema.org/thumbnailUrl
     */
    thumbnailUrl: Array<SchemaOrg_URL>;
    /**
     * Approximate or typical time it usually takes to work with or through the content of this work for the typical or target audience.
     * @see https://schema.org/timeRequired
     */
    timeRequired: Array<SchemaOrg_Duration>;
    /**
     * The work that this work has been translated from. E.g. 物种起源 is a translationOf “On the Origin of Species”.
     * @see https://schema.org/translationOfWork
     */
    translationOfWork: Array<SchemaOrg_CreativeWork>;
    /**
     * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
     * @see https://schema.org/translator
     */
    translator: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The typical expected age range, e.g. '7-9', '11-'.
     * @see https://schema.org/typicalAgeRange
     */
    typicalAgeRange: Array<SchemaOrg_Text>;
    /**
     * The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
     *
     * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
     * @see https://schema.org/usageInfo
     */
    usageInfo: Array<SchemaOrg_CreativeWork | SchemaOrg_URL>;
    /**
     * The version of the CreativeWork embodied by a specified resource.
     * @see https://schema.org/version
     */
    version: Array<SchemaOrg_Number | SchemaOrg_Text>;
    /**
     * An embedded video object.
     * @see https://schema.org/video
     */
    video: Array<SchemaOrg_VideoObject | SchemaOrg_Clip>;
    /**
     * Example/instance/realization/derivation of the concept of this creative work. E.g. the paperback edition, first edition, or e-book.
     * @see https://schema.org/workExample
     */
    workExample: Array<SchemaOrg_CreativeWork>;
    /**
     * A work that is a translation of the content of this work. E.g. 西遊記 has an English workTranslation “Journey to the West”, a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese  translation Tây du ký bình khảo.
     * @see https://schema.org/workTranslation
     */
    workTranslation: Array<SchemaOrg_CreativeWork>;
}
