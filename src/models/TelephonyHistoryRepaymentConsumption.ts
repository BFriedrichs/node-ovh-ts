/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { TelephonyBillStatusEnum } from './TelephonyBillStatusEnum';

export type TelephonyHistoryRepaymentConsumption = {
  billingNumber?: string;
  date?: Date;
  price?: OrderPrice;
  status?: TelephonyBillStatusEnum;
};
