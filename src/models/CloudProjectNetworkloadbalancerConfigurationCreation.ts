/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectNetworkloadbalancerEntryPoint } from './CloudProjectNetworkloadbalancerEntryPoint';
import { CloudProjectNetworkloadbalancerCondition } from './CloudProjectNetworkloadbalancerCondition';
import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectNetworkloadbalancerActions } from './CloudProjectNetworkloadbalancerActions';
import { CloudProjectLoadbalancerTarget } from './CloudProjectLoadbalancerTarget';

export type CloudProjectNetworkloadbalancerConfigurationCreation = {
  actions?: CloudProjectNetworkloadbalancerActions | null;
  conditions?: CloudProjectNetworkloadbalancerCondition[] | null;
  entryPoints?: CloudProjectNetworkloadbalancerEntryPoint[];
  networking?: CloudProjectLoadbalancerConfigurationNetworkingNetworking | null;
  targets?: CloudProjectLoadbalancerTarget[] | null;
  version?: number;
};
