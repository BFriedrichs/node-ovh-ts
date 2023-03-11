/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudBackupStateEnum } from './DedicatedCloudBackupStateEnum';
import { DedicatedCloudBackupOfferTypeEnum } from './DedicatedCloudBackupOfferTypeEnum';
import { DedicatedCloudBackupBackupDaysEnum } from './DedicatedCloudBackupBackupDaysEnum';

export type DedicatedCloudBackupJob = {
  allocatedDisk: number | null;
  backupDays: DedicatedCloudBackupBackupDaysEnum | null;
  encryption: boolean | null;
  offerType: DedicatedCloudBackupOfferTypeEnum | null;
  retentionTime: number | null;
  state: DedicatedCloudBackupStateEnum;
  vmName: string | null;
};
