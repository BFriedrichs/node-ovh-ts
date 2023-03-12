/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudNetworkCreateGatewaySummary } from './CloudNetworkCreateGatewaySummary';
import { CloudNetworkCreateSubnetSummary } from './CloudNetworkCreateSubnetSummary';

export type CloudNetworkCreateNetwork = {
  gateway?: CloudNetworkCreateGatewaySummary | null;
  name: string;
  subnet: CloudNetworkCreateSubnetSummary;
  vlanId?: number;
};
