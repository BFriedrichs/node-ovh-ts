/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseBackupTypeEnum } from './CloudProjectDatabaseBackupTypeEnum';
import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';
import { CloudProjectDatabaseServiceBackupRegion } from './CloudProjectDatabaseServiceBackupRegion';

export type CloudProjectDatabaseServiceBackup = {
  createdAt: Date;
  description: string;
  id: string;
  region: string;
  regions: CloudProjectDatabaseServiceBackupRegion[];
  size: number;
  status: CloudProjectDatabaseStatusEnum;
  type: CloudProjectDatabaseBackupTypeEnum;
};
