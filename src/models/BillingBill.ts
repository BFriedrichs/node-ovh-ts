/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingCategoryEnum } from './BillingCategoryEnum';
import { OrderPrice } from './OrderPrice';

export type BillingBill = {
  billId: string;
  category: BillingCategoryEnum;
  date: Date;
  orderId: number;
  password: string;
  pdfUrl: string;
  priceWithTax: OrderPrice;
  priceWithoutTax: OrderPrice;
  tax: OrderPrice;
  url: string;
};
