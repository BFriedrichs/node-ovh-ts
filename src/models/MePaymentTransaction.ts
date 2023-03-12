/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentTransactionStatusEnum } from './MePaymentTransactionStatusEnum';
import { OrderPrice } from './OrderPrice';
import { MePaymentTransactionTypeEnum } from './MePaymentTransactionTypeEnum';

export type MePaymentTransaction = {
  amount?: OrderPrice;
  creationDate?: Date;
  lastUpdate?: Date;
  paymentMethodId?: number;
  status?: MePaymentTransactionStatusEnum;
  transactionId?: number;
  type?: MePaymentTransactionTypeEnum;
};
