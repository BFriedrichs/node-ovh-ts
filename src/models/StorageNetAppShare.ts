/* WARNING: This file is auto-generated . Do not edit manually. */

import { StorageNetAppShareStatusEnum } from './StorageNetAppShareStatusEnum';
import { StorageProtocolEnum } from './StorageProtocolEnum';

export type StorageNetAppShare = {
  createdAt: Date | null;
  description: string | null;
  id: string;
  name: string | null;
  protocol?: StorageProtocolEnum | null;
  size?: number | null;
  status: StorageNetAppShareStatusEnum | null;
};
