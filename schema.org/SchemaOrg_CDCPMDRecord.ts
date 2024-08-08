// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
 *       used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
 *       definitions used as the source here.
 * @see https://schema.org/CDCPMDRecord
 */
export const SCHEMA_ORG_CDCPMDRecord = "https://schema.org/CDCPMDRecord" as const;

/**
 * A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
 *       used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
 *       definitions used as the source here.
 * @see https://schema.org/CDCPMDRecord
 */
export interface SchemaOrg_CDCPMDRecord extends SchemaOrg_StructuredValue {
    /**
     * collectiondate - Date for which patient counts are reported.
     * @see https://schema.org/cvdCollectionDate
     */
    cvdCollectionDate?: Array<SchemaOrg_Text | SchemaOrg_DateTime>;
    /**
     * Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
     * @see https://schema.org/cvdFacilityCounty
     */
    cvdFacilityCounty?: Array<SchemaOrg_Text>;
    /**
     * Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
     * @see https://schema.org/cvdFacilityId
     */
    cvdFacilityId?: Array<SchemaOrg_Text>;
    /**
     * numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients.
     * @see https://schema.org/cvdNumBeds
     */
    cvdNumBeds?: Array<SchemaOrg_Number>;
    /**
     * numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied.
     * @see https://schema.org/cvdNumBedsOcc
     */
    cvdNumBedsOcc?: Array<SchemaOrg_Number>;
    /**
     * numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location.
     * @see https://schema.org/cvdNumC19Died
     */
    cvdNumC19Died?: Array<SchemaOrg_Number>;
    /**
     * numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization.
     * @see https://schema.org/cvdNumC19HOPats
     */
    cvdNumC19HOPats?: Array<SchemaOrg_Number>;
    /**
     * numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19.
     * @see https://schema.org/cvdNumC19HospPats
     */
    cvdNumC19HospPats?: Array<SchemaOrg_Number>;
    /**
     * numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator.
     * @see https://schema.org/cvdNumC19MechVentPats
     */
    cvdNumC19MechVentPats?: Array<SchemaOrg_Number>;
    /**
     * numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator.
     * @see https://schema.org/cvdNumC19OFMechVentPats
     */
    cvdNumC19OFMechVentPats?: Array<SchemaOrg_Number>;
    /**
     * numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed.
     * @see https://schema.org/cvdNumC19OverflowPats
     */
    cvdNumC19OverflowPats?: Array<SchemaOrg_Number>;
    /**
     * numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds.
     * @see https://schema.org/cvdNumICUBeds
     */
    cvdNumICUBeds?: Array<SchemaOrg_Number>;
    /**
     * numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied.
     * @see https://schema.org/cvdNumICUBedsOcc
     */
    cvdNumICUBedsOcc?: Array<SchemaOrg_Number>;
    /**
     * numtotbeds - ALL HOSPITAL BEDS: Total number of all inpatient and outpatient beds, including all staffed, ICU, licensed, and overflow (surge) beds used for inpatients or outpatients.
     * @see https://schema.org/cvdNumTotBeds
     */
    cvdNumTotBeds?: Array<SchemaOrg_Number>;
    /**
     * numvent - MECHANICAL VENTILATORS: Total number of ventilators available.
     * @see https://schema.org/cvdNumVent
     */
    cvdNumVent?: Array<SchemaOrg_Number>;
    /**
     * numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use.
     * @see https://schema.org/cvdNumVentUse
     */
    cvdNumVentUse?: Array<SchemaOrg_Number>;
    /**
     * Publication date of an online listing.
     * @see https://schema.org/datePosted
     */
    datePosted?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
}
