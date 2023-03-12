/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingListenerProtocolEnum } from './CloudLoadbalancingListenerProtocolEnum';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';

export type CloudLoadbalancingListener = {
  certificateId?: string | null;
  defaultPoolId?: string | null;
  id?: string;
  loadBalancerIds?: string[];
  name?: string;
  operatingStatus?: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  port?: number;
  protocol?: CloudLoadbalancingListenerProtocolEnum;
  provisioningStatus?: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
};
