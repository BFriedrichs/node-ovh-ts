/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingOvhAccountOperationEnum } from './BillingOvhAccountOperationEnum';
import { OrderPrice } from './OrderPrice';

export type BillingMovement = {
  amount: OrderPrice;
  balance: OrderPrice;
  date: Date;
  description: string;
  movementId: number;
  operation: BillingOvhAccountOperationEnum;
  order: number;
  previousBalance: OrderPrice;
  retrievableAmount: OrderPrice;
};
