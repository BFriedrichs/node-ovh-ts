/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum } from './CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum';
import { CloudLoadbalancingHealthMonitorHTTPConfiguration } from './CloudLoadbalancingHealthMonitorHTTPConfiguration';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';

export type CloudLoadbalancingHealthMonitor = {
  httpConfiguration?: CloudLoadbalancingHealthMonitorHTTPConfiguration | null;
  id?: string;
  maxRetries: number;
  maxRetriesDown: number;
  monitorType: CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum;
  name: string;
  operatingStatus?: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  periodicity: number;
  poolId: string;
  provisioningStatus?: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  timeout: number;
};
