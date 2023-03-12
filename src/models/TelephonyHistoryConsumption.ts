/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { TelephonyBillStatusEnum } from './TelephonyBillStatusEnum';

export type TelephonyHistoryConsumption = {
  date?: Date;
  price?: OrderPrice;
  priceOutplan?: OrderPrice;
  status?: TelephonyBillStatusEnum;
};
