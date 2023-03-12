/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeProgress } from './CloudProjectAiVolumeProgress';
import { CloudProjectAiInfo } from './CloudProjectAiInfo';
import { CloudProjectAiVolumeDataSyncStateEnum } from './CloudProjectAiVolumeDataSyncStateEnum';

export type CloudProjectAiVolumeDataSyncStatus = {
  endedAt: Date | null;
  info: CloudProjectAiInfo;
  progress: CloudProjectAiVolumeProgress[];
  queuedAt: Date;
  startedAt: Date | null;
  state: CloudProjectAiVolumeDataSyncStateEnum;
};
