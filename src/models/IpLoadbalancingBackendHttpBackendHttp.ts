/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingBackendProbe } from './IpLoadbalancingBackendProbe';
import { IpLoadbalancingBalanceHTTPEnum } from './IpLoadbalancingBalanceHTTPEnum';
import { IpLoadbalancingStickinessHTTPEnum } from './IpLoadbalancingStickinessHTTPEnum';

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
