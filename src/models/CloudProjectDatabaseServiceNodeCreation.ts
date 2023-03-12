/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseStatusEnum } from './CloudProjectDatabaseStatusEnum';
import { CloudProjectDatabaseServiceNodeRoleEnum } from './CloudProjectDatabaseServiceNodeRoleEnum';

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
