/* WARNING: This file is auto-generated . Do not edit manually. */

import { DomainOperationStatusEnum } from './DomainOperationStatusEnum';
import { DomainOperationActionEnum } from './DomainOperationActionEnum';
import { DomainOperationStep } from './DomainOperationStep';

export type NichandleDomainTaskProgressBar = {
  currentStep: DomainOperationStep;
  expectedDoneDate: Date | null;
  followUpSteps: DomainOperationStep[] | null;
  lastUpdateDate: Date | null;
  progress: number;
  taskActions: DomainOperationActionEnum[];
  taskStatus: DomainOperationStatusEnum;
};
