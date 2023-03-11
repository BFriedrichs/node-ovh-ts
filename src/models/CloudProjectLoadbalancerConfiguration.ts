/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerFrontend } from './CloudProjectLoadbalancerFrontend';
import { CloudProjectLoadbalancerBackend } from './CloudProjectLoadbalancerBackend';

export type CloudProjectLoadbalancerConfiguration = {
  backends: CloudProjectLoadbalancerBackend;
  certificates: string;
  frontends: CloudProjectLoadbalancerFrontend;
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking;
  version: number;
};
