/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewInstanceSnapshot } from './CloudBillingViewInstanceSnapshot';
import { CloudBillingViewVolumeSnapshot } from './CloudBillingViewVolumeSnapshot';

export type CloudBillingViewHourlySnapshot = {
  instance?: CloudBillingViewInstanceSnapshot | null;
  region?: string;
  totalPrice?: number;
  volume?: CloudBillingViewVolumeSnapshot | null;
};
