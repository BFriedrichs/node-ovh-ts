/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudClusterClusterDrsModeEnum } from './DedicatedCloudClusterClusterDrsModeEnum';
import { DedicatedCloudClusterAutoScale } from './DedicatedCloudClusterAutoScale';
import { DedicatedCloudClusterClusterConfigsStatusEnum } from './DedicatedCloudClusterClusterConfigsStatusEnum';

export type DedicatedCloudCluster = {
  autoscale: DedicatedCloudClusterAutoScale | null;
  drsMode: DedicatedCloudClusterClusterDrsModeEnum;
  drsStatus: DedicatedCloudClusterClusterConfigsStatusEnum;
  evcMode: string;
  haStatus: DedicatedCloudClusterClusterConfigsStatusEnum;
  id: number;
  name: string;
  vmwareClusterId: string;
};
