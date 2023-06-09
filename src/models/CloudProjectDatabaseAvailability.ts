/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseNetworkTypeEnum } from './CloudProjectDatabaseNetworkTypeEnum';
import { CloudProjectDatabaseAvailabilityStatusEnum } from './CloudProjectDatabaseAvailabilityStatusEnum';
import { CloudProjectDatabaseBackupTypeEnum } from './CloudProjectDatabaseBackupTypeEnum';

export type CloudProjectDatabaseAvailability = {
  backup?: CloudProjectDatabaseBackupTypeEnum;
  backupRetentionDays?: number;
  default?: boolean;
  endOfLife?: Date | null;
  engine?: string;
  flavor?: string;
  maxDiskSize?: number;
  maxNodeNumber?: number;
  minDiskSize?: number;
  minNodeNumber?: number;
  network?: CloudProjectDatabaseNetworkTypeEnum;
  plan?: string;
  region?: string;
  startDate?: Date;
  status?: CloudProjectDatabaseAvailabilityStatusEnum;
  stepDiskSize?: number;
  upstreamEndOfLife?: Date | null;
  version?: string;
};
