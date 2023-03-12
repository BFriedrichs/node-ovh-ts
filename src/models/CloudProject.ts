/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectProjectStatusEnum } from './CloudProjectProjectStatusEnum';
import { CloudAccessTypeEnum } from './CloudAccessTypeEnum';

export type CloudProject = {
  access: CloudAccessTypeEnum;
  creationDate: Date;
  description: string | null;
  expiration: Date | null;
  manualQuota: boolean;
  orderId: number | null;
  planCode: string;
  projectName: string | null;
  project_id: string;
  status: CloudProjectProjectStatusEnum;
  unleash: boolean;
};
