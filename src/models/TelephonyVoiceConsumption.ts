/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyVoiceConsumptionWayTypeEnum } from './TelephonyVoiceConsumptionWayTypeEnum';
import { TelephonyVoiceConsumptionDestinationTypeEnum } from './TelephonyVoiceConsumptionDestinationTypeEnum';
import { TelephonyVoiceConsumptionPlanTypeEnum } from './TelephonyVoiceConsumptionPlanTypeEnum';
import { OrderPrice } from './OrderPrice';

export type TelephonyVoiceConsumption = {
  called: string | null;
  calling: string | null;
  consumptionId: number;
  countrySuffix: string;
  creationDatetime: Date;
  designation: string;
  destinationType: TelephonyVoiceConsumptionDestinationTypeEnum;
  dialed: string | null;
  duration: number;
  hangupNature: string | null;
  planType: TelephonyVoiceConsumptionPlanTypeEnum;
  priceWithoutTax: OrderPrice;
  wayType: TelephonyVoiceConsumptionWayTypeEnum;
};
