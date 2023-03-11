/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedHousingTaskFunctionEnum } from './DedicatedHousingTaskFunctionEnum';
import { DedicatedTaskStatusEnum } from './DedicatedTaskStatusEnum';

export type DedicatedHousingTask = {
  comment: string | null;
  doneDate: Date | null;
  function: DedicatedHousingTaskFunctionEnum;
  lastUpdate: Date | null;
  startDate: Date;
  status: DedicatedTaskStatusEnum;
  taskId: number;
};
