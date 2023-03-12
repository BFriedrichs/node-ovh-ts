/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeCreditBalanceBalanceDetails } from './MeCreditBalanceBalanceDetails';
import { OrderPrice } from './OrderPrice';
import { MeCreditBalanceBookedMovement } from './MeCreditBalanceBookedMovement';
import { MeCreditBalanceExpiringMovement } from './MeCreditBalanceExpiringMovement';
import { MeCreditBalanceTypeEnum } from './MeCreditBalanceTypeEnum';

export type MeCreditBalance = {
  amount?: OrderPrice;
  balanceDetails?: MeCreditBalanceBalanceDetails[];
  balanceName?: string;
  booked?: MeCreditBalanceBookedMovement[];
  creationDate?: Date;
  expiring?: MeCreditBalanceExpiringMovement[];
  lastUpdate?: Date;
  type?: MeCreditBalanceTypeEnum;
};
