/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseDumpDateEnum } from './HostingWebDatabaseDumpDateEnum';
import { HostingWebDatabaseDumpStatusEnum } from './HostingWebDatabaseDumpStatusEnum';

export type HostingWebDatabaseDump = {
  creationDate?: Date;
  deletionDate?: Date;
  id?: number;
  status?: HostingWebDatabaseDumpStatusEnum;
  taskId?: number | null;
  type?: HostingWebDatabaseDumpDateEnum;
  url?: string | null;
};
