/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedPlannedInterventionStatusEnum } from './DedicatedPlannedInterventionStatusEnum';
import { DedicatedPlannedInterventionTypeEnum } from './DedicatedPlannedInterventionTypeEnum';

export type DedicatedServerPlannedIntervention = {
  expectedEndDate: Date;
  id: number;
  status: DedicatedPlannedInterventionStatusEnum;
  type: DedicatedPlannedInterventionTypeEnum;
  wantedStartDate: Date;
};
