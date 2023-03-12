/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectDataIntegrationParameter } from './CloudProjectDataIntegrationParameter';
import { CloudProjectDataIntegrationConnectionStatusEnum } from './CloudProjectDataIntegrationConnectionStatusEnum';

export type CloudProjectDataIntegrationDestination = {
  connectorId?: string;
  creationDate: Date | null;
  id: string;
  lastUpdateDate: Date | null;
  name?: string;
  parameters?: CloudProjectDataIntegrationParameter[];
  status: CloudProjectDataIntegrationConnectionStatusEnum;
};
