/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';

export type CloudLoadbalancingLoadBalancer = {
  createdAt: Date;
  flavorId: string;
  id: string;
  name: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  updatedAt: Date;
  vipAddress: string;
  vipNetworkId: string;
  vipSubnetId: string;
};
