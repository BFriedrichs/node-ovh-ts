/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectStorageVolumeUsage } from './CloudProjectStorageVolumeUsage';
import { CloudProjectBandwidthStorageUsage } from './CloudProjectBandwidthStorageUsage';
import { OrderPrice } from './OrderPrice';

export type CloudProjectStorageUsage = {
  bandwidth: CloudProjectBandwidthStorageUsage;
  total: OrderPrice;
  volume: CloudProjectStorageVolumeUsage;
};
