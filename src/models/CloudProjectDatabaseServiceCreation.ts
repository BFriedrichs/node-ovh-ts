/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceDisk } from './CloudProjectDatabaseServiceDisk';
import { CloudProjectDatabaseServiceNodePattern } from './CloudProjectDatabaseServiceNodePattern';
import { CloudProjectDatabaseServiceCreationBackupFork } from './CloudProjectDatabaseServiceCreationBackupFork';
import { CloudProjectDatabaseServiceIpRestriction } from './CloudProjectDatabaseServiceIpRestriction';
import { CloudProjectDatabaseServiceNodeCreation } from './CloudProjectDatabaseServiceNodeCreation';

export type CloudProjectDatabaseServiceCreation = {
  backup: CloudProjectDatabaseServiceCreationBackupFork | null;
  backupTime: Date | null;
  description: string;
  disk: CloudProjectDatabaseServiceDisk;
  ipRestrictions: CloudProjectDatabaseServiceIpRestriction;
  maintenanceTime: Date | null;
  networkId: string | null;
  nodesList: CloudProjectDatabaseServiceNodeCreation | null;
  nodesPattern: CloudProjectDatabaseServiceNodePattern | null;
  plan: string;
  subnetId: string | null;
  version: string;
};
