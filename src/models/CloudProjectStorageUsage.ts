/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectBandwidthStorageUsage } from './CloudProjectBandwidthStorageUsage';
import { CloudProjectStorageVolumeUsage } from './CloudProjectStorageVolumeUsage';
import { OrderPrice } from './OrderPrice';

export type CloudProjectStorageUsage = {
  bandwidth: CloudProjectBandwidthStorageUsage[];
  total: OrderPrice;
  volume: CloudProjectStorageVolumeUsage[];
};
