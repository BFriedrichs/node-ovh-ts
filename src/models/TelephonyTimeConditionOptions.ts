/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTimeConditionsTimeoutEnum } from './TelephonyTimeConditionsTimeoutEnum';
import { TelephonyTimeConditionsSlotTypeEnum } from './TelephonyTimeConditionsSlotTypeEnum';
import { TelephonyTimeConditionsGlobalStatusEnum } from './TelephonyTimeConditionsGlobalStatusEnum';

export type TelephonyTimeConditionOptions = {
  slot1Number: string;
  slot1Type: TelephonyTimeConditionsSlotTypeEnum;
  slot2Number: string;
  slot2Type: TelephonyTimeConditionsSlotTypeEnum;
  slot3Number: string;
  slot3Type: TelephonyTimeConditionsSlotTypeEnum;
  status: TelephonyTimeConditionsGlobalStatusEnum;
  timeout: TelephonyTimeConditionsTimeoutEnum | null;
  unavailableNumber: string;
  unavailableType: TelephonyTimeConditionsSlotTypeEnum;
};
