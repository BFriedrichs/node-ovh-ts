/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseTaskFunctionEnum } from './HostingPrivateDatabaseTaskFunctionEnum';
import { HostingPrivateDatabaseTaskStatusEnum } from './HostingPrivateDatabaseTaskStatusEnum';

export type HostingPrivateDatabaseTask = {
  databaseName?: string | null;
  doneDate?: Date | null;
  dumpId?: number | null;
  function?: HostingPrivateDatabaseTaskFunctionEnum;
  id?: number;
  lastUpdate?: Date | null;
  startDate?: Date;
  status?: HostingPrivateDatabaseTaskStatusEnum;
  userName?: string | null;
};
