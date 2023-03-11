/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebOvhConfigAvailableEngineVersionEnum } from './HostingWebOvhConfigAvailableEngineVersionEnum';
import { HostingWebOvhConfigEnvironmentEnum } from './HostingWebOvhConfigEnvironmentEnum';
import { HostingWebOvhconfigContainerEnum } from './HostingWebOvhconfigContainerEnum';
import { HostingWebOvhConfigEngineNameEnum } from './HostingWebOvhConfigEngineNameEnum';
import { HostingWebOvhConfigHttpFirewallEnum } from './HostingWebOvhConfigHttpFirewallEnum';

export type HostingWebOvhConfigRecommendedValues = {
  container: HostingWebOvhconfigContainerEnum;
  engineName: HostingWebOvhConfigEngineNameEnum;
  engineVersion: HostingWebOvhConfigAvailableEngineVersionEnum;
  environment: HostingWebOvhConfigEnvironmentEnum;
  httpFirewall: HostingWebOvhConfigHttpFirewallEnum;
};
