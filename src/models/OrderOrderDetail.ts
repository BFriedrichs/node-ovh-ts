/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { OrderReduction } from './OrderReduction';
import { OrderOrderDetailTypeEnum } from './OrderOrderDetailTypeEnum';

export type OrderOrderDetail = {
  cartItemID?: number | null;
  description?: string;
  detailType?: OrderOrderDetailTypeEnum | null;
  domain?: string;
  originalTotalPrice?: OrderPrice;
  quantity?: number;
  reductionTotalPrice?: OrderPrice;
  reductions?: OrderReduction[];
  totalPrice?: OrderPrice;
  unitPrice?: OrderPrice;
};
