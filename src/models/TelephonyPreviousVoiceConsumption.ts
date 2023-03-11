/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyVoiceConsumptionDestinationTypeEnum } from './TelephonyVoiceConsumptionDestinationTypeEnum';
import { TelephonyVoiceConsumptionWayTypeEnum } from './TelephonyVoiceConsumptionWayTypeEnum';
import { OrderPrice } from './OrderPrice';
import { TelephonyVoiceConsumptionPlanTypeEnum } from './TelephonyVoiceConsumptionPlanTypeEnum';

export type TelephonyPreviousVoiceConsumption = {
  called: string | null;
  calling: string | null;
  consumptionId: number;
  countrySuffix: string;
  creationDatetime: Date;
  designation: string;
  destinationType: TelephonyVoiceConsumptionDestinationTypeEnum;
  duration: number;
  hangupNature: string | null;
  planType: TelephonyVoiceConsumptionPlanTypeEnum;
  priceWithoutTax: OrderPrice;
  wayType: TelephonyVoiceConsumptionWayTypeEnum;
};
