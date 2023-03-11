/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingHealthMonitorHTTPConfiguration } from './CloudLoadbalancingHealthMonitorHTTPConfiguration';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum } from './CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';

export type CloudLoadbalancingHealthMonitorCreate = {
  httpConfiguration: CloudLoadbalancingHealthMonitorHTTPConfiguration | null;
  maxRetries?: number;
  maxRetriesDown?: number;
  monitorType?: CloudLoadbalancingLoadBalancerHealthMonitorTypeEnum;
  name?: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  periodicity?: number;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  timeout?: number;
};
