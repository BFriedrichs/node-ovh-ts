/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerBackend } from './CloudProjectLoadbalancerBackend';
import { CloudProjectLoadbalancerFrontend } from './CloudProjectLoadbalancerFrontend';
import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';

export type CloudProjectLoadbalancerConfiguration = {
  backends: CloudProjectLoadbalancerBackend[];
  certificates: string[];
  frontends: CloudProjectLoadbalancerFrontend[];
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking;
  version: number;
};
