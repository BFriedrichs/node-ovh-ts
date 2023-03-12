/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTimeConditionsDayEnum } from './TelephonyTimeConditionsDayEnum';
import { TelephonyTimeConditionsPolicyEnum } from './TelephonyTimeConditionsPolicyEnum';

export type TelephonyTimeCondition = {
  day: TelephonyTimeConditionsDayEnum;
  hourBegin: string;
  hourEnd: string;
  id: number;
  policy: TelephonyTimeConditionsPolicyEnum;
  status: string;
};
