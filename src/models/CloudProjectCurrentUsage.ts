/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectSnapshotsUsage } from './CloudProjectSnapshotsUsage';
import { CloudProjectVolumesUsage } from './CloudProjectVolumesUsage';
import { CloudProjectInstancesUsage } from './CloudProjectInstancesUsage';
import { CloudProjectStorageUsage } from './CloudProjectStorageUsage';
import { OrderPrice } from './OrderPrice';

export type CloudProjectCurrentUsage = {
  instances: CloudProjectInstancesUsage;
  snapshots: CloudProjectSnapshotsUsage;
  storage: CloudProjectStorageUsage;
  total: OrderPrice;
  volumeSnapshots: CloudProjectSnapshotsUsage;
  volumes: CloudProjectVolumesUsage;
};
