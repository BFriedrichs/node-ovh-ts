/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDataProcessingEngineParameter } from './CloudProjectDataProcessingEngineParameter';
import { CloudProjectDataProcessingStatusEnum } from './CloudProjectDataProcessingStatusEnum';

export type CloudProjectDataProcessingJob = {
  containerName?: string;
  creationDate: Date | null;
  endDate: Date | null;
  engine?: string;
  engineParameters?: CloudProjectDataProcessingEngineParameter[];
  engineVersion?: string;
  id: string;
  name: string;
  notebook: string | null;
  region?: string;
  returnCode: number | null;
  startDate: Date | null;
  status: CloudProjectDataProcessingStatusEnum;
  ttl: number | null;
};
