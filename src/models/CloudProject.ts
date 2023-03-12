/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudAccessTypeEnum } from './CloudAccessTypeEnum';
import { CloudProjectProjectStatusEnum } from './CloudProjectProjectStatusEnum';

export type CloudProject = {
  access?: CloudAccessTypeEnum;
  creationDate?: Date;
  description?: string | null;
  expiration?: Date | null;
  manualQuota?: boolean;
  orderId?: number | null;
  planCode?: string;
  projectName?: string | null;
  project_id?: string;
  status?: CloudProjectProjectStatusEnum;
  unleash?: boolean;
};
