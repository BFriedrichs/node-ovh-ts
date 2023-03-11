/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseDumpStatusEnum } from './HostingWebDatabaseDumpStatusEnum';
import { HostingWebDatabaseDumpDateEnum } from './HostingWebDatabaseDumpDateEnum';

export type HostingWebDatabaseDump = {
  creationDate: Date;
  deletionDate: Date;
  id: number;
  status: HostingWebDatabaseDumpStatusEnum;
  taskId: number | null;
  type: HostingWebDatabaseDumpDateEnum;
  url: string | null;
};
