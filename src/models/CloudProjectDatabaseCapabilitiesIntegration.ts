/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceIntegrationTypeEnum } from './CloudProjectDatabaseServiceIntegrationTypeEnum';
import { CloudProjectDatabaseEngineEnum } from './CloudProjectDatabaseEngineEnum';
import { CloudProjectDatabaseCapabilitiesIntegrationParameter } from './CloudProjectDatabaseCapabilitiesIntegrationParameter';

export type CloudProjectDatabaseCapabilitiesIntegration = {
  destinationEngine: CloudProjectDatabaseEngineEnum;
  parameters: CloudProjectDatabaseCapabilitiesIntegrationParameter | null;
  sourceEngine: CloudProjectDatabaseEngineEnum;
  type: CloudProjectDatabaseServiceIntegrationTypeEnum;
};
