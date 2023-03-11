/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceDisk } from './CloudProjectDatabaseServiceDisk';
import { CloudProjectDatabaseServiceIpRestriction } from './CloudProjectDatabaseServiceIpRestriction';
import { CloudProjectDatabaseNetworkTypeEnum } from './CloudProjectDatabaseNetworkTypeEnum';
import { CloudProjectDatabaseServiceEndpoint } from './CloudProjectDatabaseServiceEndpoint';
import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';
import { CloudProjectDatabaseEngineEnum } from './CloudProjectDatabaseEngineEnum';

export type CloudProjectDatabaseKafkaService = {
  backupTime: Date;
  createdAt: Date;
  description: string;
  disk: CloudProjectDatabaseServiceDisk;
  endpoints: CloudProjectDatabaseServiceEndpoint;
  engine: CloudProjectDatabaseEngineEnum;
  flavor: string;
  id: string;
  ipRestrictions: CloudProjectDatabaseServiceIpRestriction;
  maintenanceTime: Date;
  networkId: string | null;
  networkType: CloudProjectDatabaseNetworkTypeEnum;
  nodeNumber: number;
  plan: string;
  restApi: boolean;
  schemaRegistry: boolean;
  status: CloudProjectDatabaseStatusEnum;
  subnetId: string | null;
  version: string;
};
