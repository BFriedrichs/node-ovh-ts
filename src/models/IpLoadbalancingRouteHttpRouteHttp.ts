/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingRouteHttpAction } from './IpLoadbalancingRouteHttpAction';
import { IpLoadbalancingRouteStatusEnum } from './IpLoadbalancingRouteStatusEnum';
import { IpLoadbalancingRouteRule } from './IpLoadbalancingRouteRule';

export type IpLoadbalancingRouteHttpRouteHttp = {
  action?: IpLoadbalancingRouteHttpAction;
  displayName?: string | null;
  frontendId?: number | null;
  routeId?: number;
  rules?: IpLoadbalancingRouteRule[];
  status?: IpLoadbalancingRouteStatusEnum;
  weight?: number;
};
