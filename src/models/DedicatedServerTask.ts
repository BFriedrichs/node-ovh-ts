/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedTaskStatusEnum } from './DedicatedTaskStatusEnum';
import { DedicatedTaskFunctionEnum } from './DedicatedTaskFunctionEnum';

export type DedicatedServerTask = {
  comment: string | null;
  doneDate: Date | null;
  function: DedicatedTaskFunctionEnum;
  lastUpdate: Date | null;
  needSchedule: boolean;
  note: string | null;
  plannedInterventionId: number | null;
  startDate: Date;
  status: DedicatedTaskStatusEnum;
  tags: string | null;
  taskId: number;
  ticketReference: string | null;
};
