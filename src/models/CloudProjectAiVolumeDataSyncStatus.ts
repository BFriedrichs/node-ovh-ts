/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeDataSyncStateEnum } from './CloudProjectAiVolumeDataSyncStateEnum';
import { CloudProjectAiInfo } from './CloudProjectAiInfo';
import { CloudProjectAiVolumeProgress } from './CloudProjectAiVolumeProgress';

export type CloudProjectAiVolumeDataSyncStatus = {
  endedAt: Date | null;
  info: CloudProjectAiInfo;
  progress: CloudProjectAiVolumeProgress;
  queuedAt: Date;
  startedAt: Date | null;
  state: CloudProjectAiVolumeDataSyncStateEnum;
};
