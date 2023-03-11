/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTimeConditionsPolicyEnum } from './TelephonyTimeConditionsPolicyEnum';
import { TelephonyTimeConditionsDayEnum } from './TelephonyTimeConditionsDayEnum';

export type TelephonyTimeCondition = {
  day: TelephonyTimeConditionsDayEnum;
  hourBegin: string;
  hourEnd: string;
  id: number;
  policy: TelephonyTimeConditionsPolicyEnum;
  status: string;
};
