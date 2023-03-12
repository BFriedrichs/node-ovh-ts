/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiJobJobStatusHistory } from './CloudProjectAiJobJobStatusHistory';
import { CloudProjectAiJobJobStateEnum } from './CloudProjectAiJobJobStateEnum';
import { CloudProjectAiVolumeDataSync } from './CloudProjectAiVolumeDataSync';
import { CloudProjectAiInfo } from './CloudProjectAiInfo';

export type CloudProjectAiJobJobStatus = {
  dataSync?: CloudProjectAiVolumeDataSync[];
  duration?: number | null;
  exitCode?: number | null;
  externalIp?: string | null;
  finalizedAt?: Date | null;
  history?: CloudProjectAiJobJobStatusHistory[];
  info?: CloudProjectAiInfo;
  infoUrl?: string | null;
  initializingAt?: Date | null;
  ip?: string | null;
  lastTransitionDate?: Date | null;
  monitoringUrl?: string | null;
  queuedAt?: Date | null;
  sshUrl?: string | null;
  startedAt?: Date | null;
  state?: CloudProjectAiJobJobStateEnum | null;
  stoppedAt?: Date | null;
  url?: string | null;
};
