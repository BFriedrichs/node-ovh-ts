/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyOvhPabxIvrMenuKeyEnum } from './TelephonyOvhPabxIvrMenuKeyEnum';
import { TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum } from './TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum';
import { TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum } from './TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum';
import { TelephonyOvhPabxHuntingQueueStrategyEnum } from './TelephonyOvhPabxHuntingQueueStrategyEnum';
import { TelephonyOvhPabxQueueActionEnum } from './TelephonyOvhPabxQueueActionEnum';

export type TelephonyOvhPabxHuntingQueue = {
  actionOnClosure: TelephonyOvhPabxQueueActionEnum | null;
  actionOnClosureParam: string | null;
  actionOnOverflow: TelephonyOvhPabxQueueActionEnum | null;
  actionOnOverflowParam: string | null;
  askForRecordDisabling: boolean | null;
  confirmKey: TelephonyOvhPabxIvrMenuKeyEnum | null;
  description: string | null;
  followCallForwards: boolean | null;
  maxMember: number;
  maxWaitTime: number;
  queueId: number;
  record: boolean | null;
  recordDisablingDigit: TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum | null;
  recordDisablingLanguage: TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum | null;
  soundOnHold: number | null;
  strategy: TelephonyOvhPabxHuntingQueueStrategyEnum;
};
