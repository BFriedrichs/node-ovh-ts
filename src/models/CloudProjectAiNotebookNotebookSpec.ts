/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiResources } from './CloudProjectAiResources';
import { CloudProjectAiShutdownStrategyEnum } from './CloudProjectAiShutdownStrategyEnum';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiNotebookNotebookEnv } from './CloudProjectAiNotebookNotebookEnv';
import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';

export type CloudProjectAiNotebookNotebookSpec = {
  env?: CloudProjectAiNotebookNotebookEnv;
  envVars?: CloudProjectAiJobJobEnv[];
  flavor?: string | null;
  labels?: Record<string, string> | null;
  name?: string;
  region?: string;
  resources?: CloudProjectAiResources;
  shutdown?: CloudProjectAiShutdownStrategyEnum | null;
  sshPublicKeys?: string[] | null;
  unsecureHttp?: boolean | null;
  volumes?: CloudProjectAiVolumeVolume[] | null;
};
