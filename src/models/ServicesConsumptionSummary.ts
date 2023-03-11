/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesConsumptionPricePlanFamily } from './ServicesConsumptionPricePlanFamily';
import { OrderPrice } from './OrderPrice';

export type ServicesConsumptionSummary = {
  beginDate: Date;
  endDate: Date;
  id: number;
  orderId: number | null;
  price: OrderPrice;
  priceByPlanFamily: ServicesConsumptionPricePlanFamily;
  serviceId: number;
};
