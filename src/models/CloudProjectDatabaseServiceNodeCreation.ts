/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceNodeRoleEnum } from './CloudProjectDatabaseServiceNodeRoleEnum';
import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';

export type CloudProjectDatabaseServiceNodeCreation = {
  createdAt: Date;
  flavor: string;
  id: string;
  name: string;
  port: number;
  region: string;
  role: CloudProjectDatabaseServiceNodeRoleEnum | null;
  status: CloudProjectDatabaseStatusEnum;
};
