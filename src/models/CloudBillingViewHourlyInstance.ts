/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewQuantity } from './CloudBillingViewQuantity';
import { CloudBillingViewHourlyInstanceDetail } from './CloudBillingViewHourlyInstanceDetail';

export type CloudBillingViewHourlyInstance = {
  details?: CloudBillingViewHourlyInstanceDetail[];
  quantity?: CloudBillingViewQuantity;
  reference?: string;
  region?: string;
  totalPrice?: number;
};
