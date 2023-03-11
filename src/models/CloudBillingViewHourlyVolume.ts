/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewQuantity } from './CloudBillingViewQuantity';
import { CloudBillingViewHourlyVolumeDetail } from './CloudBillingViewHourlyVolumeDetail';

export type CloudBillingViewHourlyVolume = {
  details: CloudBillingViewHourlyVolumeDetail;
  quantity: CloudBillingViewQuantity;
  region: string;
  totalPrice: number;
  type: string;
};
