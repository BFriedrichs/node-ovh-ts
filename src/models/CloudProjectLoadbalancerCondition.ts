/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConditionMatchEnum } from './CloudProjectLoadbalancerConditionMatchEnum';
import { CloudProjectLoadbalancerConditionTypeEnum } from './CloudProjectLoadbalancerConditionTypeEnum';

export type CloudProjectLoadbalancerCondition = {
  key: string | null;
  match?: CloudProjectLoadbalancerConditionMatchEnum;
  name?: string;
  negate: boolean | null;
  type?: CloudProjectLoadbalancerConditionTypeEnum;
  values?: string[];
};
