/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { ServicesConsumptionPricePlanFamily } from './ServicesConsumptionPricePlanFamily';

export type ServicesConsumptionSummary = {
  beginDate?: Date;
  endDate?: Date;
  id?: number;
  orderId?: number | null;
  price?: OrderPrice;
  priceByPlanFamily?: ServicesConsumptionPricePlanFamily[];
  serviceId?: number;
};
