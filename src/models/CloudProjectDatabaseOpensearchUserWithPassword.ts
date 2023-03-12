/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseOpensearchUserAcl } from './CloudProjectDatabaseOpensearchUserAcl';
import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';

export type CloudProjectDatabaseOpensearchUserWithPassword = {
  acls: CloudProjectDatabaseOpensearchUserAcl[];
  createdAt: Date;
  id: string;
  password: string;
  status: CloudProjectDatabaseStatusEnum;
  username: string;
};
