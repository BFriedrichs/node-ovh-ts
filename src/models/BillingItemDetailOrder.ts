/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingItemDetailOrderPlan } from './BillingItemDetailOrderPlan';
import { BillingItemDetailOrderConfiguration } from './BillingItemDetailOrderConfiguration';
import { BillingItemDetailOrderActionEnum } from './BillingItemDetailOrderActionEnum';
import { BillingItemDetailOrderDetailTypeEnum } from './BillingItemDetailOrderDetailTypeEnum';

export type BillingItemDetailOrder = {
  action: BillingItemDetailOrderActionEnum | null;
  configurations: BillingItemDetailOrderConfiguration[];
  plan: BillingItemDetailOrderPlan;
  type: BillingItemDetailOrderDetailTypeEnum | null;
};
