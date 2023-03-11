/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingBalanceHTTPEnum } from './IpLoadbalancingBalanceHTTPEnum';
import { IpLoadbalancingStickinessHTTPEnum } from './IpLoadbalancingStickinessHTTPEnum';
import { IpLoadbalancingBackendProbe } from './IpLoadbalancingBackendProbe';

export type IpLoadbalancingBackendHttpBackendHttp = {
  balance: IpLoadbalancingBalanceHTTPEnum | null;
  displayName: string | null;
  farmId: number;
  port: number | null;
  probe: IpLoadbalancingBackendProbe | null;
  stickiness: IpLoadbalancingStickinessHTTPEnum | null;
  vrackNetworkId: number | null;
  zone: string;
};
