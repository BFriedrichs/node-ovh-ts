/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';
import { CloudProjectAiAppScalingStrategyInput } from './CloudProjectAiAppScalingStrategyInput';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';
import { CloudProjectAiAppProbeInput } from './CloudProjectAiAppProbeInput';

export type CloudProjectAiAppAppSpecInput = {
  command: string | null;
  defaultHttpPort: number | null;
  env: CloudProjectAiJobJobEnv | null;
  envVars: CloudProjectAiJobJobEnv | null;
  image?: string;
  labels: Record<string, string> | null;
  name: string;
  partnerId: string | null;
  probe: CloudProjectAiAppProbeInput | null;
  region?: string;
  resources?: CloudProjectAiResourcesInput;
  scalingStrategy: CloudProjectAiAppScalingStrategyInput | null;
  unsecureHttp: boolean | null;
  volumes: CloudProjectAiVolumeVolume | null;
};
