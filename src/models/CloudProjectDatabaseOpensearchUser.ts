/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';
import { CloudProjectDatabaseOpensearchUserAcl } from './CloudProjectDatabaseOpensearchUserAcl';

export type CloudProjectDatabaseOpensearchUser = {
  acls: CloudProjectDatabaseOpensearchUserAcl;
  createdAt: Date;
  id: string;
  status: CloudProjectDatabaseStatusEnum;
  username: string;
};
