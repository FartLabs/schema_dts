// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CarUsageType } from "labs/SchemaOrg_CarUsageType.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DriveWheelConfigurationValue } from "labs/SchemaOrg_DriveWheelConfigurationValue.ts";
import type { SchemaOrg_EngineSpecification } from "labs/SchemaOrg_EngineSpecification.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_QualitativeValue } from "labs/SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_SteeringPositionValue } from "labs/SchemaOrg_SteeringPositionValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 * @see https://schema.org/Vehicle
 */
export const SCHEMA_ORG_Vehicle = "https://schema.org/Vehicle" as const;

/**
 * A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 * @see https://schema.org/Vehicle
 */
export interface SchemaOrg_Vehicle extends SchemaOrg_Product {
    /**
     * The time needed to accelerate the vehicle from a given start velocity to a given target velocity.\n\nTypical unit code(s): SEC for seconds\n\n* Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the [[name]] of the [[QuantitativeValue]], or use [[valueReference]] with a [[QuantitativeValue]] of 0..60 mph or 0..100 km/h to specify the reference speeds.
     * @see https://schema.org/accelerationTime
     */
    accelerationTime: Array<SchemaOrg_QuantitativeValue>;
    /**
     * Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
     * @see https://schema.org/bodyType
     */
    bodyType: Array<SchemaOrg_URL | SchemaOrg_Text | SchemaOrg_QualitativeValue>;
    /**
     * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
     * @see https://schema.org/callSign
     */
    callSign: Array<SchemaOrg_Text>;
    /**
     * The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.\n\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet\n\nNote: You can use [[minValue]] and [[maxValue]] to indicate ranges.
     * @see https://schema.org/cargoVolume
     */
    cargoVolume: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The date of the first registration of the vehicle with the respective public authorities.
     * @see https://schema.org/dateVehicleFirstRegistered
     */
    dateVehicleFirstRegistered: Array<SchemaOrg_Date>;
    /**
     * The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.
     * @see https://schema.org/driveWheelConfiguration
     */
    driveWheelConfiguration: Array<SchemaOrg_Text | SchemaOrg_DriveWheelConfigurationValue>;
    /**
     * The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km".
     * @see https://schema.org/emissionsCO2
     */
    emissionsCO2: Array<SchemaOrg_Number>;
    /**
     * The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.\n\nTypical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles).
     * @see https://schema.org/fuelCapacity
     */
    fuelCapacity: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).\n\n* Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use [[unitText]] to indicate the unit of measurement, e.g. L/100 km.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel consumption to another value.
     * @see https://schema.org/fuelConsumption
     */
    fuelConsumption: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).\n\n* Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use [[unitText]] to indicate the unit of measurement, e.g. mpg or km/L.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel economy to another value.
     * @see https://schema.org/fuelEfficiency
     */
    fuelEfficiency: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
     * @see https://schema.org/fuelType
     */
    fuelType: Array<SchemaOrg_Text | SchemaOrg_QualitativeValue | SchemaOrg_URL>;
    /**
     * A textual description of known damages, both repaired and unrepaired.
     * @see https://schema.org/knownVehicleDamages
     */
    knownVehicleDamages: Array<SchemaOrg_Text>;
    /**
     * Indicates that the vehicle meets the respective emission standard.
     * @see https://schema.org/meetsEmissionStandard
     */
    meetsEmissionStandard: Array<SchemaOrg_Text | SchemaOrg_QualitativeValue | SchemaOrg_URL>;
    /**
     * The total distance travelled by the particular vehicle since its initial production, as read from its odometer.\n\nTypical unit code(s): KMT for kilometers, SMI for statute miles.
     * @see https://schema.org/mileageFromOdometer
     */
    mileageFromOdometer: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The release date of a vehicle model (often used to differentiate versions of the same make and model).
     * @see https://schema.org/modelDate
     */
    modelDate: Array<SchemaOrg_Date>;
    /**
     * The number or type of airbags in the vehicle.
     * @see https://schema.org/numberOfAirbags
     */
    numberOfAirbags: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * The number of axles.\n\nTypical unit code(s): C62.
     * @see https://schema.org/numberOfAxles
     */
    numberOfAxles: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
    /**
     * The number of doors.\n\nTypical unit code(s): C62.
     * @see https://schema.org/numberOfDoors
     */
    numberOfDoors: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue>;
    /**
     * The total number of forward gears available for the transmission system of the vehicle.\n\nTypical unit code(s): C62.
     * @see https://schema.org/numberOfForwardGears
     */
    numberOfForwardGears: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
    /**
     * The number of owners of the vehicle, including the current one.\n\nTypical unit code(s): C62.
     * @see https://schema.org/numberOfPreviousOwners
     */
    numberOfPreviousOwners: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
    /**
     * The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of [[weight]] and [[payload]]\n* Note 2: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 3: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 4: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
     * @see https://schema.org/payload
     */
    payload: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The date of production of the item, e.g. vehicle.
     * @see https://schema.org/productionDate
     */
    productionDate: Array<SchemaOrg_Date>;
    /**
     * The date the item, e.g. vehicle, was purchased by the current owner.
     * @see https://schema.org/purchaseDate
     */
    purchaseDate: Array<SchemaOrg_Date>;
    /**
     * The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons.
     * @see https://schema.org/seatingCapacity
     */
    seatingCapacity: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue>;
    /**
     * The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by [[maxValue]]) should be the maximum speed achievable under regular conditions.\n\nTypical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot\n\n*Note 1: Use [[minValue]] and [[maxValue]] to indicate the range. Typically, the minimal value is zero.\n* Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the [[valueReference]] property.
     * @see https://schema.org/speed
     */
    speed: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The position of the steering wheel or similar device (mostly for cars).
     * @see https://schema.org/steeringPosition
     */
    steeringPosition: Array<SchemaOrg_SteeringPositionValue>;
    /**
     * The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR).\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
     * @see https://schema.org/tongueWeight
     */
    tongueWeight: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The permitted weight of a trailer attached to the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
     * @see https://schema.org/trailerWeight
     */
    trailerWeight: Array<SchemaOrg_QuantitativeValue>;
    /**
     * A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
     * @see https://schema.org/vehicleConfiguration
     */
    vehicleConfiguration: Array<SchemaOrg_Text>;
    /**
     * Information about the engine or engines of the vehicle.
     * @see https://schema.org/vehicleEngine
     */
    vehicleEngine: Array<SchemaOrg_EngineSpecification>;
    /**
     * The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.
     * @see https://schema.org/vehicleIdentificationNumber
     */
    vehicleIdentificationNumber: Array<SchemaOrg_Text>;
    /**
     * The color or color combination of the interior of the vehicle.
     * @see https://schema.org/vehicleInteriorColor
     */
    vehicleInteriorColor: Array<SchemaOrg_Text>;
    /**
     * The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.
     * @see https://schema.org/vehicleInteriorType
     */
    vehicleInteriorType: Array<SchemaOrg_Text>;
    /**
     * The release date of a vehicle model (often used to differentiate versions of the same make and model).
     * @see https://schema.org/vehicleModelDate
     */
    vehicleModelDate: Array<SchemaOrg_Date>;
    /**
     * The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons.
     * @see https://schema.org/vehicleSeatingCapacity
     */
    vehicleSeatingCapacity: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue>;
    /**
     * Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale.
     * @see https://schema.org/vehicleSpecialUsage
     */
    vehicleSpecialUsage: Array<SchemaOrg_CarUsageType | SchemaOrg_Text>;
    /**
     * The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).
     * @see https://schema.org/vehicleTransmission
     */
    vehicleTransmission: Array<SchemaOrg_QualitativeValue | SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
     * @see https://schema.org/weightTotal
     */
    weightTotal: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The distance between the centers of the front and rear wheels.\n\nTypical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet.
     * @see https://schema.org/wheelbase
     */
    wheelbase: Array<SchemaOrg_QuantitativeValue>;
}
