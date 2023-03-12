/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConditionTypeEnum } from './CloudProjectLoadbalancerConditionTypeEnum';
import { CloudProjectLoadbalancerConditionMatchEnum } from './CloudProjectLoadbalancerConditionMatchEnum';

export type CloudProjectLoadbalancerCondition = {
  key?: string | null;
  match: CloudProjectLoadbalancerConditionMatchEnum;
  name: string;
  negate?: boolean | null;
  type: CloudProjectLoadbalancerConditionTypeEnum;
  values: string[];
};
