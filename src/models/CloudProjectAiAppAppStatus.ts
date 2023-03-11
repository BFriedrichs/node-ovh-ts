/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiAppAppStateHistory } from './CloudProjectAiAppAppStateHistory';
import { CloudProjectAiAppAppStateEnum } from './CloudProjectAiAppAppStateEnum';
import { CloudProjectAiInfo } from './CloudProjectAiInfo';
import { CloudProjectAiVolumeDataSync } from './CloudProjectAiVolumeDataSync';

export type CloudProjectAiAppAppStatus = {
  availableReplicas: number;
  dataSync: CloudProjectAiVolumeDataSync;
  history: CloudProjectAiAppAppStateHistory;
  info: CloudProjectAiInfo;
  infoUrl: string | null;
  lastTransitionDate: Date | null;
  monitoringUrl: string | null;
  state: CloudProjectAiAppAppStateEnum | null;
  url: string | null;
};
