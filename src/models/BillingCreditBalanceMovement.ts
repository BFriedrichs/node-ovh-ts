/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingCreditBalanceMovementSubObject } from './BillingCreditBalanceMovementSubObject';
import { OrderPrice } from './OrderPrice';

export type BillingCreditBalanceMovement = {
  amount: OrderPrice;
  balanceName: string;
  creationDate: Date;
  destinationObject: BillingCreditBalanceMovementSubObject | null;
  expirationDate: Date | null;
  lastUpdate: Date;
  movementId: number;
  orderId: number | null;
  sourceObject: BillingCreditBalanceMovementSubObject;
  type: string;
};
