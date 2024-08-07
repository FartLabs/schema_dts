// DO NOT EDIT: This file is generated.
import type { SchemaOrg_LoanOrCredit } from "labs/SchemaOrg_LoanOrCredit.ts";
import type { SchemaOrg_PaymentCard } from "labs/SchemaOrg_PaymentCard.ts";

/**
 * A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#AmericanExpress\n* http://purl.org/goodrelations/v1#DinersClub\n* http://purl.org/goodrelations/v1#Discover\n* http://purl.org/goodrelations/v1#JCB\n* http://purl.org/goodrelations/v1#MasterCard\n* http://purl.org/goodrelations/v1#VISA
 * @see https://schema.org/CreditCard
 */
export const SCHEMA_ORG_CreditCard = "https://schema.org/CreditCard" as const;

/**
 * A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#AmericanExpress\n* http://purl.org/goodrelations/v1#DinersClub\n* http://purl.org/goodrelations/v1#Discover\n* http://purl.org/goodrelations/v1#JCB\n* http://purl.org/goodrelations/v1#MasterCard\n* http://purl.org/goodrelations/v1#VISA
 * @see https://schema.org/CreditCard
 */
export type SchemaOrg_CreditCard = SchemaOrg_LoanOrCredit & SchemaOrg_PaymentCard;
