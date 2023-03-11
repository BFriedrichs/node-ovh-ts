/* WARNING: This file is auto-generated . Do not edit manually. */

import { MeBillingTasksTaskNameEnum } from './MeBillingTasksTaskNameEnum';
import { MeBillingTasksTaskStatusEnum } from './MeBillingTasksTaskStatusEnum';
import { MeBillingTasksTaskMetadatum } from './MeBillingTasksTaskMetadatum';

export type MeBillingTasksTask = {
  id: number;
  metadata: MeBillingTasksTaskMetadatum;
  name: MeBillingTasksTaskNameEnum;
  status: MeBillingTasksTaskStatusEnum;
  step: string;
};
