/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerEntryPoint } from './CloudProjectLoadbalancerEntryPoint';
import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerTarget } from './CloudProjectLoadbalancerTarget';
import { CloudProjectLoadbalancerCondition } from './CloudProjectLoadbalancerCondition';
import { CloudProjectLoadbalancerActions } from './CloudProjectLoadbalancerActions';

export type CloudProjectLoadbalancerApplicationConfiguration = {
  actions: CloudProjectLoadbalancerActions | null;
  certificates: string;
  conditions: CloudProjectLoadbalancerCondition | null;
  entryPoints: CloudProjectLoadbalancerEntryPoint;
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking;
  targets: CloudProjectLoadbalancerTarget | null;
  version: number;
};
