// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * The term "story" is any indivisible, re-printable
 *     	unit of a comic, including the interior stories, covers, and backmatter. Most
 *     	comics have at least two stories: a cover (ComicCoverArt) and an interior story.
 * @see https://schema.org/ComicStory
 */
export const SCHEMA_ORG_ComicStory = "https://schema.org/ComicStory" as const;

/**
 * The term "story" is any indivisible, re-printable
 *     	unit of a comic, including the interior stories, covers, and backmatter. Most
 *     	comics have at least two stories: a cover (ComicCoverArt) and an interior story.
 * @see https://schema.org/ComicStory
 */
export interface SchemaOrg_ComicStory extends SchemaOrg_CreativeWork {
  /**
   * The primary artist for a work
   *     	in a medium other than pencils or digital line art--for example, if the
   *     	primary artwork is done in watercolors or digital paints.
   * @see https://schema.org/artist
   */
  artist?: Array<SchemaOrg_Person>;
  /**
   * The individual who adds color to inked drawings.
   * @see https://schema.org/colorist
   */
  colorist?: Array<SchemaOrg_Person>;
  /**
   * The individual who traces over the pencil drawings in ink after pencils are complete.
   * @see https://schema.org/inker
   */
  inker?: Array<SchemaOrg_Person>;
  /**
   * The individual who adds lettering, including speech balloons and sound effects, to artwork.
   * @see https://schema.org/letterer
   */
  letterer?: Array<SchemaOrg_Person>;
  /**
   * The individual who draws the primary narrative artwork.
   * @see https://schema.org/penciler
   */
  penciler?: Array<SchemaOrg_Person>;
}
