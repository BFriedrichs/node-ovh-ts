/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingHealthMonitorHTTPConfiguration } from './CloudLoadbalancingHealthMonitorHTTPConfiguration';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum } from './CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';

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
