/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingL7PolicyActionEnum } from './CloudLoadbalancingL7PolicyActionEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';

export type CloudLoadbalancingL7Policy = {
  action?: CloudLoadbalancingL7PolicyActionEnum;
  description: string;
  id: string;
  listenerId?: string;
  name: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  position: number;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  redirectHttpCode: number | null;
  redirectPoolId: string | null;
  redirectPrefix: string | null;
  redirectUrl: string | null;
};
