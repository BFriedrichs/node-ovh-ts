/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudNetworkCreateSubnetSummary } from './CloudNetworkCreateSubnetSummary';
import { CloudNetworkCreateGatewaySummary } from './CloudNetworkCreateGatewaySummary';

export type CloudNetworkCreateNetwork = {
  gateway: CloudNetworkCreateGatewaySummary | null;
  name?: string;
  subnet?: CloudNetworkCreateSubnetSummary;
  vlanId: number;
};
