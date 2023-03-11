/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerFirewallModelEnum } from './DedicatedServerFirewallModelEnum';
import { DedicatedServerFirewallModeEnum } from './DedicatedServerFirewallModeEnum';

export type DedicatedServerFirewall = {
  enabled: boolean;
  firewall: string;
  ip: string;
  mode: DedicatedServerFirewallModeEnum;
  model: DedicatedServerFirewallModelEnum | null;
};
