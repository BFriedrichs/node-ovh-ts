/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedPlannedInterventionTypeEnum } from './DedicatedPlannedInterventionTypeEnum';
import { DedicatedPlannedInterventionStatusEnum } from './DedicatedPlannedInterventionStatusEnum';

export type DedicatedServerPlannedIntervention = {
  expectedEndDate?: Date;
  id?: number;
  status?: DedicatedPlannedInterventionStatusEnum;
  type?: DedicatedPlannedInterventionTypeEnum;
  wantedStartDate?: Date;
};
