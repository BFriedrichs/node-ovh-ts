/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyVoiceConsumptionDestinationTypeEnum } from './TelephonyVoiceConsumptionDestinationTypeEnum';
import { TelephonyVoiceConsumptionWayTypeEnum } from './TelephonyVoiceConsumptionWayTypeEnum';
import { OrderPrice } from './OrderPrice';
import { TelephonyVoiceConsumptionPlanTypeEnum } from './TelephonyVoiceConsumptionPlanTypeEnum';

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
