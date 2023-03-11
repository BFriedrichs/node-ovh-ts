/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiResources } from './CloudProjectAiResources';
import { CloudProjectAiNotebookNotebookEnv } from './CloudProjectAiNotebookNotebookEnv';
import { CloudProjectAiShutdownStrategyEnum } from './CloudProjectAiShutdownStrategyEnum';

export type CloudProjectAiNotebookNotebookSpec = {
  env: CloudProjectAiNotebookNotebookEnv;
  envVars: CloudProjectAiJobJobEnv;
  flavor: string | null;
  labels: Record<string, string> | null;
  name: string;
  region: string;
  resources: CloudProjectAiResources;
  shutdown: CloudProjectAiShutdownStrategyEnum | null;
  sshPublicKeys: string | null;
  unsecureHttp: boolean | null;
  volumes: CloudProjectAiVolumeVolume | null;
};
