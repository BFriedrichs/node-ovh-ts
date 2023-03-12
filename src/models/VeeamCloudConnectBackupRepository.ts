/* WARNING: This file is auto-generated . Do not edit manually. */

import { VeeamCloudConnectLocation } from './VeeamCloudConnectLocation';
import { VeeamCloudConnectBackupRepositoryStateEnum } from './VeeamCloudConnectBackupRepositoryStateEnum';

export type VeeamCloudConnectBackupRepository = {
  inventoryName: string;
  quota: number;
  quotaUsed: number | null;
  replicationZone: VeeamCloudConnectLocation | null;
  state: VeeamCloudConnectBackupRepositoryStateEnum;
  usage: number | null;
};
