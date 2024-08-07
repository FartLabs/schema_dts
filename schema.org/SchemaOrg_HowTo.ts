// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Duration } from "labs/SchemaOrg_Duration.ts";
import type { SchemaOrg_HowToSection } from "labs/SchemaOrg_HowToSection.ts";
import type { SchemaOrg_HowToStep } from "labs/SchemaOrg_HowToStep.ts";
import type { SchemaOrg_HowToSupply } from "labs/SchemaOrg_HowToSupply.ts";
import type { SchemaOrg_HowToTool } from "labs/SchemaOrg_HowToTool.ts";
import type { SchemaOrg_ItemList } from "labs/SchemaOrg_ItemList.ts";
import type { SchemaOrg_MonetaryAmount } from "labs/SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Instructions that explain how to achieve a result by performing a sequence of steps.
 * @see https://schema.org/HowTo
 */
export const SCHEMA_ORG_HowTo = "https://schema.org/HowTo" as const;

/**
 * Instructions that explain how to achieve a result by performing a sequence of steps.
 * @see https://schema.org/HowTo
 */
export interface SchemaOrg_HowTo extends SchemaOrg_CreativeWork {
    /**
     * The estimated cost of the supply or supplies consumed when performing instructions.
     * @see https://schema.org/estimatedCost
     */
    estimatedCost: Array<SchemaOrg_Text | SchemaOrg_MonetaryAmount>;
    /**
     * The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
     * @see https://schema.org/performTime
     */
    performTime: Array<SchemaOrg_Duration>;
    /**
     * The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
     * @see https://schema.org/prepTime
     */
    prepTime: Array<SchemaOrg_Duration>;
    /**
     * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection.
     * @see https://schema.org/step
     */
    step: Array<SchemaOrg_HowToSection | SchemaOrg_HowToStep | SchemaOrg_CreativeWork | SchemaOrg_Text>;
    /**
     * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
     * @see https://schema.org/steps
     */
    steps: Array<SchemaOrg_CreativeWork | SchemaOrg_ItemList | SchemaOrg_Text>;
    /**
     * A sub-property of instrument. A supply consumed when performing instructions or a direction.
     * @see https://schema.org/supply
     */
    supply: Array<SchemaOrg_HowToSupply | SchemaOrg_Text>;
    /**
     * A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.
     * @see https://schema.org/tool
     */
    tool: Array<SchemaOrg_HowToTool | SchemaOrg_Text>;
    /**
     * The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
     * @see https://schema.org/totalTime
     */
    totalTime: Array<SchemaOrg_Duration>;
    /**
     * The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.
     * @see https://schema.org/yield
     */
    yield: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Text>;
}
