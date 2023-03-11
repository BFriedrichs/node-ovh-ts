/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudBackupBackupDaysEnum } from './DedicatedCloudBackupBackupDaysEnum';
import { DedicatedCloudBackupStateEnum } from './DedicatedCloudBackupStateEnum';
import { DedicatedCloudBackupJobStateEnum } from './DedicatedCloudBackupJobStateEnum';
import { DedicatedCloudBackupRestorePoint } from './DedicatedCloudBackupRestorePoint';
import { DedicatedCloudBackupOfferTypeEnum } from './DedicatedCloudBackupOfferTypeEnum';

export type DedicatedCloudBackupBackup = {
  allocatedDisk: number | null;
  backupDays: DedicatedCloudBackupBackupDaysEnum | null;
  backupRepositoryId: number | null;
  encryption: boolean | null;
  lastCreationTime: Date | null;
  lastDuration: number | null;
  lastResult: DedicatedCloudBackupJobStateEnum | null;
  lastSuccessfulCreationTime: Date | null;
  lastSuccessfulDuration: number | null;
  offerType: DedicatedCloudBackupOfferTypeEnum | null;
  restorePoints: DedicatedCloudBackupRestorePoint | null;
  retentionTime: number | null;
  state: DedicatedCloudBackupStateEnum | null;
};
