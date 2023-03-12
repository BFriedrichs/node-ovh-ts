/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceIpRestriction } from './CloudProjectDatabaseServiceIpRestriction';
import { CloudProjectDatabaseServiceNodeCreation } from './CloudProjectDatabaseServiceNodeCreation';
import { CloudProjectDatabaseServiceDisk } from './CloudProjectDatabaseServiceDisk';
import { CloudProjectDatabaseServiceCreationBackupFork } from './CloudProjectDatabaseServiceCreationBackupFork';
import { CloudProjectDatabaseServiceNodePattern } from './CloudProjectDatabaseServiceNodePattern';

export type CloudProjectDatabaseServiceCreation = {
  backup?: CloudProjectDatabaseServiceCreationBackupFork | null;
  backupTime?: Date | null;
  description?: string;
  disk?: CloudProjectDatabaseServiceDisk;
  ipRestrictions?: CloudProjectDatabaseServiceIpRestriction[];
  maintenanceTime?: Date | null;
  networkId?: string | null;
  nodesList?: CloudProjectDatabaseServiceNodeCreation[] | null;
  nodesPattern?: CloudProjectDatabaseServiceNodePattern | null;
  plan?: string;
  subnetId?: string | null;
  version?: string;
};
