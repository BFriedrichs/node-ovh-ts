/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTaskStatusEnum } from './DedicatedTaskStatusEnum';
import { DedicatedOperationFunctionEnum } from './DedicatedOperationFunctionEnum';

export type DedicatedServerOperation = {
  comment: string | null;
  doneDate: Date | null;
  function: DedicatedOperationFunctionEnum;
  lastUpdate: Date | null;
  operationId: string;
  startDate: Date;
  status: DedicatedTaskStatusEnum;
};
