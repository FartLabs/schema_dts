// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A Certification is an official and authoritative statement about a subject, for example a product, service, person, or organization. A certification is typically issued by an indendent certification body, for example a professional organization or government. It formally attests certain characteristics about the subject, for example Organizations can be ISO certified, Food products can be certified Organic or Vegan, a Person can be a certified professional, a Place can be certified for food processing. There are certifications for many domains: regulatory, organizational, recycling, food, efficiency, educational, ecological, etc. A certification is a form of credential, as are accreditations and licenses. Mapped from the [gs1:CertificationDetails](https://www.gs1.org/voc/CertificationDetails) class in the GS1 Web Vocabulary. */
export interface ClassCertification extends ClassCreativeWork {
  /** The subject matter of the content. */
  about: Array<{ "@id": string }>;
  /** Date when a certification was last audited. See also  [gs1:certificationAuditDate](https://www.gs1.org/voc/certificationAuditDate). */
  auditDate: Array<string>;
  /** Identifier of a certification instance (as registered with an independent certification body). Typically this identifier can be used to consult and verify the certification instance. See also [gs1:certificationIdentification](https://www.gs1.org/voc/certificationIdentification). */
  certificationIdentification: Array<string | { "@id": string }>;
  /** Rating of a certification instance (as defined by an independent certification body). Typically this rating can be used to rate the level to which the requirements of the certification instance are fulfilled. See also [gs1:certificationValue](https://www.gs1.org/voc/certificationValue). */
  certificationRating: Array<{ "@id": string }>;
  /** Indicates the current status of a certification: active or inactive. See also  [gs1:certificationStatus](https://www.gs1.org/voc/certificationStatus). */
  certificationStatus: Array<{ "@id": string }>;
  /** Date of first publication or broadcast. For example the date a [[CreativeWork]] was broadcast or a [[Certification]] was issued. */
  datePublished: Array<string>;
  /** Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [[Certification]] the validity has expired. */
  expires: Array<string>;
  /** A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
  hasMeasurement: Array<{ "@id": string }>;
  /** The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]]. */
  issuedBy: Array<{ "@id": string }>;
  /** An associated logo. */
  logo: Array<{ "@id": string }>;
  /** The date when the item becomes valid. */
  validFrom: Array<string>;
  /** The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]]. */
  validIn: Array<{ "@id": string }>;
}
