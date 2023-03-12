/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDataProcessingCapabilitiesEngineParameter } from './CloudProjectDataProcessingCapabilitiesEngineParameter';
import { CloudProjectDataProcessingCapabilitiesTemplate } from './CloudProjectDataProcessingCapabilitiesTemplate';
import { CloudProjectDataProcessingEngineVersion } from './CloudProjectDataProcessingEngineVersion';

export type CloudProjectDataProcessingCapability = {
  availableVersions?: CloudProjectDataProcessingEngineVersion[];
  name?: string;
  parameters?: CloudProjectDataProcessingCapabilitiesEngineParameter[];
  templates?: CloudProjectDataProcessingCapabilitiesTemplate[];
};
