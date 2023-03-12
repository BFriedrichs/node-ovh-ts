/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceCurrentqueriesStateEnum } from './CloudProjectDatabaseServiceCurrentqueriesStateEnum';
import { CloudProjectDatabaseServiceCurrentqueriesWaitEventTypeEnum } from './CloudProjectDatabaseServiceCurrentqueriesWaitEventTypeEnum';

export type CloudProjectDatabaseServiceCurrentqueriesQuery = {
  applicationName?: string;
  backendStart?: Date | null;
  backendType?: string | null;
  backendXid?: number | null;
  backendXmin?: number | null;
  clientHostname?: string | null;
  clientIp?: string | null;
  clientPort?: number | null;
  databaseId?: number | null;
  databaseName?: string;
  leaderPid?: number | null;
  pid?: number;
  query?: string;
  queryDuration?: number;
  queryStart?: Date | null;
  state?: CloudProjectDatabaseServiceCurrentqueriesStateEnum;
  stateChange?: Date | null;
  transactionStart?: Date | null;
  userId?: number | null;
  userName?: string;
  waitEvent?: string | null;
  waitEventType?: CloudProjectDatabaseServiceCurrentqueriesWaitEventTypeEnum | null;
};
