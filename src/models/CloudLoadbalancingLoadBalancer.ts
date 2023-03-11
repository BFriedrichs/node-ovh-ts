/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';

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
