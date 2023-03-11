/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseStatusEnum } from './HostingWebDatabaseStatusEnum';
import { HostingWebDatabaseVersionEnum } from './HostingWebDatabaseVersionEnum';
import { HostingWebDatabaseStateEnum } from './HostingWebDatabaseStateEnum';
import { HostingWebDatabaseDatabaseTypeEnum } from './HostingWebDatabaseDatabaseTypeEnum';
import { HostingWebDatabaseModeEnum } from './HostingWebDatabaseModeEnum';
import { HostingWebDatabaseSupportedVersionEnum } from './HostingWebDatabaseSupportedVersionEnum';

export type HostingWebDatabase = {
  dumps: number;
  guiURL: string | null;
  lastCheck: Date | null;
  mode: HostingWebDatabaseModeEnum;
  name: string;
  port: number;
  quotaSize: number;
  quotaUsed: number;
  server: string | null;
  state: HostingWebDatabaseStateEnum;
  status: HostingWebDatabaseStatusEnum;
  taskId: number | null;
  type: HostingWebDatabaseDatabaseTypeEnum;
  user: string;
  version: HostingWebDatabaseVersionEnum;
  versionSupport: HostingWebDatabaseSupportedVersionEnum;
};
