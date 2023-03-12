/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiJobJobSpec } from './CloudProjectAiJobJobSpec';
import { CloudProjectAiJobJobStatus } from './CloudProjectAiJobJobStatus';

export type CloudProjectAiJobJob = {
  createdAt: Date;
  id: string;
  spec: CloudProjectAiJobJobSpec;
  status: CloudProjectAiJobJobStatus;
  updatedAt: Date;
  user: string;
};
