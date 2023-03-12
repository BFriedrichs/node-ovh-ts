/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceBackupRegion } from './CloudProjectDatabaseServiceBackupRegion';
import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';
import { CloudProjectDatabaseBackupTypeEnum } from './CloudProjectDatabaseBackupTypeEnum';

export type CloudProjectDatabaseServiceBackup = {
  createdAt?: Date;
  description?: string;
  id?: string;
  region?: string;
  regions?: CloudProjectDatabaseServiceBackupRegion[];
  size?: number;
  status?: CloudProjectDatabaseStatusEnum;
  type?: CloudProjectDatabaseBackupTypeEnum;
};
