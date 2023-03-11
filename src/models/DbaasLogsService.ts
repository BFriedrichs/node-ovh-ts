/* WARNING: This file is auto-generated . Do not edit manually. */

import { DbaasLogsServiceStateEnum } from './DbaasLogsServiceStateEnum';
import { DbaasLogsServicePlanEnum } from './DbaasLogsServicePlanEnum';

export type DbaasLogsService = {
  createdAt: Date;
  displayName: string | null;
  isClusterOwner: boolean;
  plan: DbaasLogsServicePlanEnum;
  serviceName: string;
  state: DbaasLogsServiceStateEnum;
  updatedAt: Date | null;
  username: string;
};
