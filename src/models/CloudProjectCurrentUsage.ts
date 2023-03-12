/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectVolumesUsage } from './CloudProjectVolumesUsage';
import { CloudProjectInstancesUsage } from './CloudProjectInstancesUsage';
import { OrderPrice } from './OrderPrice';
import { CloudProjectStorageUsage } from './CloudProjectStorageUsage';
import { CloudProjectSnapshotsUsage } from './CloudProjectSnapshotsUsage';

export type CloudProjectCurrentUsage = {
  instances?: CloudProjectInstancesUsage;
  snapshots?: CloudProjectSnapshotsUsage;
  storage?: CloudProjectStorageUsage;
  total?: OrderPrice;
  volumeSnapshots?: CloudProjectSnapshotsUsage;
  volumes?: CloudProjectVolumesUsage;
};
