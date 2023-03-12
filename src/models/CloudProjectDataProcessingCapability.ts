/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDataProcessingCapabilitiesTemplate } from './CloudProjectDataProcessingCapabilitiesTemplate';
import { CloudProjectDataProcessingCapabilitiesEngineParameter } from './CloudProjectDataProcessingCapabilitiesEngineParameter';
import { CloudProjectDataProcessingEngineVersion } from './CloudProjectDataProcessingEngineVersion';

export type CloudProjectDataProcessingCapability = {
  availableVersions: CloudProjectDataProcessingEngineVersion[];
  name: string;
  parameters: CloudProjectDataProcessingCapabilitiesEngineParameter[];
  templates: CloudProjectDataProcessingCapabilitiesTemplate[];
};
