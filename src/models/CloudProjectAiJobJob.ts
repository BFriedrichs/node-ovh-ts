/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiJobJobStatus } from './CloudProjectAiJobJobStatus';
import { CloudProjectAiJobJobSpec } from './CloudProjectAiJobJobSpec';

export type CloudProjectAiJobJob = {
  createdAt: Date;
  id: string;
  spec: CloudProjectAiJobJobSpec;
  status: CloudProjectAiJobJobStatus;
  updatedAt: Date;
  user: string;
};
