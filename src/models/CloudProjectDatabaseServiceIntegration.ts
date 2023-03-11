/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDatabaseServiceIntegrationStatusEnum } from './CloudProjectDatabaseServiceIntegrationStatusEnum';
import { CloudProjectDatabaseServiceIntegrationTypeEnum } from './CloudProjectDatabaseServiceIntegrationTypeEnum';

export type CloudProjectDatabaseServiceIntegration = {
  destinationServiceId?: string;
  id: string;
  parameters: Record<string, string> | null;
  sourceServiceId?: string;
  status: CloudProjectDatabaseServiceIntegrationStatusEnum;
  type: CloudProjectDatabaseServiceIntegrationTypeEnum;
};
