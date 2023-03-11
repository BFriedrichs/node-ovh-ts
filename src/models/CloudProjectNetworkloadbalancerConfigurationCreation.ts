/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectNetworkloadbalancerEntryPoint } from './CloudProjectNetworkloadbalancerEntryPoint';
import { CloudProjectNetworkloadbalancerActions } from './CloudProjectNetworkloadbalancerActions';
import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerTarget } from './CloudProjectLoadbalancerTarget';
import { CloudProjectNetworkloadbalancerCondition } from './CloudProjectNetworkloadbalancerCondition';

export type CloudProjectNetworkloadbalancerConfigurationCreation = {
  actions: CloudProjectNetworkloadbalancerActions | null;
  conditions: CloudProjectNetworkloadbalancerCondition | null;
  entryPoints: CloudProjectNetworkloadbalancerEntryPoint;
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking | null;
  targets: CloudProjectLoadbalancerTarget | null;
  version: number;
};
