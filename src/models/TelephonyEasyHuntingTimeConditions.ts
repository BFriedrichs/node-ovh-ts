/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTimeConditionsPolicyEnum } from './TelephonyTimeConditionsPolicyEnum';
import { TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum } from './TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum';

export type TelephonyEasyHuntingTimeConditions = {
  conditionId: number;
  policy: TelephonyTimeConditionsPolicyEnum;
  timeFrom: Date;
  timeTo: Date;
  weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum;
};
