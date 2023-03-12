/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyPortabilityStepStatusEnum } from './TelephonyPortabilityStepStatusEnum';
import { TelephonyPortabilityStepNameEnum } from './TelephonyPortabilityStepNameEnum';
import { TelephonyPortabilityStepInfos } from './TelephonyPortabilityStepInfos';
import { TelephonyPortabilityStepDuration } from './TelephonyPortabilityStepDuration';

export type TelephonyPortabilityStep = {
  description: string | null;
  doneDate: Date | null;
  duration: TelephonyPortabilityStepDuration;
  infos: TelephonyPortabilityStepInfos | null;
  name: TelephonyPortabilityStepNameEnum;
  status: TelephonyPortabilityStepStatusEnum;
};
