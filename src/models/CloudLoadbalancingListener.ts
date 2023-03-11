/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingListenerProtocolEnum } from './CloudLoadbalancingListenerProtocolEnum';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';

export type CloudLoadbalancingListener = {
  certificateId: string | null;
  defaultPoolId: string | null;
  id: string;
  loadBalancerIds: string;
  name: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  port: number;
  protocol: CloudLoadbalancingListenerProtocolEnum;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
};
