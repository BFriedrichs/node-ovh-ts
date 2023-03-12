/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebOvhConfigAvailableEngineVersionEnum } from './HostingWebOvhConfigAvailableEngineVersionEnum';
import { HostingWebOvhConfigEngineNameEnum } from './HostingWebOvhConfigEngineNameEnum';
import { HostingWebOvhconfigContainerEnum } from './HostingWebOvhconfigContainerEnum';
import { HostingWebOvhConfigHttpFirewallEnum } from './HostingWebOvhConfigHttpFirewallEnum';
import { HostingWebOvhConfigEnvironmentEnum } from './HostingWebOvhConfigEnvironmentEnum';

export type HostingWebOvhConfigRecommendedValues = {
  container?: HostingWebOvhconfigContainerEnum;
  engineName?: HostingWebOvhConfigEngineNameEnum;
  engineVersion?: HostingWebOvhConfigAvailableEngineVersionEnum;
  environment?: HostingWebOvhConfigEnvironmentEnum;
  httpFirewall?: HostingWebOvhConfigHttpFirewallEnum;
};
