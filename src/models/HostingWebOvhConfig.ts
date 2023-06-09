/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebOvhConfigEngineVersionEnum } from './HostingWebOvhConfigEngineVersionEnum';
import { HostingWebOvhConfigEngineNameEnum } from './HostingWebOvhConfigEngineNameEnum';
import { HostingWebOvhConfigStatusEnum } from './HostingWebOvhConfigStatusEnum';
import { HostingWebOvhConfigHttpFirewallEnum } from './HostingWebOvhConfigHttpFirewallEnum';
import { HostingWebOvhConfigEnvironmentEnum } from './HostingWebOvhConfigEnvironmentEnum';

export type HostingWebOvhConfig = {
  container?: string;
  creationDate?: Date;
  engineName?: HostingWebOvhConfigEngineNameEnum;
  engineVersion?: HostingWebOvhConfigEngineVersionEnum;
  environment?: HostingWebOvhConfigEnvironmentEnum;
  fileExist?: boolean;
  historical?: boolean | null;
  httpFirewall?: HostingWebOvhConfigHttpFirewallEnum;
  id?: number;
  path?: string | null;
  status?: HostingWebOvhConfigStatusEnum;
  taskId?: number | null;
};
