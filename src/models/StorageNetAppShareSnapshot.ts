/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageNetAppSnapshotTypeEnum } from './StorageNetAppSnapshotTypeEnum';
import { StorageNetAppSnapshotStatusEnum } from './StorageNetAppSnapshotStatusEnum';

export type StorageNetAppShareSnapshot = {
  createdAt: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  path: string | null;
  status: StorageNetAppSnapshotStatusEnum | null;
  type: StorageNetAppSnapshotTypeEnum | null;
};
