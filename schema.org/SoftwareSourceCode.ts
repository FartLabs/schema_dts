// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates. */
export interface ClassSoftwareSourceCode extends ClassCreativeWork {
  /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, GitHub, CodePlex). */
  codeRepository: Array<{ "@id": string }>;
  /** What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template. */
  codeSampleType: Array<string>;
  /** The computer programming language. */
  programmingLanguage: Array<string | { "@id": string }>;
  /** Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0). */
  runtime: Array<string>;
  /** Runtime platform or script interpreter dependencies (example: Java v1, Python 2.3, .NET Framework 3.0). */
  runtimePlatform: Array<string>;
  /** What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template. */
  sampleType: Array<string>;
  /** Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used. */
  targetProduct: Array<{ "@id": string }>;
}
