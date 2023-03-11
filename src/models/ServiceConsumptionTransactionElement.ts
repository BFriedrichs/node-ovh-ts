/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { ServiceConsumptionTransactionElementDetail } from './ServiceConsumptionTransactionElementDetail';

export type ServiceConsumptionTransactionElement = {
  details: ServiceConsumptionTransactionElementDetail;
  planCode: string;
  price: OrderPrice;
  quantity: number;
};
