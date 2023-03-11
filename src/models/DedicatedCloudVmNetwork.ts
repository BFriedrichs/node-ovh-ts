/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudVmNetworkBacking } from './DedicatedCloudVmNetworkBacking';
import { DedicatedCloudVirtualDeviceConnectInfoStatus } from './DedicatedCloudVirtualDeviceConnectInfoStatus';

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
