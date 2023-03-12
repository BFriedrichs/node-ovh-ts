/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabasePostgresqlConnectionpoolSslModeEnum } from './CloudProjectDatabasePostgresqlConnectionpoolSslModeEnum';
import { CloudProjectDatabasePostgresqlConnectionpoolModeEnum } from './CloudProjectDatabasePostgresqlConnectionpoolModeEnum';

export type CloudProjectDatabasePostgresqlConnectionPool = {
  databaseId?: string;
  id?: string;
  mode?: CloudProjectDatabasePostgresqlConnectionpoolModeEnum;
  name?: string;
  port?: number;
  size?: number;
  sslMode?: CloudProjectDatabasePostgresqlConnectionpoolSslModeEnum | null;
  uri?: string;
  userId?: string | null;
};
