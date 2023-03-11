/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectInstancesUsage } from './CloudProjectInstancesUsage';
import { CloudProjectSnapshotsUsage } from './CloudProjectSnapshotsUsage';
import { OrderPrice } from './OrderPrice';
import { CloudProjectVolumesUsage } from './CloudProjectVolumesUsage';
import { CloudProjectStorageUsage } from './CloudProjectStorageUsage';

export type CloudProjectCurrentUsage = {
  instances: CloudProjectInstancesUsage;
  snapshots: CloudProjectSnapshotsUsage;
  storage: CloudProjectStorageUsage;
  total: OrderPrice;
  volumeSnapshots: CloudProjectSnapshotsUsage;
  volumes: CloudProjectVolumesUsage;
};
