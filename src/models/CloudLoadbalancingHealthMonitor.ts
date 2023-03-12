/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingHealthMonitorHTTPConfiguration } from './CloudLoadbalancingHealthMonitorHTTPConfiguration';
import { CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum } from './CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum';

export type CloudLoadbalancingHealthMonitor = {
  httpConfiguration: CloudLoadbalancingHealthMonitorHTTPConfiguration | null;
  id: string;
  maxRetries?: number;
  maxRetriesDown?: number;
  monitorType?: CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum;
  name?: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  periodicity?: number;
  poolId?: string;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  timeout?: number;
};
