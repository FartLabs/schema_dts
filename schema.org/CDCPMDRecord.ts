// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/**
 * A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
 *       used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
 *       definitions used as the source here.
 */
export interface ClassCDCPMDRecord extends ClassStructuredValue {
  /** collectiondate - Date for which patient counts are reported. */
  cvdCollectionDate: Array<string>;
  /** Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry. */
  cvdFacilityCounty: Array<string>;
  /** Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry. */
  cvdFacilityId: Array<string>;
  /** numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients. */
  cvdNumBeds: Array<number>;
  /** numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied. */
  cvdNumBedsOcc: Array<number>;
  /** numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location. */
  cvdNumC19Died: Array<number>;
  /** numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization. */
  cvdNumC19HOPats: Array<number>;
  /** numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19. */
  cvdNumC19HospPats: Array<number>;
  /** numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator. */
  cvdNumC19MechVentPats: Array<number>;
  /** numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator. */
  cvdNumC19OFMechVentPats: Array<number>;
  /** numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed. */
  cvdNumC19OverflowPats: Array<number>;
  /** numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds. */
  cvdNumICUBeds: Array<number>;
  /** numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied. */
  cvdNumICUBedsOcc: Array<number>;
  /** numtotbeds - ALL HOSPITAL BEDS: Total number of all inpatient and outpatient beds, including all staffed, ICU, licensed, and overflow (surge) beds used for inpatients or outpatients. */
  cvdNumTotBeds: Array<number>;
  /** numvent - MECHANICAL VENTILATORS: Total number of ventilators available. */
  cvdNumVent: Array<number>;
  /** numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use. */
  cvdNumVentUse: Array<number>;
  /** Publication date of an online listing. */
  datePosted: Array<string>;
}
