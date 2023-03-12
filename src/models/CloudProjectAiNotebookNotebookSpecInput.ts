/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';
import { CloudProjectAiNotebookNotebookEnv } from './CloudProjectAiNotebookNotebookEnv';
import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';
import { CloudProjectAiShutdownStrategyEnum } from './CloudProjectAiShutdownStrategyEnum';

export type CloudProjectAiNotebookNotebookSpecInput = {
  env?: CloudProjectAiNotebookNotebookEnv;
  envVars: CloudProjectAiJobJobEnv[] | null;
  labels: Record<string, string> | null;
  name: string;
  region?: string;
  resources?: CloudProjectAiResourcesInput;
  shutdown: CloudProjectAiShutdownStrategyEnum | null;
  sshPublicKeys: string[] | null;
  unsecureHttp: boolean | null;
  volumes: CloudProjectAiVolumeVolume[] | null;
};
