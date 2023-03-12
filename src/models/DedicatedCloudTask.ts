/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCloudTaskStateEnum } from './DedicatedCloudTaskStateEnum';

export type DedicatedCloudTask = {
  createdBy?: string | null;
  createdFrom?: string | null;
  datacenterId?: number | null;
  description?: string | null;
  endDate?: Date | null;
  executionDate?: Date;
  filerId?: number | null;
  hostId?: number | null;
  lastModificationDate?: Date | null;
  maintenanceDateFrom?: Date | null;
  maintenanceDateTo?: Date | null;
  name?: string;
  network?: string | null;
  networkAccessId?: number | null;
  orderId?: number | null;
  parentTaskId?: number | null;
  progress?: number;
  state?: DedicatedCloudTaskStateEnum;
  taskId?: number;
  type?: string;
  userId?: number | null;
  vlanId?: number | null;
};
