/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadBalancingBackendProbeEnum } from './IpLoadBalancingBackendProbeEnum';
import { IpLoadBalancingZoneEnum } from './IpLoadBalancingZoneEnum';

export type IpLoadBalancingBackendIp = {
  backend: string;
  mainBackendIp: string | null;
  probe: IpLoadBalancingBackendProbeEnum;
  weight: number;
  zone: IpLoadBalancingZoneEnum;
};
