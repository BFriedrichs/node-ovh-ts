/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailProTaskStatusEnum } from './EmailProTaskStatusEnum';
import { EmailProTaskFunctionEnum } from './EmailProTaskFunctionEnum';

export type EmailProTask = {
  finishDate: Date | null;
  function: EmailProTaskFunctionEnum;
  id: number;
  status: EmailProTaskStatusEnum;
  todoDate: Date;
};
