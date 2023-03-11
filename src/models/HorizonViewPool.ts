/* WARNING: This file is auto-generated . Do not edit manually. */

import { HorizonViewStateEnum } from './HorizonViewStateEnum';
import { HorizonViewPoolType } from './HorizonViewPoolType';

export type HorizonViewPool = {
  accessPointId: number;
  dhcpNetmask: string;
  dhcpNetwork: string;
  externalUrl: string;
  intercoNextHop: string | null;
  intercoPrivateNextHop: string | null;
  portGroupId: string;
  state: HorizonViewStateEnum;
  twoFA: boolean;
  type: HorizonViewPoolType;
};
