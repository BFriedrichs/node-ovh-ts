/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiJobJobStateEnum } from './CloudProjectAiJobJobStateEnum';
import { CloudProjectAiInfo } from './CloudProjectAiInfo';
import { CloudProjectAiVolumeDataSync } from './CloudProjectAiVolumeDataSync';
import { CloudProjectAiJobJobStatusHistory } from './CloudProjectAiJobJobStatusHistory';

export type CloudProjectAiJobJobStatus = {
  dataSync: CloudProjectAiVolumeDataSync;
  duration: number | null;
  exitCode: number | null;
  externalIp: string | null;
  finalizedAt: Date | null;
  history: CloudProjectAiJobJobStatusHistory;
  info: CloudProjectAiInfo;
  infoUrl: string | null;
  initializingAt: Date | null;
  ip: string | null;
  lastTransitionDate: Date | null;
  monitoringUrl: string | null;
  queuedAt: Date | null;
  sshUrl: string | null;
  startedAt: Date | null;
  state: CloudProjectAiJobJobStateEnum | null;
  stoppedAt: Date | null;
  url: string | null;
};
