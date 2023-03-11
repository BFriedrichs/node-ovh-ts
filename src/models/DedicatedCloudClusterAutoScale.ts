/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudClusterAutoScaleModeEnum } from './DedicatedCloudClusterAutoScaleModeEnum';
import { DedicatedCloudOptionStateEnum } from './DedicatedCloudOptionStateEnum';

export type DedicatedCloudClusterAutoScale = {
  autoScaleInHost: DedicatedCloudClusterAutoScaleModeEnum;
  autoScaleOutHost: DedicatedCloudClusterAutoScaleModeEnum;
  autoScaleOutStorage: DedicatedCloudClusterAutoScaleModeEnum;
  configId: number;
  id: number;
  inMaintenanceMode: boolean;
  state: DedicatedCloudOptionStateEnum;
};
