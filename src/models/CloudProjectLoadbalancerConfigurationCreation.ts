/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConfigurationNetworkingNetworking } from './CloudProjectLoadbalancerConfigurationNetworkingNetworking';
import { CloudProjectLoadbalancerFrontend } from './CloudProjectLoadbalancerFrontend';
import { CloudProjectLoadbalancerBackend } from './CloudProjectLoadbalancerBackend';

export type CloudProjectLoadbalancerConfigurationCreation = {
  backends: CloudProjectLoadbalancerBackend;
  certificates: string;
  frontends: CloudProjectLoadbalancerFrontend;
  networking: CloudProjectLoadbalancerConfigurationNetworkingNetworking | null;
  version: number;
};
