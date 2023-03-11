/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseTaskStateEnum } from './LicenseTaskStateEnum';
import { LicenseActionType } from './LicenseActionType';

export type LicenseTask = {
  action: LicenseActionType;
  doneDate: Date | null;
  lastUpdate: Date;
  name: string;
  status: LicenseTaskStateEnum;
  taskId: number;
  todoDate: Date;
};
