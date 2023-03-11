/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonySchedulerCategoryEnum } from './TelephonySchedulerCategoryEnum';
import { TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum } from './TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum';

export type TelephonyOvhPabxDialplanExtension = {
  enabled: boolean;
  extensionId: number;
  position: number;
  schedulerCategory: TelephonySchedulerCategoryEnum | null;
  screenListType: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum | null;
};
