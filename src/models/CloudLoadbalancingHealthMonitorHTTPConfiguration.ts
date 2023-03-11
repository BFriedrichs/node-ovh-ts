/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerHealthMonitorHTTPMethodEnum } from './CloudLoadbalancingLoadBalancerHealthMonitorHTTPMethodEnum';
import { CloudLoadbalancingLoadBalancerHealthMonitorHTTPVersionEnum } from './CloudLoadbalancingLoadBalancerHealthMonitorHTTPVersionEnum';

export type CloudLoadbalancingHealthMonitorHTTPConfiguration = {
  domainName: string;
  expectedCodes: number;
  httpMethod: CloudLoadbalancingLoadBalancerHealthMonitorHTTPMethodEnum;
  httpVersion: CloudLoadbalancingLoadBalancerHealthMonitorHTTPVersionEnum;
  urlPath: string;
};
