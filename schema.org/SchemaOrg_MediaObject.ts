// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_Claim } from "./SchemaOrg_Claim.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Distance } from "./SchemaOrg_Distance.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_GeoShape } from "./SchemaOrg_GeoShape.ts";
import type { SchemaOrg_MediaSubscription } from "./SchemaOrg_MediaSubscription.ts";
import type { SchemaOrg_NewsArticle } from "./SchemaOrg_NewsArticle.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A media object, such as an image, video, audio, or text object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 * @see https://schema.org/MediaObject
 */
export const SCHEMA_ORG_MediaObject = "https://schema.org/MediaObject" as const;

/**
 * A media object, such as an image, video, audio, or text object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 * @see https://schema.org/MediaObject
 */
export interface SchemaOrg_MediaObject extends SchemaOrg_CreativeWork {
  /**
   * A NewsArticle associated with the Media Object.
   * @see https://schema.org/associatedArticle
   */
  associatedArticle?: Array<SchemaOrg_NewsArticle>;
  /**
   * The bitrate of the media object.
   * @see https://schema.org/bitrate
   */
  bitrate?: Array<SchemaOrg_Text>;
  /**
   * File size in (mega/kilo)bytes.
   * @see https://schema.org/contentSize
   */
  contentSize?: Array<SchemaOrg_Text>;
  /**
   * Actual bytes of the media object, for example the image file or video file.
   * @see https://schema.org/contentUrl
   */
  contentUrl?: Array<SchemaOrg_URL>;
  /**
   * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
   * @see https://schema.org/duration
   */
  duration?: Array<SchemaOrg_Duration>;
  /**
   * A URL pointing to a player for a specific video. In general, this is the information in the ```src``` element of an ```embed``` tag and should not be the same as the content of the ```loc``` tag.
   * @see https://schema.org/embedUrl
   */
  embedUrl?: Array<SchemaOrg_URL>;
  /**
   * The CreativeWork encoded by this media object.
   * @see https://schema.org/encodesCreativeWork
   */
  encodesCreativeWork?: Array<SchemaOrg_CreativeWork>;
  /**
   * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.
   *
   * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
   *
   * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
   * @see https://schema.org/encodingFormat
   */
  encodingFormat?: Array<SchemaOrg_Text | SchemaOrg_URL>;
  /**
   * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/endTime
   */
  endTime?: Array<SchemaOrg_Time | SchemaOrg_DateTime>;
  /**
   * The height of the item.
   * @see https://schema.org/height
   */
  height?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Distance>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   * @see https://schema.org/ineligibleRegion
   */
  ineligibleRegion?: Array<
    SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place
  >;
  /**
   * Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]].
   * @see https://schema.org/interpretedAsClaim
   */
  interpretedAsClaim?: Array<SchemaOrg_Claim>;
  /**
   * Player type required&#x2014;for example, Flash or Silverlight.
   * @see https://schema.org/playerType
   */
  playerType?: Array<SchemaOrg_Text>;
  /**
   * The production company or studio responsible for the item, e.g. series, video game, episode etc.
   * @see https://schema.org/productionCompany
   */
  productionCompany?: Array<SchemaOrg_Organization>;
  /**
   * The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166).
   * @see https://schema.org/regionsAllowed
   */
  regionsAllowed?: Array<SchemaOrg_Place>;
  /**
   * Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
   * @see https://schema.org/requiresSubscription
   */
  requiresSubscription?: Array<SchemaOrg_Boolean | SchemaOrg_MediaSubscription>;
  /**
   * The [SHA-2](https://en.wikipedia.org/wiki/SHA-2) SHA256 hash of the content of the item. For example, a zero-length input has value 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'.
   * @see https://schema.org/sha256
   */
  sha256?: Array<SchemaOrg_Text>;
  /**
   * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/startTime
   */
  startTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
  /**
   * Date (including time if available) when this media object was uploaded to this site.
   * @see https://schema.org/uploadDate
   */
  uploadDate?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
  /**
   * The width of the item.
   * @see https://schema.org/width
   */
  width?: Array<SchemaOrg_Distance | SchemaOrg_QuantitativeValue>;
}
