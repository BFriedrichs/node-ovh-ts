/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiCapabilitiesFlavorTypeEnum } from './CloudProjectAiCapabilitiesFlavorTypeEnum';
import { CloudProjectAiCapabilitiesFlavorResourcesPerUnit } from './CloudProjectAiCapabilitiesFlavorResourcesPerUnit';
import { CloudProjectAiCapabilitiesFlavorGpuInformation } from './CloudProjectAiCapabilitiesFlavorGpuInformation';

export type CloudProjectAiCapabilitiesFlavor = {
  default: boolean;
  description: string;
  gpuInformation: CloudProjectAiCapabilitiesFlavorGpuInformation | null;
  id: string;
  max: number;
  resourcesPerUnit: CloudProjectAiCapabilitiesFlavorResourcesPerUnit;
  type: CloudProjectAiCapabilitiesFlavorTypeEnum;
};
