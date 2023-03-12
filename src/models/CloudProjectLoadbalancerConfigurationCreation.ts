/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerBackend } from './CloudProjectLoadbalancerBackend';
import { CloudProjectLoadbalancerFrontend } from './CloudProjectLoadbalancerFrontend';

export type CloudProjectLoadbalancerConfigurationCreation = {
  backends?: CloudProjectLoadbalancerBackend[];
  certificates?: string[];
  frontends?: CloudProjectLoadbalancerFrontend[];
  networking?: CloudProjectLoadbalancerConfigurationNetworkingNetworking | null;
  version?: number;
};
