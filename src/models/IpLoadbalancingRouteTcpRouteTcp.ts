/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingRouteStatusEnum } from './IpLoadbalancingRouteStatusEnum';
import { IpLoadbalancingRouteRule } from './IpLoadbalancingRouteRule';
import { IpLoadbalancingRouteTcpAction } from './IpLoadbalancingRouteTcpAction';

export type IpLoadbalancingRouteTcpRouteTcp = {
  action: IpLoadbalancingRouteTcpAction;
  displayName: string | null;
  frontendId: number | null;
  routeId: number;
  rules: IpLoadbalancingRouteRule[];
  status: IpLoadbalancingRouteStatusEnum;
  weight: number;
};
