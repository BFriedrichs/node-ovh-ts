/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainOperationStatusEnum } from './DomainOperationStatusEnum';

export type DomainTask = {
  canAccelerate: boolean;
  canCancel: boolean;
  canRelaunch: boolean;
  comment: string | null;
  creationDate: Date;
  domain: string | null;
  doneDate: Date | null;
  function: string;
  id: number;
  lastUpdate: Date;
  status: DomainOperationStatusEnum;
  todoDate: Date;
};
