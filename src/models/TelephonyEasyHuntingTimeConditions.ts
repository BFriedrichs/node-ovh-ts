/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum } from './TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum';
import { TelephonyTimeConditionsPolicyEnum } from './TelephonyTimeConditionsPolicyEnum';

export type TelephonyEasyHuntingTimeConditions = {
  conditionId?: number;
  policy?: TelephonyTimeConditionsPolicyEnum;
  timeFrom?: Date;
  timeTo?: Date;
  weekDay?: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum;
};
