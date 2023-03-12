/* WARNING: This file is auto-generated . Do not edit manually. */

import { HorizonViewPoolType } from './HorizonViewPoolType';
import { HorizonViewStateEnum } from './HorizonViewStateEnum';

export type HorizonViewPool = {
  accessPointId?: number;
  dhcpNetmask?: string;
  dhcpNetwork?: string;
  externalUrl?: string;
  intercoNextHop?: string | null;
  intercoPrivateNextHop?: string | null;
  portGroupId?: string;
  state?: HorizonViewStateEnum;
  twoFA?: boolean;
  type?: HorizonViewPoolType;
};
