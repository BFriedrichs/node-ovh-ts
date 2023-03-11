/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';

export type CloudLoadbalancingPoolMember = {
  address?: string;
  id: string;
  name: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  protocolPort?: number;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  weight: number;
};
