/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerPortRange } from './CloudProjectLoadbalancerPortRange';
import { CloudProjectLoadbalancerRule } from './CloudProjectLoadbalancerRule';

export type CloudProjectNetworkloadbalancerEntryPoint = {
  defaultTarget: string | null;
  name?: string;
  portRanges: CloudProjectLoadbalancerPortRange[] | null;
  ports: number[] | null;
  rules: CloudProjectLoadbalancerRule[];
};
