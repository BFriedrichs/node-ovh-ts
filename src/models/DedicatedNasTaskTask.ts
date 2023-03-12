/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedStorageTaskFunctionEnum } from './DedicatedStorageTaskFunctionEnum';
import { DedicatedTaskStatusEnum } from './DedicatedTaskStatusEnum';

export type DedicatedNasTaskTask = {
  details: string | null;
  doneDate: Date | null;
  lastUpdate: Date | null;
  operation: DedicatedStorageTaskFunctionEnum;
  partitionName: string | null;
  status: DedicatedTaskStatusEnum;
  storageName: string | null;
  taskId: number;
  todoDate: Date | null;
};
