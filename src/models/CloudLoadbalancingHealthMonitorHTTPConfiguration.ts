/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerHealthMonitorHTTPVersionEnum } from './CloudLoadbalancingLoadBalancerHealthMonitorHTTPVersionEnum';
import { CloudLoadbalancingLoadBalancerHealthMonitorHTTPMethodEnum } from './CloudLoadbalancingLoadBalancerHealthMonitorHTTPMethodEnum';

export type CloudLoadbalancingHealthMonitorHTTPConfiguration = {
  domainName?: string;
  expectedCodes?: number[];
  httpMethod?: CloudLoadbalancingLoadBalancerHealthMonitorHTTPMethodEnum;
  httpVersion?: CloudLoadbalancingLoadBalancerHealthMonitorHTTPVersionEnum;
  urlPath?: string;
};
