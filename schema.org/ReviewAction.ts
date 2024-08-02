// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAssessAction } from "./AssessAction.ts";

/** The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review. */
export interface ClassReviewAction extends ClassAssessAction {
  /** A sub property of result. The review that resulted in the performing of the action. */
  resultReview: Array<{ "@id": string }>;
}
