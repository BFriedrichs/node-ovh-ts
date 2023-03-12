/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderOrderDetail } from './OrderOrderDetail';
import { OrderOrderPrices } from './OrderOrderPrices';
import { OrderContract } from './OrderContract';

export type OrderOrder = {
  contracts?: OrderContract[];
  details?: OrderOrderDetail[];
  orderId?: number | null;
  prices?: OrderOrderPrices;
  url?: string | null;
};
