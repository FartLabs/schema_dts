// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_PublicationIssue } from "./SchemaOrg_PublicationIssue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Individual comic issues are serially published as
 *     	part of a larger series. For the sake of consistency, even one-shot issues
 *     	belong to a series comprised of a single issue. All comic issues can be
 *     	uniquely identified by: the combination of the name and volume number of the
 *     	series to which the issue belongs; the issue number; and the variant
 *     	description of the issue (if any).
 * @see https://schema.org/ComicIssue
 */
export const SCHEMA_ORG_ComicIssue = "https://schema.org/ComicIssue" as const;

/**
 * Individual comic issues are serially published as
 *     	part of a larger series. For the sake of consistency, even one-shot issues
 *     	belong to a series comprised of a single issue. All comic issues can be
 *     	uniquely identified by: the combination of the name and volume number of the
 *     	series to which the issue belongs; the issue number; and the variant
 *     	description of the issue (if any).
 * @see https://schema.org/ComicIssue
 */
export interface SchemaOrg_ComicIssue extends SchemaOrg_PublicationIssue {
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
  /**
   * A description of the variant cover
   *     	for the issue, if the issue is a variant printing. For example, "Bryan Hitch
   *     	Variant Cover" or "2nd Printing Variant".
   * @see https://schema.org/variantCover
   */
  variantCover?: Array<SchemaOrg_Text>;
}
