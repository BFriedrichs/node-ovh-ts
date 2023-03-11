/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeDataSyncEnum } from './CloudProjectAiVolumeDataSyncEnum';
import { CloudProjectAiVolumeDataSyncProgressStateEnum } from './CloudProjectAiVolumeDataSyncProgressStateEnum';

export type CloudProjectAiVolumeProgress = {
  completed: number;
  createdAt: Date;
  deleted: number;
  direction: CloudProjectAiVolumeDataSyncEnum;
  eta: number;
  failed: number;
  id: string;
  info: string;
  processed: number;
  skipped: number;
  state: CloudProjectAiVolumeDataSyncProgressStateEnum;
  total: number;
  transferredBytes: number;
  updatedAt: Date;
};
