/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServiceConsumptionTransactionElementDetail } from './ServiceConsumptionTransactionElementDetail';
import { OrderPrice } from './OrderPrice';

export type ServiceConsumptionTransactionElement = {
  details: ServiceConsumptionTransactionElementDetail[];
  planCode: string;
  price: OrderPrice;
  quantity: number;
};
