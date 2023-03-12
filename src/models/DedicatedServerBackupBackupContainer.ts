/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerBackupBackupSwift } from './DedicatedServerBackupBackupSwift';
import { DedicatedServerBackupBackupQuota } from './DedicatedServerBackupBackupQuota';
import { DedicatedServerBackupBackupProject } from './DedicatedServerBackupBackupProject';
import { DedicatedServerBackupBackupSftp } from './DedicatedServerBackupBackupSftp';

export type DedicatedServerBackupBackupContainer = {
  cloudProject?: DedicatedServerBackupBackupProject | null;
  id?: string | null;
  name?: string | null;
  quota?: DedicatedServerBackupBackupQuota | null;
  region?: string | null;
  sftp?: DedicatedServerBackupBackupSftp | null;
  swift?: DedicatedServerBackupBackupSwift | null;
};
