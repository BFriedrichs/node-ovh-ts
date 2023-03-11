/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingProbeMethodEnum } from './IpLoadbalancingProbeMethodEnum';
import { IpLoadbalancingProbeTypeEnum } from './IpLoadbalancingProbeTypeEnum';
import { IpLoadbalancingProbeExpectMatchEnum } from './IpLoadbalancingProbeExpectMatchEnum';

export type IpLoadbalancingBackendProbe = {
  forceSsl: boolean | null;
  interval: number | null;
  match: IpLoadbalancingProbeExpectMatchEnum | null;
  method: IpLoadbalancingProbeMethodEnum | null;
  negate: boolean | null;
  pattern: string | null;
  port: number | null;
  type: IpLoadbalancingProbeTypeEnum | null;
  url: string | null;
};
