/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyFaxConsumptionWayTypeEnum } from './TelephonyFaxConsumptionWayTypeEnum';
import { OrderPrice } from './OrderPrice';

export type TelephonyFaxConsumption = {
  called?: string | null;
  calling?: string | null;
  consumptionId?: number;
  creationDatetime?: Date;
  pages?: number;
  priceWithoutTax?: OrderPrice;
  wayType?: TelephonyFaxConsumptionWayTypeEnum;
};
