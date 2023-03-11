/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsClusterRegionEnum } from './DbaasLogsClusterRegionEnum';
import { DbaasLogsClusterClusterTypeEnum } from './DbaasLogsClusterClusterTypeEnum';

export type DbaasLogsCluster = {
  archiveAllowedNetworks: string;
  clusterId: string;
  clusterType: DbaasLogsClusterClusterTypeEnum;
  dedicatedInputPEM: string;
  defaultRetentionId: string;
  directInputAllowedNetworks: string;
  directInputPEM: string;
  hostname: string;
  isDefault: boolean;
  isUnlocked: boolean;
  queryAllowedNetworks: string;
  region: DbaasLogsClusterRegionEnum;
};
