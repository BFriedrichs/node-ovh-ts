/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectNetworkloadbalancerConditionTypeEnum } from './CloudProjectNetworkloadbalancerConditionTypeEnum';
import { CloudProjectLoadbalancerConditionMatchEnum } from './CloudProjectLoadbalancerConditionMatchEnum';

export type CloudProjectNetworkloadbalancerCondition = {
  key: string | null;
  match?: CloudProjectLoadbalancerConditionMatchEnum;
  name?: string;
  negate: boolean | null;
  type?: CloudProjectNetworkloadbalancerConditionTypeEnum;
  values?: string;
};
