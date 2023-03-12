/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudVolumeSnapshotStatusEnum } from './CloudVolumeSnapshotStatusEnum';

export type CloudVolumeSnapshot = {
  creationDate?: Date;
  description?: string;
  id?: string;
  name?: string;
  planCode?: string | null;
  region?: string;
  size?: number;
  status?: CloudVolumeSnapshotStatusEnum;
  volumeId?: string;
};
