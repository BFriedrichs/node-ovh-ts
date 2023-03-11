/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeCreditBalanceBalanceDetails } from './MeCreditBalanceBalanceDetails';
import { MeCreditBalanceBookedMovement } from './MeCreditBalanceBookedMovement';
import { MeCreditBalanceTypeEnum } from './MeCreditBalanceTypeEnum';
import { OrderPrice } from './OrderPrice';
import { MeCreditBalanceExpiringMovement } from './MeCreditBalanceExpiringMovement';

export type MeCreditBalance = {
  amount: OrderPrice;
  balanceDetails: MeCreditBalanceBalanceDetails;
  balanceName: string;
  booked: MeCreditBalanceBookedMovement;
  creationDate: Date;
  expiring: MeCreditBalanceExpiringMovement;
  lastUpdate: Date;
  type: MeCreditBalanceTypeEnum;
};
