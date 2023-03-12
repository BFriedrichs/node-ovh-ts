/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConfigurationVersion } from './CloudProjectLoadbalancerConfigurationVersion';
import { CloudProjectLoadbalancerStatusEnum } from './CloudProjectLoadbalancerStatusEnum';
import { CloudProjectLoadbalancerSizeEnum } from './CloudProjectLoadbalancerSizeEnum';
import { CloudProjectLoadbalancerAddresses } from './CloudProjectLoadbalancerAddresses';
import { CloudProjectLoadbalancerAddress } from './CloudProjectLoadbalancerAddress';
import { CloudProjectLoadbalancerNetworkingNetworking } from './CloudProjectLoadbalancerNetworkingNetworking';

export type CloudProjectLoadBalancer = {
  address?: CloudProjectLoadbalancerAddress;
  configuration?: CloudProjectLoadbalancerConfigurationVersion;
  createdAt?: Date;
  description?: string | null;
  egressAddress?: CloudProjectLoadbalancerAddresses;
  id?: string;
  name?: string | null;
  networking?: CloudProjectLoadbalancerNetworkingNetworking;
  openstackRegion?: string;
  region?: string;
  size?: CloudProjectLoadbalancerSizeEnum;
  status?: CloudProjectLoadbalancerStatusEnum;
};
