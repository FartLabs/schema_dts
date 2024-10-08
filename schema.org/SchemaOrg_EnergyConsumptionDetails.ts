// DO NOT EDIT: This file is generated.
import type { SchemaOrg_EnergyEfficiencyEnumeration } from "./SchemaOrg_EnergyEfficiencyEnumeration.ts";
import type { SchemaOrg_EUEnergyEfficiencyEnumeration } from "./SchemaOrg_EUEnergyEfficiencyEnumeration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";

/**
 * EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example [EU directive 2017/1369](https://eur-lex.europa.eu/eli/reg/2017/1369/oj) for energy labeling and the [Energy labeling rule](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/energy-water-use-labeling-consumer) under the Energy Policy and Conservation Act (EPCA) in the US.
 * @see https://schema.org/EnergyConsumptionDetails
 */
export const SCHEMA_ORG_EnergyConsumptionDetails =
  "https://schema.org/EnergyConsumptionDetails" as const;

/**
 * EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example [EU directive 2017/1369](https://eur-lex.europa.eu/eli/reg/2017/1369/oj) for energy labeling and the [Energy labeling rule](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/energy-water-use-labeling-consumer) under the Energy Policy and Conservation Act (EPCA) in the US.
 * @see https://schema.org/EnergyConsumptionDetails
 */
export interface SchemaOrg_EnergyConsumptionDetails
  extends SchemaOrg_Intangible {
  /**
   * Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.
   * @see https://schema.org/energyEfficiencyScaleMax
   */
  energyEfficiencyScaleMax?: Array<SchemaOrg_EUEnergyEfficiencyEnumeration>;
  /**
   * Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.
   * @see https://schema.org/energyEfficiencyScaleMin
   */
  energyEfficiencyScaleMin?: Array<SchemaOrg_EUEnergyEfficiencyEnumeration>;
  /**
   * Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard.
   * @see https://schema.org/hasEnergyEfficiencyCategory
   */
  hasEnergyEfficiencyCategory?: Array<SchemaOrg_EnergyEfficiencyEnumeration>;
}
