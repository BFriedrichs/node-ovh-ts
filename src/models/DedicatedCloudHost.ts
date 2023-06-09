/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudHostStateEnum } from './DedicatedCloudHostStateEnum';
import { DedicatedCloudHostSystemConnectionState } from './DedicatedCloudHostSystemConnectionState';
import { DedicatedCloudRessourcesBillingTypeEnum } from './DedicatedCloudRessourcesBillingTypeEnum';

export type DedicatedCloudHost = {
  billingType?: DedicatedCloudRessourcesBillingTypeEnum;
  clusterName?: string | null;
  connectionState?: DedicatedCloudHostSystemConnectionState | null;
  cpu?: number;
  cpuMax?: number | null;
  cpuMaxCore?: number | null;
  cpuNum?: number | null;
  cpuUsed?: number | null;
  hostId?: number;
  inMaintenance?: boolean | null;
  memoryUsed?: number | null;
  name?: string;
  parentHostId?: number | null;
  profile?: string;
  profileCode?: string;
  rack?: string;
  ram?: number;
  resourceName?: string | null;
  state?: DedicatedCloudHostStateEnum;
  uptime?: number | null;
  vmTotal?: number | null;
  vmVcpuTotal?: number | null;
};
