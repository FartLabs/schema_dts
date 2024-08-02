// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc. */
export interface ClassMedicalCondition extends ClassMedicalEntity {
  /** The anatomy of the underlying organ system or structures associated with this entity. */
  associatedAnatomy: Array<{ "@id": string }>;
  /** One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient. */
  differentialDiagnosis: Array<{ "@id": string }>;
  /** Specifying a drug or medicine used in a medication procedure. */
  drug: Array<{ "@id": string }>;
  /** The characteristics of associated patients, such as age, gender, race etc. */
  epidemiology: Array<string>;
  /** The likely outcome in either the short term or long term of the medical condition. */
  expectedPrognosis: Array<string>;
  /** The expected progression of the condition if it is not treated and allowed to progress naturally. */
  naturalProgression: Array<string>;
  /** Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition. */
  pathophysiology: Array<string>;
  /** A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc. */
  possibleComplication: Array<string>;
  /** A possible treatment to address this condition, sign or symptom. */
  possibleTreatment: Array<{ "@id": string }>;
  /** A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination. */
  primaryPrevention: Array<{ "@id": string }>;
  /** A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition. */
  riskFactor: Array<{ "@id": string }>;
  /** A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition. */
  secondaryPrevention: Array<{ "@id": string }>;
  /** A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition. */
  signOrSymptom: Array<{ "@id": string }>;
  /** The stage of the condition, if applicable. */
  stage: Array<{ "@id": string }>;
  /** The status of the study (enumerated). */
  status: Array<string | { "@id": string }>;
  /** A medical test typically performed given this condition. */
  typicalTest: Array<{ "@id": string }>;
}
