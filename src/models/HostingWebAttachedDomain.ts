/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebAttachedDomainCdnEnum } from './HostingWebAttachedDomainCdnEnum';
import { HostingWebCountryEnum } from './HostingWebCountryEnum';
import { HostingWebAttachedDomainFirewallEnum } from './HostingWebAttachedDomainFirewallEnum';
import { HostingWebAttachedDomainCapabilities } from './HostingWebAttachedDomainCapabilities';
import { HostingWebAttachedDomainStatusEnum } from './HostingWebAttachedDomainStatusEnum';

export type HostingWebAttachedDomain = {
  capabilities: HostingWebAttachedDomainCapabilities;
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
