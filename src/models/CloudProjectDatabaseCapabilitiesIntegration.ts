/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseCapabilitiesIntegrationParameter } from './CloudProjectDatabaseCapabilitiesIntegrationParameter';
import { CloudProjectDatabaseServiceIntegrationTypeEnum } from './CloudProjectDatabaseServiceIntegrationTypeEnum';
import { CloudProjectDatabaseEngineEnum } from './CloudProjectDatabaseEngineEnum';

export type CloudProjectDatabaseCapabilitiesIntegration = {
  destinationEngine: CloudProjectDatabaseEngineEnum;
  parameters: CloudProjectDatabaseCapabilitiesIntegrationParameter[] | null;
  sourceEngine: CloudProjectDatabaseEngineEnum;
  type: CloudProjectDatabaseServiceIntegrationTypeEnum;
};
