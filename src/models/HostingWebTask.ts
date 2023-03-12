/* WARNING: This file is auto-generated . Do not edit manually. */

import { HostingWebTaskObjectTypeEnum } from './HostingWebTaskObjectTypeEnum';
import { HostingWebTaskStatusEnum } from './HostingWebTaskStatusEnum';

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
