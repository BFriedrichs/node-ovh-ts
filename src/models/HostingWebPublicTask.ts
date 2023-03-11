/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebTaskStatusEnum } from './HostingWebTaskStatusEnum';
import { HostingWebTaskFunctionEnum } from './HostingWebTaskFunctionEnum';
import { HostingWebTaskObjectTypeEnum } from './HostingWebTaskObjectTypeEnum';

export type HostingWebPublicTask = {
  doneDate: Date | null;
  function: HostingWebTaskFunctionEnum;
  id: number;
  lastUpdate: Date | null;
  objectId: string | null;
  objectType: HostingWebTaskObjectTypeEnum | null;
  startDate: Date;
  status: HostingWebTaskStatusEnum;
};
