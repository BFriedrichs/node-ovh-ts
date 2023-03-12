/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudVolumePrice } from './CloudVolumePrice';
import { CloudFlavorPrice } from './CloudFlavorPrice';
import { OrderPrice } from './OrderPrice';
import { CloudSnapshotPrice } from './CloudSnapshotPrice';
import { CloudArchiveStoragePrice } from './CloudArchiveStoragePrice';
import { CloudStoragePrice } from './CloudStoragePrice';
import { CloudBandwidthStoragePrice } from './CloudBandwidthStoragePrice';

export type CloudPrice = {
  archive?: CloudArchiveStoragePrice[];
  bandwidthArchiveIn?: CloudBandwidthStoragePrice[];
  bandwidthArchiveOut?: CloudBandwidthStoragePrice[];
  bandwidthStorage?: CloudBandwidthStoragePrice[];
  instances?: CloudFlavorPrice[];
  projectCreation?: OrderPrice;
  snapshots?: CloudSnapshotPrice[];
  storage?: CloudStoragePrice[];
  volumes?: CloudVolumePrice[];
};
