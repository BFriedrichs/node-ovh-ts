/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudDvsSecurityPolicy } from './DedicatedCloudDvsSecurityPolicy';
import { DedicatedCloudVmNetworkBackingTypeEnum } from './DedicatedCloudVmNetworkBackingTypeEnum';

export type DedicatedCloudVmNetworkBacking = {
  carpState?: string | null;
  deviceName?: string | null;
  portGroupKey?: string | null;
  portKey?: string | null;
  portKeySecurityPolicy?: DedicatedCloudDvsSecurityPolicy | null;
  switchUuid?: string | null;
  type?: DedicatedCloudVmNetworkBackingTypeEnum;
  useAutoDetect?: boolean | null;
  valueMoref?: string | null;
};
