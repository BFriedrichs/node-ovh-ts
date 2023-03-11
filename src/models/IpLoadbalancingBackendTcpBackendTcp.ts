/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingStickinessTCPEnum } from './IpLoadbalancingStickinessTCPEnum';
import { IpLoadbalancingBalanceTCPEnum } from './IpLoadbalancingBalanceTCPEnum';
import { IpLoadbalancingBackendProbe } from './IpLoadbalancingBackendProbe';

export type IpLoadbalancingBackendTcpBackendTcp = {
  balance: IpLoadbalancingBalanceTCPEnum | null;
  displayName: string | null;
  farmId: number;
  port: number | null;
  probe: IpLoadbalancingBackendProbe | null;
  stickiness: IpLoadbalancingStickinessTCPEnum | null;
  vrackNetworkId: number | null;
  zone: string;
};
