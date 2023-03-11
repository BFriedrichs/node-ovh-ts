/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvertheboxConfigurationFirewallProtocolEnum } from './OvertheboxConfigurationFirewallProtocolEnum';
import { OvertheboxConfigurationFirewallRedirectTargetEnum } from './OvertheboxConfigurationFirewallRedirectTargetEnum';

export type OvertheboxConfigurationTypesFirewallRedirect = {
  destinationIp: string | null;
  destinationPort: string | null;
  destinationZone: string | null;
  name?: string;
  protocol: OvertheboxConfigurationFirewallProtocolEnum | null;
  sourceDestinationIp: string | null;
  sourceDestinationPort: string | null;
  sourceIp: string | null;
  sourcePort: number | null;
  sourceZone?: string;
  target: OvertheboxConfigurationFirewallRedirectTargetEnum | null;
};
