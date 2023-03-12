/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingL7RuleTypeEnum } from './CloudLoadbalancingL7RuleTypeEnum';
import { CloudLoadbalancingL7RuleCompareTypeEnum } from './CloudLoadbalancingL7RuleCompareTypeEnum';

export type CloudLoadbalancingL7Rule = {
  compareType?: CloudLoadbalancingL7RuleCompareTypeEnum;
  id: string;
  invert: boolean;
  key: string;
  operatingStatus: CloudLoadbalancingLoadBalancerOperatingStatusEnum;
  provisioningStatus: CloudLoadbalancingLoadBalancerProvisioningStatusEnum;
  ruleType?: CloudLoadbalancingL7RuleTypeEnum;
  value?: string;
};
