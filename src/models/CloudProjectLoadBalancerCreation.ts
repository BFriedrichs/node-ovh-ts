/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectLoadbalancerNetworkingNetworkingCreation } from './CloudProjectLoadbalancerNetworkingNetworkingCreation';
import { CloudProjectLoadbalancerSizeEnum } from './CloudProjectLoadbalancerSizeEnum';

export type CloudProjectLoadBalancerCreation = {
  description: string | null;
  id: string;
  name: string | null;
  networking: CloudProjectLoadbalancerNetworkingNetworkingCreation | null;
  openstackRegion: string;
  region?: string;
  size: CloudProjectLoadbalancerSizeEnum | null;
};
