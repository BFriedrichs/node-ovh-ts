/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseOpensearchUserAcl } from './CloudProjectDatabaseOpensearchUserAcl';
import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';

export type CloudProjectDatabaseOpensearchUser = {
  acls: CloudProjectDatabaseOpensearchUserAcl[];
  createdAt: Date;
  id: string;
  status: CloudProjectDatabaseStatusEnum;
  username: string;
};
