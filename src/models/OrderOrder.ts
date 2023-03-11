/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderContract } from './OrderContract';
import { OrderOrderDetail } from './OrderOrderDetail';
import { OrderOrderPrices } from './OrderOrderPrices';

export type OrderOrder = {
  contracts: OrderContract;
  details: OrderOrderDetail;
  orderId: number | null;
  prices: OrderOrderPrices;
  url: string | null;
};
