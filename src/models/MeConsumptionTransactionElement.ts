/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeConsumptionPrice } from './MeConsumptionPrice';
import { MeConsumptionTransactionElementDetail } from './MeConsumptionTransactionElementDetail';

export type MeConsumptionTransactionElement = {
  details: MeConsumptionTransactionElementDetail;
  planCode: string;
  planFamily: string;
  price: MeConsumptionPrice;
  quantity: number;
};
