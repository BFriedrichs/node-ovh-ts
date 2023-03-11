/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerBackendSelector } from './CloudProjectLoadbalancerBackendSelector';
import { CloudProjectLoadbalancerPortRange } from './CloudProjectLoadbalancerPortRange';
import { CloudProjectLoadbalancerFrontendModeEnum } from './CloudProjectLoadbalancerFrontendModeEnum';

export type CloudProjectLoadbalancerFrontend = {
  backends?: CloudProjectLoadbalancerBackendSelector;
  mode: CloudProjectLoadbalancerFrontendModeEnum | null;
  name?: string;
  port: number | null;
  portRanges: CloudProjectLoadbalancerPortRange | null;
  ports: number | null;
  tls: boolean;
  whitelist: string;
};
