/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedDatacenterEnum } from './DedicatedDatacenterEnum';
import { DedicatedServerStateEnum } from './DedicatedServerStateEnum';
import { DedicatedServerPowerStateEnum } from './DedicatedServerPowerStateEnum';
import { DedicatedServerSupportLevelEnum } from './DedicatedServerSupportLevelEnum';

export type DedicatedServerDedicated = {
  bootId: number | null;
  commercialRange: string | null;
  datacenter: DedicatedDatacenterEnum;
  ip: string;
  linkSpeed: number | null;
  monitoring: boolean;
  name: string;
  newUpgradeSystem: boolean;
  noIntervention: boolean;
  os: string;
  powerState: DedicatedServerPowerStateEnum;
  professionalUse: boolean;
  rack: string;
  rescueMail: string | null;
  reverse: string | null;
  rootDevice: string | null;
  serverId: number;
  state: DedicatedServerStateEnum;
  supportLevel: DedicatedServerSupportLevelEnum;
};
