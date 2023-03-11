/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';
import { CloudProjectAiNotebookNotebookEnv } from './CloudProjectAiNotebookNotebookEnv';
import { CloudProjectAiShutdownStrategyEnum } from './CloudProjectAiShutdownStrategyEnum';

export type CloudProjectAiNotebookNotebookSpecInput = {
  env?: CloudProjectAiNotebookNotebookEnv;
  envVars: CloudProjectAiJobJobEnv | null;
  labels: Record<string, string> | null;
  name: string;
  region?: string;
  resources?: CloudProjectAiResourcesInput;
  shutdown: CloudProjectAiShutdownStrategyEnum | null;
  sshPublicKeys: string | null;
  unsecureHttp: boolean | null;
  volumes: CloudProjectAiVolumeVolume | null;
};
