/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyVoiceConsumptionWayTypeEnum } from './TelephonyVoiceConsumptionWayTypeEnum';
import { OrderPrice } from './OrderPrice';
import { TelephonyVoiceConsumptionDestinationTypeEnum } from './TelephonyVoiceConsumptionDestinationTypeEnum';
import { TelephonyVoiceConsumptionPlanTypeEnum } from './TelephonyVoiceConsumptionPlanTypeEnum';

export type TelephonyVoiceConsumption = {
  called?: string | null;
  calling?: string | null;
  consumptionId?: number;
  countrySuffix?: string;
  creationDatetime?: Date;
  designation?: string;
  destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum;
  dialed?: string | null;
  duration?: number;
  hangupNature?: string | null;
  planType?: TelephonyVoiceConsumptionPlanTypeEnum;
  priceWithoutTax?: OrderPrice;
  wayType?: TelephonyVoiceConsumptionWayTypeEnum;
};
