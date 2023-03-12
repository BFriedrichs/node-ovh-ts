/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseDumpDateEnum } from './HostingWebDatabaseDumpDateEnum';
import { HostingWebDatabaseDumpStatusEnum } from './HostingWebDatabaseDumpStatusEnum';

export type HostingWebDump = {
  creationDate?: Date;
  databaseName?: string;
  deletionDate?: Date;
  id?: number;
  orphan?: boolean;
  status?: HostingWebDatabaseDumpStatusEnum;
  taskId?: number | null;
  type?: HostingWebDatabaseDumpDateEnum;
  url?: string | null;
};
