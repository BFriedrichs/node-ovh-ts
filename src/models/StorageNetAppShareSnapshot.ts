/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageNetAppSnapshotStatusEnum } from './StorageNetAppSnapshotStatusEnum';
import { StorageNetAppSnapshotTypeEnum } from './StorageNetAppSnapshotTypeEnum';

export type StorageNetAppShareSnapshot = {
  createdAt?: Date | null;
  description?: string | null;
  id?: string;
  name?: string | null;
  path?: string | null;
  status?: StorageNetAppSnapshotStatusEnum | null;
  type?: StorageNetAppSnapshotTypeEnum | null;
};
