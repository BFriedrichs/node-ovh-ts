/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudBackupRestorePoint } from './DedicatedCloudBackupRestorePoint';
import { DedicatedCloudBackupBackupDaysEnum } from './DedicatedCloudBackupBackupDaysEnum';
import { DedicatedCloudBackupJobStateEnum } from './DedicatedCloudBackupJobStateEnum';
import { DedicatedCloudBackupStateEnum } from './DedicatedCloudBackupStateEnum';
import { DedicatedCloudBackupOfferTypeEnum } from './DedicatedCloudBackupOfferTypeEnum';

export type DedicatedCloudBackupBackup = {
  allocatedDisk: number | null;
  backupDays: DedicatedCloudBackupBackupDaysEnum[] | null;
  backupRepositoryId: number | null;
  encryption: boolean | null;
  lastCreationTime: Date | null;
  lastDuration: number | null;
  lastResult: DedicatedCloudBackupJobStateEnum | null;
  lastSuccessfulCreationTime: Date | null;
  lastSuccessfulDuration: number | null;
  offerType: DedicatedCloudBackupOfferTypeEnum | null;
  restorePoints: DedicatedCloudBackupRestorePoint[] | null;
  retentionTime: number | null;
  state: DedicatedCloudBackupStateEnum | null;
};
