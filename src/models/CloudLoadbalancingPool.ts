/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingPoolProtocolEnum } from './CloudLoadbalancingPoolProtocolEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';

export type CloudLoadbalancingPool = {
  algorithm: CloudLoadbalancingPoolAlgorithmEnum;
  id: string;
  listenerId: string | null;
  loadbalancerId: string;
  name: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  protocol: CloudLoadbalancingPoolProtocolEnum;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  sessionPersistence: CloudLoadbalancingPoolSessionPersistence | null;
};
