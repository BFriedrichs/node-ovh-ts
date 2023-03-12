/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentTransactionTypeEnum } from './MePaymentTransactionTypeEnum';
import { MePaymentTransactionStatusEnum } from './MePaymentTransactionStatusEnum';
import { OrderPrice } from './OrderPrice';

export type MePaymentTransaction = {
  amount: OrderPrice;
  creationDate: Date;
  lastUpdate: Date;
  paymentMethodId: number;
  status: MePaymentTransactionStatusEnum;
  transactionId: number;
  type: MePaymentTransactionTypeEnum;
};
