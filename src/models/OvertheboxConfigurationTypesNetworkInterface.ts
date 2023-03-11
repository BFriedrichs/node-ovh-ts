/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvertheboxConfigurationNetworkInterfaceMultipathEnum } from './OvertheboxConfigurationNetworkInterfaceMultipathEnum';
import { OvertheboxConfigurationNetworkInterfaceProtoEnum } from './OvertheboxConfigurationNetworkInterfaceProtoEnum';
import { OvertheboxConfigurationNetworkInterfaceTypeEnum } from './OvertheboxConfigurationNetworkInterfaceTypeEnum';

export type OvertheboxConfigurationTypesNetworkInterface = {
  gateway: string | null;
  ifname?: string;
  interfaceName?: string;
  ip: string | null;
  ipv6: boolean | null;
  mtu: number | null;
  multipath: OvertheboxConfigurationNetworkInterfaceMultipathEnum | null;
  netmask: string | null;
  protocol: OvertheboxConfigurationNetworkInterfaceProtoEnum | null;
  routingTable: string | null;
  type: OvertheboxConfigurationNetworkInterfaceTypeEnum | null;
};
