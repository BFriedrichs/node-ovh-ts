/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerPortRange } from './CloudProjectLoadbalancerPortRange';
import { CloudProjectLoadbalancerRule } from './CloudProjectLoadbalancerRule';

export type CloudProjectLoadbalancerEntryPoint = {
  defaultTarget: string | null;
  disableH2: boolean | null;
  name?: string;
  portRanges: CloudProjectLoadbalancerPortRange | null;
  ports: number | null;
  rules: CloudProjectLoadbalancerRule;
  tls: boolean;
};
