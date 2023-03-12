/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiResources } from './CloudProjectAiResources';
import { CloudProjectAiAppProbe } from './CloudProjectAiAppProbe';
import { CloudProjectAiAppScalingStrategy } from './CloudProjectAiAppScalingStrategy';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';

export type CloudProjectAiAppAppSpec = {
  command?: string[] | null;
  defaultHttpPort?: number | null;
  env?: CloudProjectAiJobJobEnv[] | null;
  envVars?: CloudProjectAiJobJobEnv[] | null;
  image?: string;
  labels?: Record<string, string> | null;
  name?: string;
  partnerId?: string | null;
  probe?: CloudProjectAiAppProbe | null;
  region?: string;
  resources?: CloudProjectAiResources;
  scalingStrategy?: CloudProjectAiAppScalingStrategy | null;
  unsecureHttp?: boolean | null;
  volumes?: CloudProjectAiVolumeVolume[] | null;
};
