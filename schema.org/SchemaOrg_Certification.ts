// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_CertificationStatusEnumeration } from "./SchemaOrg_CertificationStatusEnumeration.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Rating } from "./SchemaOrg_Rating.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A Certification is an official and authoritative statement about a subject, for example a product, service, person, or organization. A certification is typically issued by an indendent certification body, for example a professional organization or government. It formally attests certain characteristics about the subject, for example Organizations can be ISO certified, Food products can be certified Organic or Vegan, a Person can be a certified professional, a Place can be certified for food processing. There are certifications for many domains: regulatory, organizational, recycling, food, efficiency, educational, ecological, etc. A certification is a form of credential, as are accreditations and licenses. Mapped from the [gs1:CertificationDetails](https://www.gs1.org/voc/CertificationDetails) class in the GS1 Web Vocabulary.
 * @see https://schema.org/Certification
 */
export const SCHEMA_ORG_Certification = "https://schema.org/Certification" as const;

/**
 * A Certification is an official and authoritative statement about a subject, for example a product, service, person, or organization. A certification is typically issued by an indendent certification body, for example a professional organization or government. It formally attests certain characteristics about the subject, for example Organizations can be ISO certified, Food products can be certified Organic or Vegan, a Person can be a certified professional, a Place can be certified for food processing. There are certifications for many domains: regulatory, organizational, recycling, food, efficiency, educational, ecological, etc. A certification is a form of credential, as are accreditations and licenses. Mapped from the [gs1:CertificationDetails](https://www.gs1.org/voc/CertificationDetails) class in the GS1 Web Vocabulary.
 * @see https://schema.org/Certification
 */
export interface SchemaOrg_Certification extends SchemaOrg_CreativeWork {
    /**
     * The subject matter of the content.
     * @see https://schema.org/about
     */
    about?: Array<SchemaOrg_Thing>;
    /**
     * Date when a certification was last audited. See also  [gs1:certificationAuditDate](https://www.gs1.org/voc/certificationAuditDate).
     * @see https://schema.org/auditDate
     */
    auditDate?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * Identifier of a certification instance (as registered with an independent certification body). Typically this identifier can be used to consult and verify the certification instance. See also [gs1:certificationIdentification](https://www.gs1.org/voc/certificationIdentification).
     * @see https://schema.org/certificationIdentification
     */
    certificationIdentification?: Array<SchemaOrg_DefinedTerm | SchemaOrg_Text>;
    /**
     * Rating of a certification instance (as defined by an independent certification body). Typically this rating can be used to rate the level to which the requirements of the certification instance are fulfilled. See also [gs1:certificationValue](https://www.gs1.org/voc/certificationValue).
     * @see https://schema.org/certificationRating
     */
    certificationRating?: Array<SchemaOrg_Rating>;
    /**
     * Indicates the current status of a certification: active or inactive. See also  [gs1:certificationStatus](https://www.gs1.org/voc/certificationStatus).
     * @see https://schema.org/certificationStatus
     */
    certificationStatus?: Array<SchemaOrg_CertificationStatusEnumeration>;
    /**
     * Date of first publication or broadcast. For example the date a [[CreativeWork]] was broadcast or a [[Certification]] was issued.
     * @see https://schema.org/datePublished
     */
    datePublished?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [[Certification]] the validity has expired.
     * @see https://schema.org/expires
     */
    expires?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
     * @see https://schema.org/hasMeasurement
     */
    hasMeasurement?: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]].
     * @see https://schema.org/issuedBy
     */
    issuedBy?: Array<SchemaOrg_Organization>;
    /**
     * An associated logo.
     * @see https://schema.org/logo
     */
    logo?: Array<SchemaOrg_ImageObject | SchemaOrg_URL>;
    /**
     * The date when the item becomes valid.
     * @see https://schema.org/validFrom
     */
    validFrom?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]].
     * @see https://schema.org/validIn
     */
    validIn?: Array<SchemaOrg_AdministrativeArea>;
}
