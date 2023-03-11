/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpFirewallRuleStateEnum } from './IpFirewallRuleStateEnum';
import { IpFirewallProtocolEnum } from './IpFirewallProtocolEnum';
import { IpFirewallActionEnum } from './IpFirewallActionEnum';

export type IpFirewallNetworkRule = {
  action: IpFirewallActionEnum;
  creationDate: Date;
  destination: string;
  destinationPort: string | null;
  fragments: boolean | null;
  protocol: IpFirewallProtocolEnum;
  rule: string;
  sequence: number;
  source: string;
  sourcePort: string | null;
  state: IpFirewallRuleStateEnum;
  tcpOption: string | null;
};
