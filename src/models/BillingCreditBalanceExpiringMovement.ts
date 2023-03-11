/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingCreditBalanceMovementSubObject } from './BillingCreditBalanceMovementSubObject';
import { OrderPrice } from './OrderPrice';

export type BillingCreditBalanceExpiringMovement = {
  amount: OrderPrice;
  creationDate: Date;
  expirationDate: Date;
  lastUpdate: Date;
  sourceObject: BillingCreditBalanceMovementSubObject;
};
