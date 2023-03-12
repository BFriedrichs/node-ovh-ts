/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiAppScalingStrategyInput } from './CloudProjectAiAppScalingStrategyInput';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';
import { CloudProjectAiAppProbeInput } from './CloudProjectAiAppProbeInput';
import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';

export type CloudProjectAiAppAppSpecInput = {
  command: string[] | null;
  defaultHttpPort: number | null;
  env: CloudProjectAiJobJobEnv[] | null;
  envVars: CloudProjectAiJobJobEnv[] | null;
  image?: string;
  labels: Record<string, string> | null;
  name: string;
  partnerId: string | null;
  probe: CloudProjectAiAppProbeInput | null;
  region?: string;
  resources?: CloudProjectAiResourcesInput;
  scalingStrategy: CloudProjectAiAppScalingStrategyInput | null;
  unsecureHttp: boolean | null;
  volumes: CloudProjectAiVolumeVolume[] | null;
};
