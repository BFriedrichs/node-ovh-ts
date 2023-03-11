/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyEasyMiniPabxHuntingStrategyEnum } from './TelephonyEasyMiniPabxHuntingStrategyEnum';
import { TelephonyEasyMiniPabxHuntingPatternEnum } from './TelephonyEasyMiniPabxHuntingPatternEnum';

export type TelephonyEasyPabxHunting = {
  anonymousCallRejection: boolean;
  name: string;
  noReplyTimer: number;
  numberOfCalls: number;
  pattern: TelephonyEasyMiniPabxHuntingPatternEnum;
  strategy: TelephonyEasyMiniPabxHuntingStrategyEnum;
  toneOnClosure: boolean;
  toneOnClosureSoundId: number | null;
  toneOnHold: boolean;
  toneOnHoldSoundId: number | null;
  toneRingback: boolean;
  toneRingbackSoundId: number | null;
  voicemail: string | null;
};
