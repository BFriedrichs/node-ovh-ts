/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudOperationStatusEnum } from './CloudOperationStatusEnum';

export type CloudSubOperation = {
  action: string;
  completedAt: Date | null;
  id: string;
  progress: number;
  regions: string[] | null;
  resourceId: string | null;
  startedAt: Date | null;
  status: CloudOperationStatusEnum;
};
