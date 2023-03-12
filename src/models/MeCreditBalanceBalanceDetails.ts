/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { MeCreditBalanceExpiringMovement } from './MeCreditBalanceExpiringMovement';

export type MeCreditBalanceBalanceDetails = {
  amount?: OrderPrice;
  balanceSubName?: string | null;
  expiring?: MeCreditBalanceExpiringMovement[];
  serviceId?: number | null;
};
