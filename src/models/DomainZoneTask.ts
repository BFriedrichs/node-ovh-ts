/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainOperationStatusEnum } from './DomainOperationStatusEnum';

export type DomainZoneTask = {
  canAccelerate: boolean;
  canCancel: boolean;
  canRelaunch: boolean;
  comment: string | null;
  creationDate: Date;
  doneDate: Date | null;
  function: string;
  id: number;
  lastUpdate: Date;
  status: DomainOperationStatusEnum;
  todoDate: Date;
};
