/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';

export type BillingRefund = {
  date: Date;
  orderId: number;
  originalBillId: string | null;
  password: string;
  pdfUrl: string;
  priceWithTax: OrderPrice;
  priceWithoutTax: OrderPrice;
  refundId: string;
  tax: OrderPrice;
  url: string;
};
