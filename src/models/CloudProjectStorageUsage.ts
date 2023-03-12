/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { CloudProjectStorageVolumeUsage } from './CloudProjectStorageVolumeUsage';
import { CloudProjectBandwidthStorageUsage } from './CloudProjectBandwidthStorageUsage';

export type CloudProjectStorageUsage = {
  bandwidth?: CloudProjectBandwidthStorageUsage[];
  total?: OrderPrice;
  volume?: CloudProjectStorageVolumeUsage[];
};
