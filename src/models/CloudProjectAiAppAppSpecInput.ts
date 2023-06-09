/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiAppScalingStrategyInput } from './CloudProjectAiAppScalingStrategyInput';
import { CloudProjectAiResourcesInput } from './CloudProjectAiResourcesInput';
import { CloudProjectAiJobJobEnv } from './CloudProjectAiJobJobEnv';
import { CloudProjectAiAppProbeInput } from './CloudProjectAiAppProbeInput';
import { CloudProjectAiVolumeVolume } from './CloudProjectAiVolumeVolume';

export type CloudProjectAiAppAppSpecInput = {
  command?: string[] | null;
  defaultHttpPort?: number | null;
  env?: CloudProjectAiJobJobEnv[] | null;
  envVars?: CloudProjectAiJobJobEnv[] | null;
  image: string;
  labels?: Record<string, string> | null;
  name?: string;
  partnerId?: string | null;
  probe?: CloudProjectAiAppProbeInput | null;
  region: string;
  resources: CloudProjectAiResourcesInput;
  scalingStrategy?: CloudProjectAiAppScalingStrategyInput | null;
  unsecureHttp?: boolean | null;
  volumes?: CloudProjectAiVolumeVolume[] | null;
};
