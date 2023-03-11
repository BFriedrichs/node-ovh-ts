/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudVlanTypeEnum } from './DedicatedCloudVlanTypeEnum';
import { DedicatedCloudVlanStateEnum } from './DedicatedCloudVlanStateEnum';

export type DedicatedCloudVlan = {
  name: string;
  routingRateLimit: string;
  state: DedicatedCloudVlanStateEnum;
  type: DedicatedCloudVlanTypeEnum;
  vlanId: number;
  vlanNumber: number;
};
