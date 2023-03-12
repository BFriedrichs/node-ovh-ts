/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiNotebookNotebookWorkspace } from './CloudProjectAiNotebookNotebookWorkspace';
import { CloudProjectAiVolumeDataSync } from './CloudProjectAiVolumeDataSync';
import { CloudProjectAiNotebookNotebookStateEnum } from './CloudProjectAiNotebookNotebookStateEnum';
import { CloudProjectAiJobJobStatus } from './CloudProjectAiJobJobStatus';
import { CloudProjectAiInfo } from './CloudProjectAiInfo';

export type CloudProjectAiNotebookNotebookStatus = {
  dataSync: CloudProjectAiVolumeDataSync[];
  duration: number | null;
  info: CloudProjectAiInfo;
  infoUrl: string | null;
  lastJobStatus: CloudProjectAiJobJobStatus;
  lastStartedAt: Date | null;
  lastStoppedAt: Date | null;
  monitoringUrl: string | null;
  sshUrl: string | null;
  state: CloudProjectAiNotebookNotebookStateEnum | null;
  url: string | null;
  workspace: CloudProjectAiNotebookNotebookWorkspace | null;
};
