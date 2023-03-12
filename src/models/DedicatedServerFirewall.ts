/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerFirewallModeEnum } from './DedicatedServerFirewallModeEnum';
import { DedicatedServerFirewallModelEnum } from './DedicatedServerFirewallModelEnum';

export type DedicatedServerFirewall = {
  enabled?: boolean;
  firewall?: string;
  ip?: string;
  mode?: DedicatedServerFirewallModeEnum;
  model?: DedicatedServerFirewallModelEnum | null;
};
