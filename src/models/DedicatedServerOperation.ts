/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedOperationFunctionEnum } from './DedicatedOperationFunctionEnum';
import { DedicatedTaskStatusEnum } from './DedicatedTaskStatusEnum';

export type DedicatedServerOperation = {
  comment: string | null;
  doneDate: Date | null;
  function: DedicatedOperationFunctionEnum;
  lastUpdate: Date | null;
  operationId: string;
  startDate: Date;
  status: DedicatedTaskStatusEnum;
};
