/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';

export type BillingBillDetail = {
  billDetailId: string;
  description: string;
  domain: string;
  periodEnd: Date | null;
  periodStart: Date | null;
  quantity: string;
  totalPrice: OrderPrice;
  unitPrice: OrderPrice;
};
