/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeCreditBalanceExpiringMovement } from './MeCreditBalanceExpiringMovement';
import { OrderPrice } from './OrderPrice';

export type MeCreditBalanceBalanceDetails = {
  amount: OrderPrice;
  balanceSubName: string | null;
  expiring: MeCreditBalanceExpiringMovement;
  serviceId: number | null;
};
