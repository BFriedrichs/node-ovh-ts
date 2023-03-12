/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectNewProjectCredit } from './CloudProjectNewProjectCredit';
import { CloudProjectNewProjectStatusEnum } from './CloudProjectNewProjectStatusEnum';

export type CloudProjectNewProject = {
  agreements?: number[] | null;
  credit?: CloudProjectNewProjectCredit | null;
  description?: string | null;
  orderId?: number | null;
  project?: string | null;
  status?: CloudProjectNewProjectStatusEnum;
};
