/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudBandwidthStoragePrice } from './CloudBandwidthStoragePrice';
import { CloudSnapshotPrice } from './CloudSnapshotPrice';
import { CloudArchiveStoragePrice } from './CloudArchiveStoragePrice';
import { CloudStoragePrice } from './CloudStoragePrice';
import { OrderPrice } from './OrderPrice';
import { CloudFlavorPrice } from './CloudFlavorPrice';
import { CloudVolumePrice } from './CloudVolumePrice';

export type CloudPrice = {
  archive: CloudArchiveStoragePrice;
  bandwidthArchiveIn: CloudBandwidthStoragePrice;
  bandwidthArchiveOut: CloudBandwidthStoragePrice;
  bandwidthStorage: CloudBandwidthStoragePrice;
  instances: CloudFlavorPrice;
  projectCreation: OrderPrice;
  snapshots: CloudSnapshotPrice;
  storage: CloudStoragePrice;
  volumes: CloudVolumePrice;
};
