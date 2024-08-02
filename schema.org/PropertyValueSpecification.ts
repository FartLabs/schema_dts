// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A Property value specification. */
export interface ClassPropertyValueSpecification extends ClassIntangible {
  /** The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values. */
  defaultValue: Array<string | { "@id": string }>;
  /** The upper value of some characteristic or property. */
  maxValue: Array<number>;
  /** The lower value of some characteristic or property. */
  minValue: Array<number>;
  /** Whether multiple values are allowed for the property.  Default is false. */
  multipleValues: Array<boolean>;
  /** Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form. */
  readonlyValue: Array<boolean>;
  /** The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification. */
  stepValue: Array<number>;
  /** Specifies the allowed range for number of characters in a literal value. */
  valueMaxLength: Array<number>;
  /** Specifies the minimum allowed range for number of characters in a literal value. */
  valueMinLength: Array<number>;
  /** Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name. */
  valueName: Array<string>;
  /** Specifies a regular expression for testing literal values according to the HTML spec. */
  valuePattern: Array<string>;
  /** Whether the property must be filled in to complete the action.  Default is false. */
  valueRequired: Array<boolean>;
}
