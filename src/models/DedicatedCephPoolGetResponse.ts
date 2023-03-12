/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCephPoolGetResponsePoolTypeEnum } from './DedicatedCephPoolGetResponsePoolTypeEnum';

export type DedicatedCephPoolGetResponse = {
  backup?: boolean;
  minActiveReplicas?: number;
  name?: string;
  poolType?: DedicatedCephPoolGetResponsePoolTypeEnum;
  replicaCount?: number;
  serviceName?: string;
};
