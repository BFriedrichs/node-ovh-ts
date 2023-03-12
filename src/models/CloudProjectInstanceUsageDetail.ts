/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { CloudProjectInstanceMonthlyBilling } from './CloudProjectInstanceMonthlyBilling';

export type CloudProjectInstanceUsageDetail = {
  hourly?: OrderPrice | null;
  instanceId?: string;
  monthly?: CloudProjectInstanceMonthlyBilling | null;
  monthlyBilling?: boolean;
  reference?: string;
};
