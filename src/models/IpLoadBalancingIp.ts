/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadBalancingSslEnum } from './IpLoadBalancingSslEnum';
import { IpLoadBalancingZoneEnum } from './IpLoadBalancingZoneEnum';
import { IpLoadBalancingStateEnum } from './IpLoadBalancingStateEnum';
import { IpLoadBalancingStickinessEnum } from './IpLoadBalancingStickinessEnum';

export type IpLoadBalancingIp = {
  ipLoadBalancing?: string;
  serviceName?: string;
  ssl?: IpLoadBalancingSslEnum;
  state?: IpLoadBalancingStateEnum;
  stickiness?: IpLoadBalancingStickinessEnum;
  zone?: IpLoadBalancingZoneEnum[];
};
