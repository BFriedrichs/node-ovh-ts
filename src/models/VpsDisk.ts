/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsDiskStateEnum } from './VpsDiskStateEnum';
import { VpsDiskTypeEnum } from './VpsDiskTypeEnum';

export type VpsDisk = {
  bandwidthLimit?: number;
  id?: number;
  lowFreeSpaceThreshold?: number | null;
  monitoring?: boolean | null;
  serviceName?: string | null;
  size?: number;
  state?: VpsDiskStateEnum;
  type?: VpsDiskTypeEnum;
};
