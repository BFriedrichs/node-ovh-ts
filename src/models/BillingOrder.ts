/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';

export type BillingOrder = {
  date: Date | null;
  expirationDate: Date | null;
  orderId: number;
  password: string;
  pdfUrl: string;
  priceWithTax: OrderPrice;
  priceWithoutTax: OrderPrice;
  retractionDate: Date | null;
  tax: OrderPrice;
  url: string;
};
