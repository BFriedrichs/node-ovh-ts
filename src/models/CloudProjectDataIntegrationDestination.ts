/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDataIntegrationConnectionStatusEnum } from './CloudProjectDataIntegrationConnectionStatusEnum';
import { CloudProjectDataIntegrationParameter } from './CloudProjectDataIntegrationParameter';

export type CloudProjectDataIntegrationDestination = {
  connectorId?: string;
  creationDate: Date | null;
  id: string;
  lastUpdateDate: Date | null;
  name?: string;
  parameters?: CloudProjectDataIntegrationParameter;
  status: CloudProjectDataIntegrationConnectionStatusEnum;
};
