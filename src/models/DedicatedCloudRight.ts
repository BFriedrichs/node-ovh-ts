/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudRightNetworkRoleEnum } from './DedicatedCloudRightNetworkRoleEnum';
import { DedicatedCloudRightVmNetworkRoleEnum } from './DedicatedCloudRightVmNetworkRoleEnum';
import { DedicatedCloudRightRightEnum } from './DedicatedCloudRightRightEnum';

export type DedicatedCloudRight = {
  canAddRessource: boolean;
  datacenterId: number;
  networkRole: DedicatedCloudRightNetworkRoleEnum;
  right: DedicatedCloudRightRightEnum;
  rightId: number;
  vmNetworkRole: DedicatedCloudRightVmNetworkRoleEnum;
};
