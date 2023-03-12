/* WARNING: This file is auto-generated . Do not edit manually. */

import { LicenseActionType } from './LicenseActionType';
import { LicenseTaskStateEnum } from './LicenseTaskStateEnum';

export type LicenseTask = {
  action: LicenseActionType;
  doneDate: Date | null;
  lastUpdate: Date;
  name: string;
  status: LicenseTaskStateEnum;
  taskId: number;
  todoDate: Date;
};
