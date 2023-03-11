/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectInstanceMonthlyBilling } from './CloudProjectInstanceMonthlyBilling';
import { OrderPrice } from './OrderPrice';

export type CloudProjectInstanceUsageDetail = {
  hourly: OrderPrice | null;
  instanceId: string;
  monthly: CloudProjectInstanceMonthlyBilling | null;
  monthlyBilling: boolean;
  reference: string;
};
