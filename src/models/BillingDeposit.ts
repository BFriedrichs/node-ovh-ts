/* WARNING: This file is auto-generated . Do not edit manually. */

import { DebtAssociatedObjectPaymentInfo } from './DebtAssociatedObjectPaymentInfo';
import { OrderPrice } from './OrderPrice';

export type BillingDeposit = {
  amount: OrderPrice;
  date: Date;
  depositId: string;
  orderId: number;
  password: string;
  paymentInfo: DebtAssociatedObjectPaymentInfo | null;
  pdfUrl: string;
  url: string;
};
