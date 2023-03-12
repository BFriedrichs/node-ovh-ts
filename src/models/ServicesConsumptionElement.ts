/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { ServicesConsumptionDetail } from './ServicesConsumptionDetail';

export type ServicesConsumptionElement = {
  details?: ServicesConsumptionDetail[];
  metadata?: string | null;
  planCode?: string;
  planFamily?: string;
  price?: OrderPrice;
  quantity?: number;
  uniqueId?: string | null;
};
