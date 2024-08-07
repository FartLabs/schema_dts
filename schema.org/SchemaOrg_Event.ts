// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AggregateRating } from "labs/SchemaOrg_AggregateRating.ts";
import type { SchemaOrg_Audience } from "labs/SchemaOrg_Audience.ts";
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_DefinedTerm } from "labs/SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Demand } from "labs/SchemaOrg_Demand.ts";
import type { SchemaOrg_Duration } from "labs/SchemaOrg_Duration.ts";
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";
import type { SchemaOrg_EventAttendanceModeEnumeration } from "labs/SchemaOrg_EventAttendanceModeEnumeration.ts";
import type { SchemaOrg_EventStatusType } from "labs/SchemaOrg_EventStatusType.ts";
import type { SchemaOrg_Grant } from "labs/SchemaOrg_Grant.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_Language } from "labs/SchemaOrg_Language.ts";
import type { SchemaOrg_Offer } from "labs/SchemaOrg_Offer.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "labs/SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "labs/SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_Review } from "labs/SchemaOrg_Review.ts";
import type { SchemaOrg_Schedule } from "labs/SchemaOrg_Schedule.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_Time } from "labs/SchemaOrg_Time.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";
import type { SchemaOrg_VirtualLocation } from "labs/SchemaOrg_VirtualLocation.ts";

/**
 * An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects.
 * @see https://schema.org/Event
 */
export const SCHEMA_ORG_Event = "https://schema.org/Event" as const;

/**
 * An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects.
 * @see https://schema.org/Event
 */
export interface SchemaOrg_Event extends SchemaOrg_Thing {
    /**
     * The subject matter of the content.
     * @see https://schema.org/about
     */
    about: Array<SchemaOrg_Thing>;
    /**
     * An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/actor
     */
    actor: Array<SchemaOrg_Person>;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     * @see https://schema.org/aggregateRating
     */
    aggregateRating: Array<SchemaOrg_AggregateRating>;
    /**
     * A person or organization attending the event.
     * @see https://schema.org/attendee
     */
    attendee: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A person attending the event.
     * @see https://schema.org/attendees
     */
    attendees: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * An intended audience, i.e. a group for whom something was created.
     * @see https://schema.org/audience
     */
    audience: Array<SchemaOrg_Audience>;
    /**
     * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
     * @see https://schema.org/composer
     */
    composer: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A secondary contributor to the CreativeWork or Event.
     * @see https://schema.org/contributor
     */
    contributor: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/director
     */
    director: Array<SchemaOrg_Person>;
    /**
     * The time admission will commence.
     * @see https://schema.org/doorTime
     */
    doorTime: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
    /**
     * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     * @see https://schema.org/duration
     */
    duration: Array<SchemaOrg_Duration>;
    /**
     * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * @see https://schema.org/endDate
     */
    endDate: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
     * @see https://schema.org/eventAttendanceMode
     */
    eventAttendanceMode: Array<SchemaOrg_EventAttendanceModeEnumeration>;
    /**
     * Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of
     *       repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly
     *       gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that
     *       is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated
     *       [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months
     *       or seasons.
     * @see https://schema.org/eventSchedule
     */
    eventSchedule: Array<SchemaOrg_Schedule>;
    /**
     * An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.
     * @see https://schema.org/eventStatus
     */
    eventStatus: Array<SchemaOrg_EventStatusType>;
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
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * @see https://schema.org/inLanguage
     */
    inLanguage: Array<SchemaOrg_Language | SchemaOrg_Text>;
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     * @see https://schema.org/isAccessibleForFree
     */
    isAccessibleForFree: Array<SchemaOrg_Boolean>;
    /**
     * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
     * @see https://schema.org/keywords
     */
    keywords: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL>;
    /**
     * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
     * @see https://schema.org/location
     */
    location: Array<SchemaOrg_Text | SchemaOrg_VirtualLocation | SchemaOrg_Place | SchemaOrg_PostalAddress>;
    /**
     * The total number of individuals that may attend an event or venue.
     * @see https://schema.org/maximumAttendeeCapacity
     */
    maximumAttendeeCapacity: Array<SchemaOrg_Integer>;
    /**
     * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]).
     * @see https://schema.org/maximumPhysicalAttendeeCapacity
     */
    maximumPhysicalAttendeeCapacity: Array<SchemaOrg_Integer>;
    /**
     * The maximum virtual attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]).
     * @see https://schema.org/maximumVirtualAttendeeCapacity
     */
    maximumVirtualAttendeeCapacity: Array<SchemaOrg_Integer>;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     * @see https://schema.org/offers
     */
    offers: Array<SchemaOrg_Demand | SchemaOrg_Offer>;
    /**
     * An organizer of an Event.
     * @see https://schema.org/organizer
     */
    organizer: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.
     * @see https://schema.org/performer
     */
    performer: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.
     * @see https://schema.org/performers
     */
    performers: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.
     * @see https://schema.org/previousStartDate
     */
    previousStartDate: Array<SchemaOrg_Date>;
    /**
     * The CreativeWork that captured all or part of this Event.
     * @see https://schema.org/recordedIn
     */
    recordedIn: Array<SchemaOrg_CreativeWork>;
    /**
     * The number of attendee places for an event that remain unallocated.
     * @see https://schema.org/remainingAttendeeCapacity
     */
    remainingAttendeeCapacity: Array<SchemaOrg_Integer>;
    /**
     * A review of the item.
     * @see https://schema.org/review
     */
    review: Array<SchemaOrg_Review>;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     * @see https://schema.org/sponsor
     */
    sponsor: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * @see https://schema.org/startDate
     */
    startDate: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.
     * @see https://schema.org/subEvent
     */
    subEvent: Array<SchemaOrg_Event>;
    /**
     * Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
     * @see https://schema.org/subEvents
     */
    subEvents: Array<SchemaOrg_Event>;
    /**
     * An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.
     * @see https://schema.org/superEvent
     */
    superEvent: Array<SchemaOrg_Event>;
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
     * A work featured in some event, e.g. exhibited in an ExhibitionEvent.
     *        Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
     * @see https://schema.org/workFeatured
     */
    workFeatured: Array<SchemaOrg_CreativeWork>;
    /**
     * A work performed in some event, for example a play performed in a TheaterEvent.
     * @see https://schema.org/workPerformed
     */
    workPerformed: Array<SchemaOrg_CreativeWork>;
}
