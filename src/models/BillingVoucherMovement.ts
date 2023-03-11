/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingVoucherAccountOperationEnum } from './BillingVoucherAccountOperationEnum';
import { OrderPrice } from './OrderPrice';

export type BillingVoucherMovement = {
  amount: OrderPrice;
  balance: OrderPrice;
  date: Date;
  description: string;
  movementId: number;
  operation: BillingVoucherAccountOperationEnum;
  order: number;
  previousBalance: OrderPrice;
};
