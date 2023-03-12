/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';

export type CloudLoadbalancingPoolMember = {
  address?: string;
  id: string;
  name: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  protocolPort?: number;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  weight: number;
};
