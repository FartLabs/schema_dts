// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A work of art that is primarily visual in character. */
export interface ClassVisualArtwork extends ClassCreativeWork {
  /** The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20"). */
  artEdition: Array<string | { "@id": string }>;
  /** The material used. (E.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.) */
  artMedium: Array<string | { "@id": string }>;
  /** e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc. */
  artform: Array<string | { "@id": string }>;
  /**
   * The primary artist for a work
   *     	in a medium other than pencils or digital line art--for example, if the
   *     	primary artwork is done in watercolors or digital paints.
   */
  artist: Array<{ "@id": string }>;
  /** The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc. */
  artworkSurface: Array<string | { "@id": string }>;
  /** The individual who adds color to inked drawings. */
  colorist: Array<{ "@id": string }>;
  /** The depth of the item. */
  depth: Array<{ "@id": string }>;
  /** The height of the item. */
  height: Array<{ "@id": string }>;
  /** The individual who traces over the pencil drawings in ink after pencils are complete. */
  inker: Array<{ "@id": string }>;
  /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
  letterer: Array<{ "@id": string }>;
  /** The individual who draws the primary narrative artwork. */
  penciler: Array<{ "@id": string }>;
  /** A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc. */
  surface: Array<string | { "@id": string }>;
  /** The width of the item. */
  width: Array<{ "@id": string }>;
}
