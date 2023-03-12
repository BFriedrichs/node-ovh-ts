/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerPowerStateEnum } from './DedicatedServerPowerStateEnum';
import { DedicatedDatacenterEnum } from './DedicatedDatacenterEnum';
import { DedicatedServerSupportLevelEnum } from './DedicatedServerSupportLevelEnum';
import { DedicatedServerStateEnum } from './DedicatedServerStateEnum';

export type DedicatedServerDedicated = {
  bootId?: number | null;
  commercialRange?: string | null;
  datacenter?: DedicatedDatacenterEnum;
  ip?: string;
  linkSpeed?: number | null;
  monitoring?: boolean;
  name?: string;
  newUpgradeSystem?: boolean;
  noIntervention?: boolean;
  os?: string;
  powerState?: DedicatedServerPowerStateEnum;
  professionalUse?: boolean;
  rack?: string;
  rescueMail?: string | null;
  reverse?: string | null;
  rootDevice?: string | null;
  serverId?: number;
  state?: DedicatedServerStateEnum;
  supportLevel?: DedicatedServerSupportLevelEnum;
};
