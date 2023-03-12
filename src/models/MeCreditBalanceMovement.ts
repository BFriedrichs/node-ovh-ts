/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { MeCreditBalanceMovementTypeEnum } from './MeCreditBalanceMovementTypeEnum';
import { MeCreditBalanceMovementSubObject } from './MeCreditBalanceMovementSubObject';

export type MeCreditBalanceMovement = {
  amount?: OrderPrice;
  balanceName?: string;
  creationDate?: Date;
  destinationObject?: MeCreditBalanceMovementSubObject | null;
  expirationDate?: Date | null;
  lastUpdate?: Date;
  movementId?: number;
  orderId?: number | null;
  sourceObject?: MeCreditBalanceMovementSubObject;
  type?: MeCreditBalanceMovementTypeEnum;
};
