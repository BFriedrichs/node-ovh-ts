/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageNetAppSnapshotPolicyRule } from './StorageNetAppSnapshotPolicyRule';
import { StorageNetAppSnapshotPolicyStatusEnum } from './StorageNetAppSnapshotPolicyStatusEnum';

export type StorageNetAppSnapshotPolicy = {
  createdAt: Date | null;
  description: string | null;
  id: string;
  isDefault: boolean | null;
  name: string | null;
  rules?: StorageNetAppSnapshotPolicyRule | null;
  status: StorageNetAppSnapshotPolicyStatusEnum | null;
};
