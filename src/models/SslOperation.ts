/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslOperationStatusEnum } from './SslOperationStatusEnum';
import { SslOperationFunctionEnum } from './SslOperationFunctionEnum';

export type SslOperation = {
  doneDate: Date | null;
  function: SslOperationFunctionEnum;
  lastUpdate: Date;
  startDate: Date;
  status: SslOperationStatusEnum;
  taskId: number;
};
