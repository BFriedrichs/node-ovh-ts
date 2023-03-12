/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseNetworkTypeEnum } from './CloudProjectDatabaseNetworkTypeEnum';
import { CloudProjectDatabaseServiceIpRestriction } from './CloudProjectDatabaseServiceIpRestriction';
import { CloudProjectDatabaseServiceDisk } from './CloudProjectDatabaseServiceDisk';
import { CloudProjectDatabaseEngineEnum } from './CloudProjectDatabaseEngineEnum';
import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';
import { CloudProjectDatabaseServiceEndpoint } from './CloudProjectDatabaseServiceEndpoint';

export type CloudProjectDatabaseOpensearchService = {
  aclsEnabled?: boolean;
  backupTime?: Date;
  createdAt?: Date;
  description?: string;
  disk?: CloudProjectDatabaseServiceDisk;
  endpoints?: CloudProjectDatabaseServiceEndpoint[];
  engine?: CloudProjectDatabaseEngineEnum;
  flavor?: string;
  id?: string;
  ipRestrictions?: CloudProjectDatabaseServiceIpRestriction[];
  maintenanceTime?: Date;
  networkId?: string | null;
  networkType?: CloudProjectDatabaseNetworkTypeEnum;
  nodeNumber?: number;
  plan?: string;
  status?: CloudProjectDatabaseStatusEnum;
  subnetId?: string | null;
  version?: string;
};
