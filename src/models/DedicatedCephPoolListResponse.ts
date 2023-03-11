/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedCephPoolListResponsePoolTypeEnum } from './DedicatedCephPoolListResponsePoolTypeEnum';

export type DedicatedCephPoolListResponse = {
  backup: boolean;
  minActiveReplicas: number;
  name: string;
  poolType: DedicatedCephPoolListResponsePoolTypeEnum;
  replicaCount: number;
  serviceName: string;
};
