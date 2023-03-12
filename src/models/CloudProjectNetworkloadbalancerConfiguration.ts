/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectNetworkloadbalancerEntryPoint } from './CloudProjectNetworkloadbalancerEntryPoint';
import { CloudProjectNetworkloadbalancerCondition } from './CloudProjectNetworkloadbalancerCondition';
import { CloudProjectNetworkloadbalancerActions } from './CloudProjectNetworkloadbalancerActions';
import { CloudProjectLoadbalancerTarget } from './CloudProjectLoadbalancerTarget';

export type CloudProjectNetworkloadbalancerConfiguration = {
  actions: CloudProjectNetworkloadbalancerActions | null;
  conditions: CloudProjectNetworkloadbalancerCondition[] | null;
  entryPoints: CloudProjectNetworkloadbalancerEntryPoint[];
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking;
  targets: CloudProjectLoadbalancerTarget[] | null;
  version: number;
};
