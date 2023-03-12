/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { BillingCreditBalanceMovementSubObject } from './BillingCreditBalanceMovementSubObject';

export type BillingCreditBalanceMovement = {
  amount?: OrderPrice;
  balanceName?: string;
  creationDate?: Date;
  destinationObject?: BillingCreditBalanceMovementSubObject | null;
  expirationDate?: Date | null;
  lastUpdate?: Date;
  movementId?: number;
  orderId?: number | null;
  sourceObject?: BillingCreditBalanceMovementSubObject;
  type?: string;
};
