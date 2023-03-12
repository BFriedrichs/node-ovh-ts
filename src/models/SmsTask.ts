/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTaskStatusEnum } from './TelephonyTaskStatusEnum';
import { SmsTodoGeneralPublicStepsEnum } from './SmsTodoGeneralPublicStepsEnum';
import { SmsTodoGeneralPublicFunctionsEnum } from './SmsTodoGeneralPublicFunctionsEnum';

export type SmsTask = {
  function: SmsTodoGeneralPublicFunctionsEnum;
  status: TelephonyTaskStatusEnum;
  step: SmsTodoGeneralPublicStepsEnum;
  taskId: number;
};
