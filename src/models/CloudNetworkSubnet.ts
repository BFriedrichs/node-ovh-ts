/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudNetworkIPPool } from './CloudNetworkIPPool';

export type CloudNetworkSubnet = {
  cidr: string;
  dhcpEnabled: boolean;
  gatewayIp: string | null;
  id: string;
  ipPools: CloudNetworkIPPool[];
};
