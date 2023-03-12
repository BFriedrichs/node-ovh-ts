/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeCreditBalanceTypeEnum } from './MeCreditBalanceTypeEnum';
import { MeCreditBalanceExpiringMovement } from './MeCreditBalanceExpiringMovement';
import { MeCreditBalanceBalanceDetails } from './MeCreditBalanceBalanceDetails';
import { MeCreditBalanceBookedMovement } from './MeCreditBalanceBookedMovement';
import { OrderPrice } from './OrderPrice';

export type MeCreditBalance = {
  amount: OrderPrice;
  balanceDetails: MeCreditBalanceBalanceDetails[];
  balanceName: string;
  booked: MeCreditBalanceBookedMovement[];
  creationDate: Date;
  expiring: MeCreditBalanceExpiringMovement[];
  lastUpdate: Date;
  type: MeCreditBalanceTypeEnum;
};
