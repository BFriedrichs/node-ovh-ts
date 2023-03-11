/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingPrivateDatabaseTaskStatusEnum } from './HostingPrivateDatabaseTaskStatusEnum';
import { HostingPrivateDatabaseTaskFunctionEnum } from './HostingPrivateDatabaseTaskFunctionEnum';

export type HostingPrivateDatabaseTask = {
  databaseName: string | null;
  doneDate: Date | null;
  dumpId: number | null;
  function: HostingPrivateDatabaseTaskFunctionEnum;
  id: number;
  lastUpdate: Date | null;
  startDate: Date;
  status: HostingPrivateDatabaseTaskStatusEnum;
  userName: string | null;
};
