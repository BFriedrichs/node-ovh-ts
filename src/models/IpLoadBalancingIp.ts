/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadBalancingSslEnum } from './IpLoadBalancingSslEnum';
import { IpLoadBalancingZoneEnum } from './IpLoadBalancingZoneEnum';
import { IpLoadBalancingStickinessEnum } from './IpLoadBalancingStickinessEnum';
import { IpLoadBalancingStateEnum } from './IpLoadBalancingStateEnum';

export type IpLoadBalancingIp = {
  ipLoadBalancing: string;
  serviceName: string;
  ssl: IpLoadBalancingSslEnum;
  state: IpLoadBalancingStateEnum;
  stickiness: IpLoadBalancingStickinessEnum;
  zone: IpLoadBalancingZoneEnum;
};
