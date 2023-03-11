/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeCreditBalanceMovementSubObject } from './MeCreditBalanceMovementSubObject';
import { OrderPrice } from './OrderPrice';

export type MeCreditBalanceExpiringMovement = {
  amount: OrderPrice;
  creationDate: Date;
  expirationDate: Date;
  lastUpdate: Date;
  sourceObject: MeCreditBalanceMovementSubObject;
};
