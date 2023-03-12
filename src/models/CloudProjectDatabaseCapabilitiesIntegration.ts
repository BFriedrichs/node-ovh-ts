/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseEngineEnum } from './CloudProjectDatabaseEngineEnum';
import { CloudProjectDatabaseServiceIntegrationTypeEnum } from './CloudProjectDatabaseServiceIntegrationTypeEnum';
import { CloudProjectDatabaseCapabilitiesIntegrationParameter } from './CloudProjectDatabaseCapabilitiesIntegrationParameter';

export type CloudProjectDatabaseCapabilitiesIntegration = {
  destinationEngine?: CloudProjectDatabaseEngineEnum;
  parameters?: CloudProjectDatabaseCapabilitiesIntegrationParameter[] | null;
  sourceEngine?: CloudProjectDatabaseEngineEnum;
  type?: CloudProjectDatabaseServiceIntegrationTypeEnum;
};
