/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudLoadbalancingL7RuleCompareTypeEnum } from './CloudLoadbalancingL7RuleCompareTypeEnum';
import { CloudLoadbalancingLoadBalancerOperatingStatusEnum } from './CloudLoadbalancingLoadBalancerOperatingStatusEnum';
import { CloudLoadbalancingLoadBalancerProvisioningStatusEnum } from './CloudLoadbalancingLoadBalancerProvisioningStatusEnum';
import { CloudLoadbalancingL7RuleTypeEnum } from './CloudLoadbalancingL7RuleTypeEnum';

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
