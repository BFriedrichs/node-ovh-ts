/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerFrontendModeEnum } from './CloudProjectLoadbalancerFrontendModeEnum';
import { CloudProjectLoadbalancerPortRange } from './CloudProjectLoadbalancerPortRange';
import { CloudProjectLoadbalancerBackendSelector } from './CloudProjectLoadbalancerBackendSelector';

export type CloudProjectLoadbalancerFrontend = {
  backends: CloudProjectLoadbalancerBackendSelector[];
  mode?: CloudProjectLoadbalancerFrontendModeEnum | null;
  name: string;
  port?: number | null;
  portRanges?: CloudProjectLoadbalancerPortRange[] | null;
  ports?: number[] | null;
  tls?: boolean;
  whitelist?: string[];
};
