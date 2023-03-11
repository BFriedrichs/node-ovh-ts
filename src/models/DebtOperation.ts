/* WARNING: This file is auto-generated . Do not edit manually. */

import { DebtEntryOperationEnum } from './DebtEntryOperationEnum';
import { DebtEntryStatusEnum } from './DebtEntryStatusEnum';
import { OrderPrice } from './OrderPrice';

export type DebtOperation = {
  amount: OrderPrice;
  date: Date;
  depositOrderId: number;
  operationId: number;
  status: DebtEntryStatusEnum;
  type: DebtEntryOperationEnum | null;
};
