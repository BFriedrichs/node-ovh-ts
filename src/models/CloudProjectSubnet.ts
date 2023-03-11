/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAllocationPool } from './CloudProjectAllocationPool';

export type CloudProjectSubnet = {
  allocationPools: CloudProjectAllocationPool;
  cidr: string;
  dhcpEnabled: boolean;
  gatewayIp: string | null;
  id: string;
  ipVersion: number;
  name: string;
};
