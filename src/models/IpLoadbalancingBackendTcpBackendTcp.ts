/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingBalanceTCPEnum } from './IpLoadbalancingBalanceTCPEnum';
import { IpLoadbalancingBackendProbe } from './IpLoadbalancingBackendProbe';
import { IpLoadbalancingStickinessTCPEnum } from './IpLoadbalancingStickinessTCPEnum';

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
