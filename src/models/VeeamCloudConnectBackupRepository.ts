/* WARNING: This file is auto-generated . Do not edit manually. */

import { VeeamCloudConnectBackupRepositoryStateEnum } from './VeeamCloudConnectBackupRepositoryStateEnum';
import { VeeamCloudConnectLocation } from './VeeamCloudConnectLocation';

export type VeeamCloudConnectBackupRepository = {
  inventoryName: string;
  quota: number;
  quotaUsed: number | null;
  replicationZone: VeeamCloudConnectLocation | null;
  state: VeeamCloudConnectBackupRepositoryStateEnum;
  usage: number | null;
};
