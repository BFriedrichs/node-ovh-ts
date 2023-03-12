/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerBackend } from './CloudProjectLoadbalancerBackend';
import { CloudProjectLoadbalancerFrontend } from './CloudProjectLoadbalancerFrontend';
import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';

export type CloudProjectLoadbalancerConfigurationCreation = {
  backends: CloudProjectLoadbalancerBackend[];
  certificates: string[];
  frontends: CloudProjectLoadbalancerFrontend[];
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking | null;
  version: number;
};
