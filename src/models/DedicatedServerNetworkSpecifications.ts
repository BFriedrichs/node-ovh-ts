/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerBandwidthDetails } from './DedicatedServerBandwidthDetails';
import { DedicatedServerVmacDetails } from './DedicatedServerVmacDetails';
import { DedicatedServerTrafficDetails } from './DedicatedServerTrafficDetails';
import { DedicatedServerSwitchingDetails } from './DedicatedServerSwitchingDetails';
import { DedicatedServerBandwidthvRackDetails } from './DedicatedServerBandwidthvRackDetails';
import { DedicatedServerOlaDetails } from './DedicatedServerOlaDetails';
import { DedicatedServerRoutingDetails } from './DedicatedServerRoutingDetails';

export type DedicatedServerNetworkSpecifications = {
  bandwidth?: DedicatedServerBandwidthDetails | null;
  connection?: number | null;
  ola?: DedicatedServerOlaDetails | null;
  routing?: DedicatedServerRoutingDetails | null;
  switching?: DedicatedServerSwitchingDetails | null;
  traffic?: DedicatedServerTrafficDetails | null;
  vmac?: DedicatedServerVmacDetails;
  vrack?: DedicatedServerBandwidthvRackDetails | null;
};
