/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerBackend } from './CloudProjectLoadbalancerBackend';
import { CloudProjectLoadbalancerFrontend } from './CloudProjectLoadbalancerFrontend';

export type CloudProjectLoadbalancerConfiguration = {
  backends?: CloudProjectLoadbalancerBackend[];
  certificates?: string[];
  frontends?: CloudProjectLoadbalancerFrontend[];
  networking?: CloudProjectLoadbalancerConfigurationNetworkingNetworking;
  version?: number;
};
