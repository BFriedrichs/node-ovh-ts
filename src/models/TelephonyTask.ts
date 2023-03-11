/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTaskStatusEnum } from './TelephonyTaskStatusEnum';

export type TelephonyTask = {
  action: string;
  message: string | null;
  objectCreated: string | null;
  serviceType: string;
  status: TelephonyTaskStatusEnum;
  taskId: number;
};
