/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadBalancingZoneEnum } from './IpLoadBalancingZoneEnum';
import { IpLoadBalancingBackendProbeEnum } from './IpLoadBalancingBackendProbeEnum';

export type IpLoadBalancingBackendIp = {
  backend?: string;
  mainBackendIp?: string | null;
  probe?: IpLoadBalancingBackendProbeEnum;
  weight?: number;
  zone?: IpLoadBalancingZoneEnum;
};
