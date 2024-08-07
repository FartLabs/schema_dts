// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ImageObject } from "labs/SchemaOrg_ImageObject.ts";

/**
 * A specific and exact (byte-for-byte) version of an [[ImageObject]]. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata (e.g. XMP, EXIF) the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity.
 * @see https://schema.org/ImageObjectSnapshot
 */
export const SCHEMA_ORG_ImageObjectSnapshot = "https://schema.org/ImageObjectSnapshot" as const;

/**
 * A specific and exact (byte-for-byte) version of an [[ImageObject]]. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata (e.g. XMP, EXIF) the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity.
 * @see https://schema.org/ImageObjectSnapshot
 */
export type SchemaOrg_ImageObjectSnapshot = SchemaOrg_ImageObject;
