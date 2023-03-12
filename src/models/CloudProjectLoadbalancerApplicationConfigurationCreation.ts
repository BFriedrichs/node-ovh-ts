/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerCondition } from './CloudProjectLoadbalancerCondition';
import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerActions } from './CloudProjectLoadbalancerActions';
import { CloudProjectLoadbalancerEntryPoint } from './CloudProjectLoadbalancerEntryPoint';
import { CloudProjectLoadbalancerTarget } from './CloudProjectLoadbalancerTarget';

export type CloudProjectLoadbalancerApplicationConfigurationCreation = {
  actions?: CloudProjectLoadbalancerActions | null;
  certificates?: string[];
  conditions?: CloudProjectLoadbalancerCondition[] | null;
  entryPoints?: CloudProjectLoadbalancerEntryPoint[];
  networking?: CloudProjectLoadbalancerConfigurationNetworkingNetworking | null;
  targets?: CloudProjectLoadbalancerTarget[] | null;
  version?: number;
};
