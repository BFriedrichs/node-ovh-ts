/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProTaskFunctionEnum } from './EmailProTaskFunctionEnum';
import { EmailProTaskStatusEnum } from './EmailProTaskStatusEnum';

export type EmailProTask = {
  finishDate: Date | null;
  function: EmailProTaskFunctionEnum;
  id: number;
  status: EmailProTaskStatusEnum;
  todoDate: Date;
};
