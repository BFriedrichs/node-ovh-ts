/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyRmaStepStatusEnum } from './TelephonyRmaStepStatusEnum';
import { TelephonyRmaStepNameEnum } from './TelephonyRmaStepNameEnum';

export type TelephonyRmaStep = {
  description?: string;
  doneDate?: Date | null;
  infos?: string | null;
  name?: TelephonyRmaStepNameEnum;
  status?: TelephonyRmaStepStatusEnum;
};
