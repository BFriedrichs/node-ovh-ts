/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiShutdownStrategyEnum } from './CloudProjectAiShutdownStrategyEnum';
import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';
import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';

export type CloudProjectAiJobJobSpecInput = {
  command?: string[] | null;
  defaultHttpPort?: number | null;
  env?: CloudProjectAiJobJobEnv[] | null;
  envVars?: CloudProjectAiJobJobEnv[] | null;
  image: string;
  labels?: Record<string, string> | null;
  name?: string;
  partnerId?: string | null;
  readUser?: string | null;
  region: string;
  resources: CloudProjectAiResourcesInput;
  shutdown?: CloudProjectAiShutdownStrategyEnum | null;
  sshPublicKeys?: string[] | null;
  timeout?: number | null;
  unsecureHttp?: boolean | null;
  volumes?: CloudProjectAiVolumeVolume[] | null;
};
