/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTaskStatusEnum } from './DedicatedTaskStatusEnum';
import { DedicatedHousingTaskFunctionEnum } from './DedicatedHousingTaskFunctionEnum';

export type DedicatedHousingTask = {
  comment?: string | null;
  doneDate?: Date | null;
  function?: DedicatedHousingTaskFunctionEnum;
  lastUpdate?: Date | null;
  startDate?: Date;
  status?: DedicatedTaskStatusEnum;
  taskId?: number;
};
