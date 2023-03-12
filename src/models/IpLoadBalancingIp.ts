/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadBalancingStateEnum } from './IpLoadBalancingStateEnum';
import { IpLoadBalancingSslEnum } from './IpLoadBalancingSslEnum';
import { IpLoadBalancingStickinessEnum } from './IpLoadBalancingStickinessEnum';
import { IpLoadBalancingZoneEnum } from './IpLoadBalancingZoneEnum';

export type IpLoadBalancingIp = {
  ipLoadBalancing: string;
  serviceName: string;
  ssl: IpLoadBalancingSslEnum;
  state: IpLoadBalancingStateEnum;
  stickiness: IpLoadBalancingStickinessEnum;
  zone: IpLoadBalancingZoneEnum[];
};
