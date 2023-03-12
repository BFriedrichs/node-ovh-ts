/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudRightRightEnum } from './DedicatedCloudRightRightEnum';
import { DedicatedCloudRightVmNetworkRoleEnum } from './DedicatedCloudRightVmNetworkRoleEnum';
import { DedicatedCloudRightNetworkRoleEnum } from './DedicatedCloudRightNetworkRoleEnum';

export type DedicatedCloudRight = {
  canAddRessource: boolean;
  datacenterId: number;
  networkRole: DedicatedCloudRightNetworkRoleEnum;
  right: DedicatedCloudRightRightEnum;
  rightId: number;
  vmNetworkRole: DedicatedCloudRightVmNetworkRoleEnum;
};
