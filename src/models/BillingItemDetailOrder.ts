/* WARNING: This file is auto-generated . Do not edit manually. */

import { BillingItemDetailOrderConfiguration } from './BillingItemDetailOrderConfiguration';
import { BillingItemDetailOrderPlan } from './BillingItemDetailOrderPlan';
import { BillingItemDetailOrderActionEnum } from './BillingItemDetailOrderActionEnum';
import { BillingItemDetailOrderDetailTypeEnum } from './BillingItemDetailOrderDetailTypeEnum';

export type BillingItemDetailOrder = {
  action?: BillingItemDetailOrderActionEnum | null;
  configurations?: BillingItemDetailOrderConfiguration[];
  plan?: BillingItemDetailOrderPlan;
  type?: BillingItemDetailOrderDetailTypeEnum | null;
};
