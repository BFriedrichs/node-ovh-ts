/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewHourlyVolumeDetail } from './CloudBillingViewHourlyVolumeDetail';
import { CloudBillingViewQuantity } from './CloudBillingViewQuantity';

export type CloudBillingViewHourlyVolume = {
  details: CloudBillingViewHourlyVolumeDetail[];
  quantity: CloudBillingViewQuantity;
  region: string;
  totalPrice: number;
  type: string;
};
