/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebDatabaseDumpStatusEnum } from './HostingWebDatabaseDumpStatusEnum';
import { HostingWebDatabaseDumpDateEnum } from './HostingWebDatabaseDumpDateEnum';

export type HostingWebDump = {
  creationDate: Date;
  databaseName: string;
  deletionDate: Date;
  id: number;
  orphan: boolean;
  status: HostingWebDatabaseDumpStatusEnum;
  taskId: number | null;
  type: HostingWebDatabaseDumpDateEnum;
  url: string | null;
};
