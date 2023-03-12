/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpFirewallProtocolEnum } from './IpFirewallProtocolEnum';
import { IpFirewallActionEnum } from './IpFirewallActionEnum';
import { IpFirewallRuleStateEnum } from './IpFirewallRuleStateEnum';

export type IpFirewallNetworkRule = {
  action?: IpFirewallActionEnum;
  creationDate?: Date;
  destination?: string;
  destinationPort?: string | null;
  fragments?: boolean | null;
  protocol?: IpFirewallProtocolEnum;
  rule?: string;
  sequence?: number;
  source?: string;
  sourcePort?: string | null;
  state?: IpFirewallRuleStateEnum;
  tcpOption?: string | null;
};
