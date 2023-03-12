/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerAddress } from './CloudProjectLoadbalancerAddress';
import { CloudProjectLoadbalancerAddresses } from './CloudProjectLoadbalancerAddresses';
import { CloudProjectLoadbalancerStatusEnum } from './CloudProjectLoadbalancerStatusEnum';
import { CloudProjectLoadbalancerConfigurationVersion } from './CloudProjectLoadbalancerConfigurationVersion';
import { CloudProjectLoadbalancerNetworkingNetworking } from './CloudProjectLoadbalancerNetworkingNetworking';
import { CloudProjectLoadbalancerSizeEnum } from './CloudProjectLoadbalancerSizeEnum';

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
