/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudBackupReplicationSyncStatus } from './DedicatedCloudBackupReplicationSyncStatus';
import { DedicatedCloudOptionStateEnum } from './DedicatedCloudOptionStateEnum';

export type DedicatedCloudBackupRepository = {
  lastSuccessfulReplicationDate: Date | null;
  replication: DedicatedCloudOptionStateEnum | null;
  replicationZone: string | null;
  repositoryId: number;
  repositoryName: string;
  syncStatus: DedicatedCloudBackupReplicationSyncStatus | null;
};
