/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectNetworkloadbalancerEntryPoint } from './CloudProjectNetworkloadbalancerEntryPoint';
import { CloudProjectNetworkloadbalancerActions } from './CloudProjectNetworkloadbalancerActions';
import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerTarget } from './CloudProjectLoadbalancerTarget';
import { CloudProjectNetworkloadbalancerCondition } from './CloudProjectNetworkloadbalancerCondition';

export type CloudProjectNetworkloadbalancerConfiguration = {
  actions: CloudProjectNetworkloadbalancerActions | null;
  conditions: CloudProjectNetworkloadbalancerCondition | null;
  entryPoints: CloudProjectNetworkloadbalancerEntryPoint;
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking;
  targets: CloudProjectLoadbalancerTarget | null;
  version: number;
};
