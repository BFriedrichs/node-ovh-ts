/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingFidelityAccountOperationEnum } from './BillingFidelityAccountOperationEnum';

export type BillingFidelityMovement = {
  amount: number;
  balance: number;
  date: Date;
  description: string;
  movementId: number;
  operation: BillingFidelityAccountOperationEnum;
  order: number;
  previousBalance: number;
};
