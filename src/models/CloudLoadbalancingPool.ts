/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingPoolProtocolEnum } from './CloudLoadbalancingPoolProtocolEnum';
import { CloudLoadbalancingPoolSessionPersistence } from './CloudLoadbalancingPoolSessionPersistence';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingPoolAlgorithmEnum } from './CloudLoadbalancingPoolAlgorithmEnum';

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
