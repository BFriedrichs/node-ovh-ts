/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeConsumptionTransactionElementDetail } from './MeConsumptionTransactionElementDetail';
import { MeConsumptionPrice } from './MeConsumptionPrice';

export type MeConsumptionTransactionElement = {
  details: MeConsumptionTransactionElementDetail[];
  planCode: string;
  planFamily: string;
  price: MeConsumptionPrice;
  quantity: number;
};
