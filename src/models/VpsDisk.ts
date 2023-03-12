/* WARNING: This file is auto-generated . Do not edit manually. */

import { VpsDiskTypeEnum } from './VpsDiskTypeEnum';
import { VpsDiskStateEnum } from './VpsDiskStateEnum';

export type VpsDisk = {
  bandwidthLimit: number;
  id: number;
  lowFreeSpaceThreshold: number | null;
  monitoring: boolean | null;
  serviceName: string | null;
  size: number;
  state: VpsDiskStateEnum;
  type: VpsDiskTypeEnum;
};
