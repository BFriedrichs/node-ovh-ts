/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerConfigurationVersion } from './CloudProjectLoadbalancerConfigurationVersion';
import { CloudProjectLoadbalancerSizeEnum } from './CloudProjectLoadbalancerSizeEnum';
import { CloudProjectLoadbalancerStatusEnum } from './CloudProjectLoadbalancerStatusEnum';
import { CloudProjectLoadbalancerNetworkingNetworking } from './CloudProjectLoadbalancerNetworkingNetworking';
import { CloudProjectLoadbalancerAddress } from './CloudProjectLoadbalancerAddress';
import { CloudProjectLoadbalancerAddresses } from './CloudProjectLoadbalancerAddresses';

export type CloudProjectLoadBalancer = {
  address: CloudProjectLoadbalancerAddress;
  configuration: CloudProjectLoadbalancerConfigurationVersion;
  createdAt: Date;
  description: string | null;
  egressAddress: CloudProjectLoadbalancerAddresses;
  id: string;
  name: string | null;
  networking: CloudProjectLoadbalancerNetworkingNetworking;
  openstackRegion: string;
  region: string;
  size: CloudProjectLoadbalancerSizeEnum;
  status: CloudProjectLoadbalancerStatusEnum;
};
