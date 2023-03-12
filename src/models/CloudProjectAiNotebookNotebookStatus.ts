/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiNotebookNotebookStateEnum } from './CloudProjectAiNotebookNotebookStateEnum';
import { CloudProjectAiJobJobStatus } from './CloudProjectAiJobJobStatus';
import { CloudProjectAiVolumeDataSync } from './CloudProjectAiVolumeDataSync';
import { CloudProjectAiInfo } from './CloudProjectAiInfo';
import { CloudProjectAiNotebookNotebookWorkspace } from './CloudProjectAiNotebookNotebookWorkspace';

export type CloudProjectAiNotebookNotebookStatus = {
  dataSync?: CloudProjectAiVolumeDataSync[];
  duration?: number | null;
  info?: CloudProjectAiInfo;
  infoUrl?: string | null;
  lastJobStatus?: CloudProjectAiJobJobStatus;
  lastStartedAt?: Date | null;
  lastStoppedAt?: Date | null;
  monitoringUrl?: string | null;
  sshUrl?: string | null;
  state?: CloudProjectAiNotebookNotebookStateEnum | null;
  url?: string | null;
  workspace?: CloudProjectAiNotebookNotebookWorkspace | null;
};
