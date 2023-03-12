/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudVlanStateEnum } from './DedicatedCloudVlanStateEnum';
import { DedicatedCloudVlanTypeEnum } from './DedicatedCloudVlanTypeEnum';

export type DedicatedCloudVlan = {
  name?: string;
  routingRateLimit?: string;
  state?: DedicatedCloudVlanStateEnum;
  type?: DedicatedCloudVlanTypeEnum;
  vlanId?: number;
  vlanNumber?: number;
};
