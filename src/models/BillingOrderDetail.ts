/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderOrderDetailTypeEnum } from './OrderOrderDetailTypeEnum';
import { OrderPrice } from './OrderPrice';

export type BillingOrderDetail = {
  cancelled: boolean;
  description: string;
  detailType: OrderOrderDetailTypeEnum | null;
  domain: string;
  orderDetailId: number;
  quantity: string;
  totalPrice: OrderPrice;
  unitPrice: OrderPrice;
};
