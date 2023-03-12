/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudExecution } from './CloudExecution';

export type CloudBackup = {
  backupName: string;
  createdAt: Date;
  cron: string;
  executions: CloudExecution[] | null;
  id: string;
  instanceId: string;
  name: string;
};
