/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyBillStatusEnum } from './TelephonyBillStatusEnum';
import { OrderPrice } from './OrderPrice';

export type TelephonyHistoryRepaymentConsumption = {
  billingNumber: string;
  date: Date;
  price: OrderPrice;
  status: TelephonyBillStatusEnum;
};
