/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';

export type BillingReverseBill = {
  date: Date;
  orderId: number;
  password: string;
  pdfUrl: string;
  priceWithTax: OrderPrice;
  priceWithoutTax: OrderPrice;
  reverseBillId: string;
  tax: OrderPrice;
  url: string;
};
