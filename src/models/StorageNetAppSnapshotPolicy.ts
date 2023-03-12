/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageNetAppSnapshotPolicyStatusEnum } from './StorageNetAppSnapshotPolicyStatusEnum';
import { StorageNetAppSnapshotPolicyRule } from './StorageNetAppSnapshotPolicyRule';

export type StorageNetAppSnapshotPolicy = {
  createdAt?: Date | null;
  description?: string | null;
  id?: string;
  isDefault?: boolean | null;
  name?: string | null;
  rules: StorageNetAppSnapshotPolicyRule[] | null;
  status?: StorageNetAppSnapshotPolicyStatusEnum | null;
};
