/* WARNING: This file is auto-generated . Do not edit manually. */

import { DebtAssociatedObjectTypeEnum } from './DebtAssociatedObjectTypeEnum';
import { DebtAssociatedObjectPaymentInfo } from './DebtAssociatedObjectPaymentInfo';

export type DebtEntryAssociatedObject = {
  id?: string | null;
  paymentInfo?: DebtAssociatedObjectPaymentInfo | null;
  subId?: string | null;
  type?: DebtAssociatedObjectTypeEnum | null;
};
