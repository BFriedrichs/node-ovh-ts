/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectNewProjectStatusEnum } from './CloudProjectNewProjectStatusEnum';
import { CloudProjectNewProjectCredit } from './CloudProjectNewProjectCredit';

export type CloudProjectNewProject = {
  agreements: number[] | null;
  credit: CloudProjectNewProjectCredit | null;
  description: string | null;
  orderId: number | null;
  project: string | null;
  status: CloudProjectNewProjectStatusEnum;
};
