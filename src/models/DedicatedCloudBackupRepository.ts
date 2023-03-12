/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudOptionStateEnum } from './DedicatedCloudOptionStateEnum';
import { DedicatedCloudBackupReplicationSyncStatus } from './DedicatedCloudBackupReplicationSyncStatus';

export type DedicatedCloudBackupRepository = {
  lastSuccessfulReplicationDate?: Date | null;
  replication?: DedicatedCloudOptionStateEnum | null;
  replicationZone?: string | null;
  repositoryId?: number;
  repositoryName?: string;
  syncStatus?: DedicatedCloudBackupReplicationSyncStatus | null;
};
