/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyBillingAccountStatusEnum } from './TelephonyBillingAccountStatusEnum';
import { OrderPrice } from './OrderPrice';

export type TelephonyBillingAccount = {
  allowedOutplan: OrderPrice;
  billingAccount: string;
  creditThreshold: OrderPrice;
  currentOutplan: OrderPrice;
  description: string;
  hasSpecialNumbers: boolean;
  hiddenExternalNumber: boolean;
  overrideDisplayedNumber: boolean;
  securityDeposit: OrderPrice;
  status: TelephonyBillingAccountStatusEnum;
  trusted: boolean;
};
