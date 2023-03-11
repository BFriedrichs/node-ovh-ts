/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDataProcessingInfo } from './CloudProjectDataProcessingInfo';
import { CloudProjectDataProcessingNotebookNotebookStateEnum } from './CloudProjectDataProcessingNotebookNotebookStateEnum';

export type CloudProjectDataProcessingNotebookNotebookStatus = {
  duration: number | null;
  info: CloudProjectDataProcessingInfo;
  lastStartedAt: Date | null;
  lastStoppedAt: Date | null;
  state: CloudProjectDataProcessingNotebookNotebookStateEnum | null;
  url: string | null;
};
