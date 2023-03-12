/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectAiCapabilitiesFlavorTypeEnum } from './CloudProjectAiCapabilitiesFlavorTypeEnum';
import { CloudProjectAiCapabilitiesPresetResources } from './CloudProjectAiCapabilitiesPresetResources';

export type CloudProjectAiCapabilitiesPresetCapabilities = {
  exec?: boolean;
  flavorTypes?: CloudProjectAiCapabilitiesFlavorTypeEnum[];
  log?: boolean;
  resources?: CloudProjectAiCapabilitiesPresetResources;
  ssh?: boolean;
  volume?: boolean;
};
