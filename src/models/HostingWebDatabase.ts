/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseStateEnum } from './HostingWebDatabaseStateEnum';
import { HostingWebDatabaseModeEnum } from './HostingWebDatabaseModeEnum';
import { HostingWebDatabaseVersionEnum } from './HostingWebDatabaseVersionEnum';
import { HostingWebDatabaseSupportedVersionEnum } from './HostingWebDatabaseSupportedVersionEnum';
import { HostingWebDatabaseStatusEnum } from './HostingWebDatabaseStatusEnum';
import { HostingWebDatabaseDatabaseTypeEnum } from './HostingWebDatabaseDatabaseTypeEnum';

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
