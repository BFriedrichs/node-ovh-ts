/* WARNING: This file is auto-generated . Do not edit manually. */

import { ServicesConsumptionDetail } from './ServicesConsumptionDetail';
import { OrderPrice } from './OrderPrice';

export type ServicesConsumptionElement = {
  details: ServicesConsumptionDetail;
  metadata: string | null;
  planCode: string;
  planFamily: string;
  price: OrderPrice;
  quantity: number;
  uniqueId: string | null;
};
