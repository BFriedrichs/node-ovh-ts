/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudVirtualDeviceConnectInfoStatus } from './DedicatedCloudVirtualDeviceConnectInfoStatus';
import { DedicatedCloudVmNetworkBacking } from './DedicatedCloudVmNetworkBacking';

export type DedicatedCloudVmNetwork = {
  allowGuestControl: boolean;
  backing: DedicatedCloudVmNetworkBacking;
  connected: boolean;
  controler: string;
  label: string;
  macAddress: string;
  startConnected: boolean;
  status: DedicatedCloudVirtualDeviceConnectInfoStatus;
};
