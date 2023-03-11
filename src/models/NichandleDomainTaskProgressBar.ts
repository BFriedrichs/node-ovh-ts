/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainOperationStep } from './DomainOperationStep';
import { DomainOperationStatusEnum } from './DomainOperationStatusEnum';
import { DomainOperationActionEnum } from './DomainOperationActionEnum';

export type NichandleDomainTaskProgressBar = {
  currentStep: DomainOperationStep;
  expectedDoneDate: Date | null;
  followUpSteps: DomainOperationStep | null;
  lastUpdateDate: Date | null;
  progress: number;
  taskActions: DomainOperationActionEnum;
  taskStatus: DomainOperationStatusEnum;
};
