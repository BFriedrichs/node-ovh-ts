/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyBillStatusEnum } from './TelephonyBillStatusEnum';
import { OrderPrice } from './OrderPrice';

export type TelephonyHistoryConsumption = {
  date: Date;
  price: OrderPrice;
  priceOutplan: OrderPrice;
  status: TelephonyBillStatusEnum;
};
