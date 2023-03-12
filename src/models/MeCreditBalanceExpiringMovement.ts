/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { MeCreditBalanceMovementSubObject } from './MeCreditBalanceMovementSubObject';

export type MeCreditBalanceExpiringMovement = {
  amount?: OrderPrice;
  creationDate?: Date;
  expirationDate?: Date;
  lastUpdate?: Date;
  sourceObject?: MeCreditBalanceMovementSubObject;
};
