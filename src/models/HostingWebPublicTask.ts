/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebTaskFunctionEnum } from './HostingWebTaskFunctionEnum';
import { HostingWebTaskObjectTypeEnum } from './HostingWebTaskObjectTypeEnum';
import { HostingWebTaskStatusEnum } from './HostingWebTaskStatusEnum';

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
