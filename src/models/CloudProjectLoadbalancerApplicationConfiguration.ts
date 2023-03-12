/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerActions } from './CloudProjectLoadbalancerActions';
import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerEntryPoint } from './CloudProjectLoadbalancerEntryPoint';
import { CloudProjectLoadbalancerTarget } from './CloudProjectLoadbalancerTarget';
import { CloudProjectLoadbalancerCondition } from './CloudProjectLoadbalancerCondition';

export type CloudProjectLoadbalancerApplicationConfiguration = {
  actions: CloudProjectLoadbalancerActions | null;
  certificates: string[];
  conditions: CloudProjectLoadbalancerCondition[] | null;
  entryPoints: CloudProjectLoadbalancerEntryPoint[];
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking;
  targets: CloudProjectLoadbalancerTarget[] | null;
  version: number;
};
