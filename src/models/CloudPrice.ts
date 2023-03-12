/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBandwidthStoragePrice } from './CloudBandwidthStoragePrice';
import { CloudStoragePrice } from './CloudStoragePrice';
import { CloudFlavorPrice } from './CloudFlavorPrice';
import { CloudVolumePrice } from './CloudVolumePrice';
import { CloudArchiveStoragePrice } from './CloudArchiveStoragePrice';
import { OrderPrice } from './OrderPrice';
import { CloudSnapshotPrice } from './CloudSnapshotPrice';

export type CloudPrice = {
  archive: CloudArchiveStoragePrice[];
  bandwidthArchiveIn: CloudBandwidthStoragePrice[];
  bandwidthArchiveOut: CloudBandwidthStoragePrice[];
  bandwidthStorage: CloudBandwidthStoragePrice[];
  instances: CloudFlavorPrice[];
  projectCreation: OrderPrice;
  snapshots: CloudSnapshotPrice[];
  storage: CloudStoragePrice[];
  volumes: CloudVolumePrice[];
};
