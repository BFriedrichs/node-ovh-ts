/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudBackupStateEnum } from './DedicatedCloudBackupStateEnum';
import { DedicatedCloudBackupOfferTypeEnum } from './DedicatedCloudBackupOfferTypeEnum';

export type DedicatedCloudBackup = {
  backupDurationInReport?: boolean | null;
  backupOffer?: DedicatedCloudBackupOfferTypeEnum | null;
  backupSizeInReport?: boolean | null;
  diskSizeInReport?: boolean | null;
  encryption?: boolean | null;
  fullDayInReport?: boolean | null;
  hostname?: string | null;
  mailAddress?: string | null;
  replicationZone?: string | null;
  restorePointInReport?: boolean | null;
  scheduleHour?: Date | null;
  state?: DedicatedCloudBackupStateEnum;
  vmwareVmId?: string | null;
};
