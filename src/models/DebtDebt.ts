/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { DebtEntryStatusDebtOrderEnum } from './DebtEntryStatusDebtOrderEnum';

export type DebtDebt = {
  amount?: OrderPrice;
  date?: Date;
  debtId?: number;
  dueAmount?: OrderPrice;
  dueDate?: Date | null;
  orderId?: number;
  pendingAmount?: OrderPrice;
  status?: DebtEntryStatusDebtOrderEnum;
  todoAmount?: OrderPrice;
  unmaturedAmount?: OrderPrice;
};
