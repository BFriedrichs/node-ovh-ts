/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerSwitchingDetails } from './DedicatedServerSwitchingDetails';
import { DedicatedServerTrafficDetails } from './DedicatedServerTrafficDetails';
import { DedicatedServerOlaDetails } from './DedicatedServerOlaDetails';
import { DedicatedServerRoutingDetails } from './DedicatedServerRoutingDetails';
import { DedicatedServerVmacDetails } from './DedicatedServerVmacDetails';
import { DedicatedServerBandwidthvRackDetails } from './DedicatedServerBandwidthvRackDetails';
import { DedicatedServerBandwidthDetails } from './DedicatedServerBandwidthDetails';

export type DedicatedServerNetworkSpecifications = {
  bandwidth: DedicatedServerBandwidthDetails | null;
  connection: number | null;
  ola: DedicatedServerOlaDetails | null;
  routing: DedicatedServerRoutingDetails | null;
  switching: DedicatedServerSwitchingDetails | null;
  traffic: DedicatedServerTrafficDetails | null;
  vmac: DedicatedServerVmacDetails;
  vrack: DedicatedServerBandwidthvRackDetails | null;
};
