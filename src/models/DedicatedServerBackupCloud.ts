/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerBackupBackupStatus } from './DedicatedServerBackupBackupStatus';
import { DedicatedServerBackupBackupContainer } from './DedicatedServerBackupBackupContainer';

export type DedicatedServerBackupCloud = {
  agreements: number | null;
  archive: DedicatedServerBackupBackupContainer | null;
  status: DedicatedServerBackupBackupStatus;
  storage: DedicatedServerBackupBackupContainer | null;
};
