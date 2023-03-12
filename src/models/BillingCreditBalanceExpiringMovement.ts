/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { BillingCreditBalanceMovementSubObject } from './BillingCreditBalanceMovementSubObject';

export type BillingCreditBalanceExpiringMovement = {
  amount?: OrderPrice;
  creationDate?: Date;
  expirationDate?: Date;
  lastUpdate?: Date;
  sourceObject?: BillingCreditBalanceMovementSubObject;
};
