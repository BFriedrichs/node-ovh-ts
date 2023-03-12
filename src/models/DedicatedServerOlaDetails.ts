/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum } from './DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum';
import { DedicatedServerOlaAvailableModes } from './DedicatedServerOlaAvailableModes';

export type DedicatedServerOlaDetails = {
  available: boolean;
  availableModes: DedicatedServerOlaAvailableModes[];
  supportedModes: DedicatedVirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum[] | null;
};
