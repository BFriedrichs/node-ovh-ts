/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpLoadbalancingRouteRuleMatchesEnum } from './IpLoadbalancingRouteRuleMatchesEnum';

export type IpLoadbalancingRouteRule = {
  field: string;
  match: IpLoadbalancingRouteRuleMatchesEnum;
  negate: boolean;
  pattern: string | null;
  ruleId: number;
  subField: string | null;
};
