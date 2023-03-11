/* WARNING: This file is auto-generated . Do not edit manually. */

import { IpRoutedTo } from './IpRoutedTo';
import { IpTaskFunctionEnum } from './IpTaskFunctionEnum';
import { IpTaskStatusEnum } from './IpTaskStatusEnum';

export type IpIpTask = {
  comment: string | null;
  destination: IpRoutedTo | null;
  doneDate: Date | null;
  function: IpTaskFunctionEnum;
  lastUpdate: Date | null;
  startDate: Date;
  status: IpTaskStatusEnum;
  taskId: number;
};
