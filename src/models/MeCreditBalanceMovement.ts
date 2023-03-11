/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeCreditBalanceMovementSubObject } from './MeCreditBalanceMovementSubObject';
import { MeCreditBalanceMovementTypeEnum } from './MeCreditBalanceMovementTypeEnum';
import { OrderPrice } from './OrderPrice';

export type MeCreditBalanceMovement = {
  amount: OrderPrice;
  balanceName: string;
  creationDate: Date;
  destinationObject: MeCreditBalanceMovementSubObject | null;
  expirationDate: Date | null;
  lastUpdate: Date;
  movementId: number;
  orderId: number | null;
  sourceObject: MeCreditBalanceMovementSubObject;
  type: MeCreditBalanceMovementTypeEnum;
};
