/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebAttachedDomainStatusEnum } from './HostingWebAttachedDomainStatusEnum';
import { HostingWebAttachedDomainCapabilities } from './HostingWebAttachedDomainCapabilities';
import { HostingWebAttachedDomainCdnEnum } from './HostingWebAttachedDomainCdnEnum';
import { HostingWebAttachedDomainFirewallEnum } from './HostingWebAttachedDomainFirewallEnum';
import { HostingWebCountryEnum } from './HostingWebCountryEnum';

export type HostingWebAttachedDomain = {
  capabilities: HostingWebAttachedDomainCapabilities[];
  cdn: HostingWebAttachedDomainCdnEnum;
  domain: string;
  firewall: HostingWebAttachedDomainFirewallEnum;
  ipLocation: HostingWebCountryEnum | null;
  isFlushable: boolean;
  ownLog: string | null;
  path: string;
  runtimeId: number | null;
  ssl: boolean | null;
  status: HostingWebAttachedDomainStatusEnum;
  taskId: number | null;
};
