/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsTodoGeneralPublicFunctionsEnum } from './SmsTodoGeneralPublicFunctionsEnum';
import { TelephonyTaskStatusEnum } from './TelephonyTaskStatusEnum';
import { SmsTodoGeneralPublicStepsEnum } from './SmsTodoGeneralPublicStepsEnum';

export type SmsTask = {
  function: SmsTodoGeneralPublicFunctionsEnum;
  status: TelephonyTaskStatusEnum;
  step: SmsTodoGeneralPublicStepsEnum;
  taskId: number;
};
