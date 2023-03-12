/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { OrderOrderDetailTypeEnum } from './OrderOrderDetailTypeEnum';

export type BillingOrderDetail = {
  cancelled?: boolean;
  description?: string;
  detailType?: OrderOrderDetailTypeEnum | null;
  domain?: string;
  orderDetailId?: number;
  quantity?: string;
  totalPrice?: OrderPrice;
  unitPrice?: OrderPrice;
};
