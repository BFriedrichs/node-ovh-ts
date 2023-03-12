/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeBillingPurchaseOrderPurchaseOrderTypeEnum } from './MeBillingPurchaseOrderPurchaseOrderTypeEnum';

export type MeBillingPurchaseOrderCreation = {
  active?: boolean | null;
  billingGroupId?: number | null;
  description?: string | null;
  endDate?: Date | null;
  reference: string;
  startDate: Date;
  type: MeBillingPurchaseOrderPurchaseOrderTypeEnum;
};
