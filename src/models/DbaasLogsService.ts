/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsServicePlanEnum } from './DbaasLogsServicePlanEnum';
import { DbaasLogsServiceStateEnum } from './DbaasLogsServiceStateEnum';

export type DbaasLogsService = {
  createdAt?: Date;
  displayName?: string | null;
  isClusterOwner?: boolean;
  plan?: DbaasLogsServicePlanEnum;
  serviceName?: string;
  state?: DbaasLogsServiceStateEnum;
  updatedAt?: Date | null;
  username?: string;
};
