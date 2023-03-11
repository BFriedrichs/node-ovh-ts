/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebTaskStatusEnum } from './HostingWebTaskStatusEnum';
import { HostingWebTaskObjectTypeEnum } from './HostingWebTaskObjectTypeEnum';

export type HostingWebTask = {
  doneDate: Date | null;
  function: string;
  id: number;
  lastUpdate: Date | null;
  objectId: string | null;
  objectType: HostingWebTaskObjectTypeEnum | null;
  startDate: Date;
  status: HostingWebTaskStatusEnum;
};
