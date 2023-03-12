/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBillingViewStorageTypeEnum } from './CloudBillingViewStorageTypeEnum';
import { CloudBillingViewStoredStorage } from './CloudBillingViewStoredStorage';
import { CloudBillingViewBandwidthStorage } from './CloudBillingViewBandwidthStorage';

export type CloudBillingViewHourlyStorage = {
  bucketName?: string | null;
  incomingBandwidth?: CloudBillingViewBandwidthStorage | null;
  incomingInternalBandwidth?: CloudBillingViewBandwidthStorage | null;
  outgoingBandwidth?: CloudBillingViewBandwidthStorage | null;
  outgoingInternalBandwidth?: CloudBillingViewBandwidthStorage | null;
  region?: string;
  stored?: CloudBillingViewStoredStorage | null;
  totalPrice?: number;
  type?: CloudBillingViewStorageTypeEnum;
};
