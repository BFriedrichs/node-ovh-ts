/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiAppProbe } from './CloudProjectAiAppProbe';
import { CloudProjectAiResources } from './CloudProjectAiResources';
import { CloudProjectAiAppScalingStrategy } from './CloudProjectAiAppScalingStrategy';

export type CloudProjectAiAppAppSpec = {
  command: string | null;
  defaultHttpPort: number | null;
  env: CloudProjectAiJobJobEnv | null;
  envVars: CloudProjectAiJobJobEnv | null;
  image: string;
  labels: Record<string, string> | null;
  name: string;
  partnerId: string | null;
  probe: CloudProjectAiAppProbe | null;
  region: string;
  resources: CloudProjectAiResources;
  scalingStrategy: CloudProjectAiAppScalingStrategy | null;
  unsecureHttp: boolean | null;
  volumes: CloudProjectAiVolumeVolume | null;
};
