/* WARNING: This file is auto-generated . Do not edit manually. */

import { OvertheboxConfigurationFirewallProtocolEnum } from './OvertheboxConfigurationFirewallProtocolEnum';
import { OvertheboxConfigurationFirewallRuleTargetEnum } from './OvertheboxConfigurationFirewallRuleTargetEnum';
import { OvertheboxConfigurationFirewallRuleFamilyEnum } from './OvertheboxConfigurationFirewallRuleFamilyEnum';

export type OvertheboxConfigurationTypesFirewallRule = {
  destinationIp?: string | null;
  destinationPort?: string | null;
  destinationZone?: string | null;
  family?: OvertheboxConfigurationFirewallRuleFamilyEnum | null;
  name?: string | null;
  protocol?: OvertheboxConfigurationFirewallProtocolEnum | null;
  sourceIp?: string | null;
  sourcePort?: string | null;
  sourceZone?: string;
  target?: OvertheboxConfigurationFirewallRuleTargetEnum;
};
