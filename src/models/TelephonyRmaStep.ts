/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyRmaStepNameEnum } from './TelephonyRmaStepNameEnum';
import { TelephonyRmaStepStatusEnum } from './TelephonyRmaStepStatusEnum';

export type TelephonyRmaStep = {
  description: string;
  doneDate: Date | null;
  infos: string | null;
  name: TelephonyRmaStepNameEnum;
  status: TelephonyRmaStepStatusEnum;
};
