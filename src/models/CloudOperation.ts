/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudOperationStatusEnum } from './CloudOperationStatusEnum';
import { CloudSubOperation } from './CloudSubOperation';

export type CloudOperation = {
  action?: string;
  completedAt?: Date | null;
  createdAt?: Date;
  id?: string;
  progress?: number;
  regions?: string[] | null;
  resourceId?: string | null;
  startedAt?: Date | null;
  status?: CloudOperationStatusEnum;
  subOperations?: CloudSubOperation[] | null;
};
