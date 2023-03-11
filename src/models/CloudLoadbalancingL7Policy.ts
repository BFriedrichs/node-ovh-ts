/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingL7PolicyActionEnum } from './CloudLoadbalancingL7PolicyActionEnum';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';

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
