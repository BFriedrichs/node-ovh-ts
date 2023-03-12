/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebOvhConfigHttpFirewallEnum } from './HostingWebOvhConfigHttpFirewallEnum';
import { HostingWebOvhConfigAvailableEngineVersionEnum } from './HostingWebOvhConfigAvailableEngineVersionEnum';
import { HostingWebOvhConfigEngineNameEnum } from './HostingWebOvhConfigEngineNameEnum';
import { HostingWebOvhconfigContainerEnum } from './HostingWebOvhconfigContainerEnum';
import { HostingWebOvhConfigEnvironmentEnum } from './HostingWebOvhConfigEnvironmentEnum';

export type HostingWebOvhConfigRecommendedValues = {
  container: HostingWebOvhconfigContainerEnum;
  engineName: HostingWebOvhConfigEngineNameEnum;
  engineVersion: HostingWebOvhConfigAvailableEngineVersionEnum;
  environment: HostingWebOvhConfigEnvironmentEnum;
  httpFirewall: HostingWebOvhConfigHttpFirewallEnum;
};
