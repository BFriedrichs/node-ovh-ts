/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudVmNetworkBackingTypeEnum } from './DedicatedCloudVmNetworkBackingTypeEnum';
import { DedicatedCloudDvsSecurityPolicy } from './DedicatedCloudDvsSecurityPolicy';

export type DedicatedCloudVmNetworkBacking = {
  carpState: string | null;
  deviceName: string | null;
  portGroupKey: string | null;
  portKey: string | null;
  portKeySecurityPolicy: DedicatedCloudDvsSecurityPolicy | null;
  switchUuid: string | null;
  type: DedicatedCloudVmNetworkBackingTypeEnum;
  useAutoDetect: boolean | null;
  valueMoref: string | null;
};
