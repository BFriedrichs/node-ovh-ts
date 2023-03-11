/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeBillingPurchaseOrderStatusEnum } from './MeBillingPurchaseOrderStatusEnum';
import { MeBillingPurchaseOrderPurchaseOrderTypeEnum } from './MeBillingPurchaseOrderPurchaseOrderTypeEnum';

export type MeBillingPurchaseOrderPurchaseOrder = {
  active: boolean | null;
  billingGroupId: number | null;
  creationDate: Date;
  description: string | null;
  endDate: Date | null;
  id: number;
  lastUpdate: Date;
  reference: string;
  startDate: Date;
  status: MeBillingPurchaseOrderStatusEnum;
  type: MeBillingPurchaseOrderPurchaseOrderTypeEnum;
};
