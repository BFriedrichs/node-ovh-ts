/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageNetAppShareACLTypeEnum } from './StorageNetAppShareACLTypeEnum';
import { StorageNetAppShareACLStatusEnum } from './StorageNetAppShareACLStatusEnum';
import { StorageNetAppShareACLPermissionEnum } from './StorageNetAppShareACLPermissionEnum';

export type StorageNetAppShareACLRule = {
  accessLevel?: StorageNetAppShareACLPermissionEnum | null;
  accessTo?: string | null;
  accessType: StorageNetAppShareACLTypeEnum | null;
  createdAt: Date | null;
  id: string;
  status: StorageNetAppShareACLStatusEnum | null;
};
