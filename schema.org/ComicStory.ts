// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/**
 * The term "story" is any indivisible, re-printable
 *     	unit of a comic, including the interior stories, covers, and backmatter. Most
 *     	comics have at least two stories: a cover (ComicCoverArt) and an interior story.
 */
export interface ClassComicStory extends ClassCreativeWork {
  /**
   * The primary artist for a work
   *     	in a medium other than pencils or digital line art--for example, if the
   *     	primary artwork is done in watercolors or digital paints.
   */
  artist: Array<{ "@id": string }>;
  /** The individual who adds color to inked drawings. */
  colorist: Array<{ "@id": string }>;
  /** The individual who traces over the pencil drawings in ink after pencils are complete. */
  inker: Array<{ "@id": string }>;
  /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
  letterer: Array<{ "@id": string }>;
  /** The individual who draws the primary narrative artwork. */
  penciler: Array<{ "@id": string }>;
}
