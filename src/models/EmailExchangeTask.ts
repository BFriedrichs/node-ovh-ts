/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeTaskStatusEnum } from './EmailExchangeTaskStatusEnum';
import { EmailExchangeTaskFunctionEnum } from './EmailExchangeTaskFunctionEnum';

export type EmailExchangeTask = {
  finishDate: Date | null;
  function: EmailExchangeTaskFunctionEnum;
  id: number;
  status: EmailExchangeTaskStatusEnum;
  todoDate: Date;
};
