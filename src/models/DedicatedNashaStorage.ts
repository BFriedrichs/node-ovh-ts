/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedStorageDiskTypeEnum } from './DedicatedStorageDiskTypeEnum';

export type DedicatedNashaStorage = {
  canCreatePartition: boolean;
  customName: string | null;
  datacenter: string | null;
  diskType: DedicatedStorageDiskTypeEnum;
  ip: string | null;
  monitored: boolean;
  serviceName: string;
  zpoolCapacity: number;
  zpoolSize: number;
};
