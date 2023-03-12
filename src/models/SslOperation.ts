/* WARNING: This file is auto-generated . Do not edit manually. */

import { SslOperationFunctionEnum } from './SslOperationFunctionEnum';
import { SslOperationStatusEnum } from './SslOperationStatusEnum';

export type SslOperation = {
  doneDate: Date | null;
  function: SslOperationFunctionEnum;
  lastUpdate: Date;
  startDate: Date;
  status: SslOperationStatusEnum;
  taskId: number;
};
