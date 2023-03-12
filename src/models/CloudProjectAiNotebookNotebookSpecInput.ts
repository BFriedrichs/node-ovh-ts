/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';
import { CloudProjectAiShutdownStrategyEnum } from './CloudProjectAiShutdownStrategyEnum';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiNotebookNotebookEnv } from './CloudProjectAiNotebookNotebookEnv';
import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';

export type CloudProjectAiNotebookNotebookSpecInput = {
  env: CloudProjectAiNotebookNotebookEnv;
  envVars?: CloudProjectAiJobJobEnv[] | null;
  labels?: Record<string, string> | null;
  name?: string;
  region: string;
  resources: CloudProjectAiResourcesInput;
  shutdown?: CloudProjectAiShutdownStrategyEnum | null;
  sshPublicKeys?: string[] | null;
  unsecureHttp?: boolean | null;
  volumes?: CloudProjectAiVolumeVolume[] | null;
};
