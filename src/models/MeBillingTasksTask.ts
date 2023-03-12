/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeBillingTasksTaskMetadatum } from './MeBillingTasksTaskMetadatum';
import { MeBillingTasksTaskStatusEnum } from './MeBillingTasksTaskStatusEnum';
import { MeBillingTasksTaskNameEnum } from './MeBillingTasksTaskNameEnum';

export type MeBillingTasksTask = {
  id: number;
  metadata: MeBillingTasksTaskMetadatum[];
  name: MeBillingTasksTaskNameEnum;
  status: MeBillingTasksTaskStatusEnum;
  step: string;
};
