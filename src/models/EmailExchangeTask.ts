/* WARNING: This file is auto-generated . Do not edit manually. */

import { EmailExchangeTaskFunctionEnum } from './EmailExchangeTaskFunctionEnum';
import { EmailExchangeTaskStatusEnum } from './EmailExchangeTaskStatusEnum';

export type EmailExchangeTask = {
  finishDate?: Date | null;
  function?: EmailExchangeTaskFunctionEnum;
  id?: number;
  status?: EmailExchangeTaskStatusEnum;
  todoDate?: Date;
};
