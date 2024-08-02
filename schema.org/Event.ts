// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects. */
export interface ClassEvent extends ClassThing {
  /** The subject matter of the content. */
  about: Array<{ "@id": string }>;
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** The overall rating, based on a collection of reviews or ratings, of the item. */
  aggregateRating: Array<{ "@id": string }>;
  /** A person or organization attending the event. */
  attendee: Array<{ "@id": string }>;
  /** A person attending the event. */
  attendees: Array<{ "@id": string }>;
  /** An intended audience, i.e. a group for whom something was created. */
  audience: Array<{ "@id": string }>;
  /** The person or organization who wrote a composition, or who is the composer of a work performed at some event. */
  composer: Array<{ "@id": string }>;
  /** A secondary contributor to the CreativeWork or Event. */
  contributor: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** The time admission will commence. */
  doorTime: Array<string>;
  /** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  duration: Array<{ "@id": string }>;
  /** The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). */
  endDate: Array<string>;
  /** The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix. */
  eventAttendanceMode: Array<{ "@id": string }>;
  /**
   * Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of
   *       repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly
   *       gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that
   *       is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated
   *       [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months
   *       or seasons.
   */
  eventSchedule: Array<{ "@id": string }>;
  /** An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled. */
  eventStatus: Array<{ "@id": string }>;
  /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
  funder: Array<{ "@id": string }>;
  /** A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]]. */
  funding: Array<{ "@id": string }>;
  /** The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]]. */
  inLanguage: Array<string | { "@id": string }>;
  /** A flag to signal that the item, event, or place is accessible for free. */
  isAccessibleForFree: Array<boolean>;
  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property. */
  keywords: Array<string | { "@id": string }>;
  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
  location: Array<string | { "@id": string }>;
  /** The total number of individuals that may attend an event or venue. */
  maximumAttendeeCapacity: Array<{ "@id": string }>;
  /** The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). */
  maximumPhysicalAttendeeCapacity: Array<{ "@id": string }>;
  /** The maximum virtual attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). */
  maximumVirtualAttendeeCapacity: Array<{ "@id": string }>;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   */
  offers: Array<{ "@id": string }>;
  /** An organizer of an Event. */
  organizer: Array<{ "@id": string }>;
  /** A performer at the event&#x2014;for example, a presenter, musician, musical group or actor. */
  performer: Array<{ "@id": string }>;
  /** The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor. */
  performers: Array<{ "@id": string }>;
  /** Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated. */
  previousStartDate: Array<string>;
  /** The CreativeWork that captured all or part of this Event. */
  recordedIn: Array<{ "@id": string }>;
  /** The number of attendee places for an event that remain unallocated. */
  remainingAttendeeCapacity: Array<{ "@id": string }>;
  /** A review of the item. */
  review: Array<{ "@id": string }>;
  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
  sponsor: Array<{ "@id": string }>;
  /** The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). */
  startDate: Array<string>;
  /** An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference. */
  subEvent: Array<{ "@id": string }>;
  /** Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference. */
  subEvents: Array<{ "@id": string }>;
  /** An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent. */
  superEvent: Array<{ "@id": string }>;
  /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event. */
  translator: Array<{ "@id": string }>;
  /** The typical expected age range, e.g. '7-9', '11-'. */
  typicalAgeRange: Array<string>;
  /**
   * A work featured in some event, e.g. exhibited in an ExhibitionEvent.
   *        Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
   */
  workFeatured: Array<{ "@id": string }>;
  /** A work performed in some event, for example a play performed in a TheaterEvent. */
  workPerformed: Array<{ "@id": string }>;
}
