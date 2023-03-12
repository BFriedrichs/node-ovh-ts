/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseM3dbNamespaceTypeEnum } from './CloudProjectDatabaseM3dbNamespaceTypeEnum';
import { CloudProjectDatabaseM3dbNamespaceRetention } from './CloudProjectDatabaseM3dbNamespaceRetention';

export type CloudProjectDatabaseM3dbNamespaceCreation = {
  id?: string;
  name: string;
  resolution?: number;
  retention?: CloudProjectDatabaseM3dbNamespaceRetention;
  snapshotEnabled?: boolean;
  type: CloudProjectDatabaseM3dbNamespaceTypeEnum;
  writesToCommitLogEnabled?: boolean;
};
