/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTaskStatusEnum } from './TelephonyTaskStatusEnum';
import { SmsTodoGeneralPublicFunctionsEnum } from './SmsTodoGeneralPublicFunctionsEnum';
import { SmsTodoGeneralPublicStepsEnum } from './SmsTodoGeneralPublicStepsEnum';

export type SmsTask = {
  function?: SmsTodoGeneralPublicFunctionsEnum;
  status?: TelephonyTaskStatusEnum;
  step?: SmsTodoGeneralPublicStepsEnum;
  taskId?: number;
};
