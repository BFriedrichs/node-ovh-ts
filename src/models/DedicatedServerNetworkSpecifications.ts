/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerTrafficDetails } from './DedicatedServerTrafficDetails';
import { DedicatedServerVmacDetails } from './DedicatedServerVmacDetails';
import { DedicatedServerBandwidthDetails } from './DedicatedServerBandwidthDetails';
import { DedicatedServerSwitchingDetails } from './DedicatedServerSwitchingDetails';
import { DedicatedServerOlaDetails } from './DedicatedServerOlaDetails';
import { DedicatedServerRoutingDetails } from './DedicatedServerRoutingDetails';
import { DedicatedServerBandwidthvRackDetails } from './DedicatedServerBandwidthvRackDetails';

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
