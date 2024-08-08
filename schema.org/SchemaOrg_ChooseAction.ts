// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AssessAction } from "./SchemaOrg_AssessAction.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";

/**
 * The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
 * @see https://schema.org/ChooseAction
 */
export const SCHEMA_ORG_ChooseAction =
  "https://schema.org/ChooseAction" as const;

/**
 * The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
 * @see https://schema.org/ChooseAction
 */
export interface SchemaOrg_ChooseAction extends SchemaOrg_AssessAction {
  /**
   * A sub property of object. The options subject to this action.
   * @see https://schema.org/actionOption
   */
  actionOption?: Array<SchemaOrg_Thing | SchemaOrg_Text>;
  /**
   * A sub property of object. The options subject to this action.
   * @see https://schema.org/option
   */
  option?: Array<SchemaOrg_Text | SchemaOrg_Thing>;
}
