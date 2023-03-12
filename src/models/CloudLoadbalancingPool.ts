/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';
import { CloudLoadbalancingPoolProtocolEnum } from './CloudLoadbalancingPoolProtocolEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';

export type CloudLoadbalancingPool = {
  algorithm?: CloudLoadbalancingPoolAlgorithmEnum;
  id?: string;
  listenerId?: string | null;
  loadbalancerId?: string;
  name?: string;
  operatingStatus?: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  protocol?: CloudLoadbalancingPoolProtocolEnum;
  provisioningStatus?: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  sessionPersistence?: CloudLoadbalancingPoolSessionPersistence | null;
};
