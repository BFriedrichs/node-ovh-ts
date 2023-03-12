/* WARNING: This file is auto-generated . Do not edit manually. */

import { MsServicesTaskFunctionEnum } from './MsServicesTaskFunctionEnum';
import { MsServicesTaskStatusEnum } from './MsServicesTaskStatusEnum';

export type MsServicesTask = {
  finishDate?: Date | null;
  function?: MsServicesTaskFunctionEnum;
  id?: number;
  status?: MsServicesTaskStatusEnum;
  todoDate?: Date;
};
