/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyPortabilityStepDuration } from './TelephonyPortabilityStepDuration';
import { TelephonyPortabilityStepNameEnum } from './TelephonyPortabilityStepNameEnum';
import { TelephonyPortabilityStepStatusEnum } from './TelephonyPortabilityStepStatusEnum';
import { TelephonyPortabilityStepInfos } from './TelephonyPortabilityStepInfos';

export type TelephonyPortabilityStep = {
  description: string | null;
  doneDate: Date | null;
  duration: TelephonyPortabilityStepDuration;
  infos: TelephonyPortabilityStepInfos | null;
  name: TelephonyPortabilityStepNameEnum;
  status: TelephonyPortabilityStepStatusEnum;
};
