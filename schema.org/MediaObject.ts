// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A media object, such as an image, video, audio, or text object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's). */
export interface ClassMediaObject extends ClassCreativeWork {
  /** A NewsArticle associated with the Media Object. */
  associatedArticle: Array<{ "@id": string }>;
  /** The bitrate of the media object. */
  bitrate: Array<string>;
  /** File size in (mega/kilo)bytes. */
  contentSize: Array<string>;
  /** Actual bytes of the media object, for example the image file or video file. */
  contentUrl: Array<{ "@id": string }>;
  /** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  duration: Array<{ "@id": string }>;
  /** A URL pointing to a player for a specific video. In general, this is the information in the ```src``` element of an ```embed``` tag and should not be the same as the content of the ```loc``` tag. */
  embedUrl: Array<{ "@id": string }>;
  /** The CreativeWork encoded by this media object. */
  encodesCreativeWork: Array<{ "@id": string }>;
  /**
   * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.
   *
   * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
   *
   * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
   */
  encodingFormat: Array<string | { "@id": string }>;
  /** The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. */
  endTime: Array<string>;
  /** The height of the item. */
  height: Array<{ "@id": string }>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   */
  ineligibleRegion: Array<string | { "@id": string }>;
  /** Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]]. */
  interpretedAsClaim: Array<{ "@id": string }>;
  /** Player type required&#x2014;for example, Flash or Silverlight. */
  playerType: Array<string>;
  /** The production company or studio responsible for the item, e.g. series, video game, episode etc. */
  productionCompany: Array<{ "@id": string }>;
  /** The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166). */
  regionsAllowed: Array<{ "@id": string }>;
  /** Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no'). */
  requiresSubscription: Array<boolean | { "@id": string }>;
  /** The [SHA-2](https://en.wikipedia.org/wiki/SHA-2) SHA256 hash of the content of the item. For example, a zero-length input has value 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'. */
  sha256: Array<string>;
  /** The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. */
  startTime: Array<string>;
  /** Date (including time if available) when this media object was uploaded to this site. */
  uploadDate: Array<string>;
  /** The width of the item. */
  width: Array<{ "@id": string }>;
}
