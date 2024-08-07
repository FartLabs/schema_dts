// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "labs/SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_AnatomicalSystem } from "labs/SchemaOrg_AnatomicalSystem.ts";
import type { SchemaOrg_DDxElement } from "labs/SchemaOrg_DDxElement.ts";
import type { SchemaOrg_Drug } from "labs/SchemaOrg_Drug.ts";
import type { SchemaOrg_EventStatusType } from "labs/SchemaOrg_EventStatusType.ts";
import type { SchemaOrg_MedicalConditionStage } from "labs/SchemaOrg_MedicalConditionStage.ts";
import type { SchemaOrg_MedicalEntity } from "labs/SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalRiskFactor } from "labs/SchemaOrg_MedicalRiskFactor.ts";
import type { SchemaOrg_MedicalSignOrSymptom } from "labs/SchemaOrg_MedicalSignOrSymptom.ts";
import type { SchemaOrg_MedicalStudyStatus } from "labs/SchemaOrg_MedicalStudyStatus.ts";
import type { SchemaOrg_MedicalTest } from "labs/SchemaOrg_MedicalTest.ts";
import type { SchemaOrg_MedicalTherapy } from "labs/SchemaOrg_MedicalTherapy.ts";
import type { SchemaOrg_SuperficialAnatomy } from "labs/SchemaOrg_SuperficialAnatomy.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 * @see https://schema.org/MedicalCondition
 */
export const SCHEMA_ORG_MedicalCondition = "https://schema.org/MedicalCondition" as const;

/**
 * Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 * @see https://schema.org/MedicalCondition
 */
export interface SchemaOrg_MedicalCondition extends SchemaOrg_MedicalEntity {
    /**
     * The anatomy of the underlying organ system or structures associated with this entity.
     * @see https://schema.org/associatedAnatomy
     */
    associatedAnatomy: Array<SchemaOrg_AnatomicalStructure | SchemaOrg_AnatomicalSystem | SchemaOrg_SuperficialAnatomy>;
    /**
     * One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.
     * @see https://schema.org/differentialDiagnosis
     */
    differentialDiagnosis: Array<SchemaOrg_DDxElement>;
    /**
     * Specifying a drug or medicine used in a medication procedure.
     * @see https://schema.org/drug
     */
    drug: Array<SchemaOrg_Drug>;
    /**
     * The characteristics of associated patients, such as age, gender, race etc.
     * @see https://schema.org/epidemiology
     */
    epidemiology: Array<SchemaOrg_Text>;
    /**
     * The likely outcome in either the short term or long term of the medical condition.
     * @see https://schema.org/expectedPrognosis
     */
    expectedPrognosis: Array<SchemaOrg_Text>;
    /**
     * The expected progression of the condition if it is not treated and allowed to progress naturally.
     * @see https://schema.org/naturalProgression
     */
    naturalProgression: Array<SchemaOrg_Text>;
    /**
     * Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
     * @see https://schema.org/pathophysiology
     */
    pathophysiology: Array<SchemaOrg_Text>;
    /**
     * A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.
     * @see https://schema.org/possibleComplication
     */
    possibleComplication: Array<SchemaOrg_Text>;
    /**
     * A possible treatment to address this condition, sign or symptom.
     * @see https://schema.org/possibleTreatment
     */
    possibleTreatment: Array<SchemaOrg_MedicalTherapy>;
    /**
     * A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.
     * @see https://schema.org/primaryPrevention
     */
    primaryPrevention: Array<SchemaOrg_MedicalTherapy>;
    /**
     * A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.
     * @see https://schema.org/riskFactor
     */
    riskFactor: Array<SchemaOrg_MedicalRiskFactor>;
    /**
     * A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.
     * @see https://schema.org/secondaryPrevention
     */
    secondaryPrevention: Array<SchemaOrg_MedicalTherapy>;
    /**
     * A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition.
     * @see https://schema.org/signOrSymptom
     */
    signOrSymptom: Array<SchemaOrg_MedicalSignOrSymptom>;
    /**
     * The stage of the condition, if applicable.
     * @see https://schema.org/stage
     */
    stage: Array<SchemaOrg_MedicalConditionStage>;
    /**
     * The status of the study (enumerated).
     * @see https://schema.org/status
     */
    status: Array<SchemaOrg_Text | SchemaOrg_MedicalStudyStatus | SchemaOrg_EventStatusType>;
    /**
     * A medical test typically performed given this condition.
     * @see https://schema.org/typicalTest
     */
    typicalTest: Array<SchemaOrg_MedicalTest>;
}
