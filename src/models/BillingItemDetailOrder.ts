/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingItemDetailOrderActionEnum } from './BillingItemDetailOrderActionEnum';
import { BillingItemDetailOrderDetailTypeEnum } from './BillingItemDetailOrderDetailTypeEnum';
import { BillingItemDetailOrderConfiguration } from './BillingItemDetailOrderConfiguration';
import { BillingItemDetailOrderPlan } from './BillingItemDetailOrderPlan';

export type BillingItemDetailOrder = {
  action: BillingItemDetailOrderActionEnum | null;
  configurations: BillingItemDetailOrderConfiguration;
  plan: BillingItemDetailOrderPlan;
  type: BillingItemDetailOrderDetailTypeEnum | null;
};
