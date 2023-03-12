/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyOvhPabxHuntingQueueStrategyEnum } from './TelephonyOvhPabxHuntingQueueStrategyEnum';
import { TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum } from './TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum';
import { TelephonyOvhPabxIvrMenuKeyEnum } from './TelephonyOvhPabxIvrMenuKeyEnum';
import { TelephonyOvhPabxQueueActionEnum } from './TelephonyOvhPabxQueueActionEnum';
import { TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum } from './TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum';

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
