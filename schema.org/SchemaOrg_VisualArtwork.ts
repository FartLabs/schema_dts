// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Distance } from "./SchemaOrg_Distance.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A work of art that is primarily visual in character.
 * @see https://schema.org/VisualArtwork
 */
export const SCHEMA_ORG_VisualArtwork = "https://schema.org/VisualArtwork" as const;

/**
 * A work of art that is primarily visual in character.
 * @see https://schema.org/VisualArtwork
 */
export interface SchemaOrg_VisualArtwork extends SchemaOrg_CreativeWork {
    /**
     * The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20").
     * @see https://schema.org/artEdition
     */
    artEdition?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * The material used. (E.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)
     * @see https://schema.org/artMedium
     */
    artMedium?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.
     * @see https://schema.org/artform
     */
    artform?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The primary artist for a work
     *     	in a medium other than pencils or digital line art--for example, if the
     *     	primary artwork is done in watercolors or digital paints.
     * @see https://schema.org/artist
     */
    artist?: Array<SchemaOrg_Person>;
    /**
     * The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc.
     * @see https://schema.org/artworkSurface
     */
    artworkSurface?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The individual who adds color to inked drawings.
     * @see https://schema.org/colorist
     */
    colorist?: Array<SchemaOrg_Person>;
    /**
     * The depth of the item.
     * @see https://schema.org/depth
     */
    depth?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Distance>;
    /**
     * The height of the item.
     * @see https://schema.org/height
     */
    height?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Distance>;
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
     * A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.
     * @see https://schema.org/surface
     */
    surface?: Array<SchemaOrg_Text | SchemaOrg_URL>;
    /**
     * The width of the item.
     * @see https://schema.org/width
     */
    width?: Array<SchemaOrg_Distance | SchemaOrg_QuantitativeValue>;
}
