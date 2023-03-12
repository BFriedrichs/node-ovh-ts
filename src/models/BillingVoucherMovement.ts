/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { BillingVoucherAccountOperationEnum } from './BillingVoucherAccountOperationEnum';

export type BillingVoucherMovement = {
  amount?: OrderPrice;
  balance?: OrderPrice;
  date?: Date;
  description?: string;
  movementId?: number;
  operation?: BillingVoucherAccountOperationEnum;
  order?: number;
  previousBalance?: OrderPrice;
};
