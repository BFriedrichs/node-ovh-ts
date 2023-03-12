/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyEasyMiniPabxHuntingPatternEnum } from './TelephonyEasyMiniPabxHuntingPatternEnum';
import { TelephonyEasyMiniPabxHuntingStrategyEnum } from './TelephonyEasyMiniPabxHuntingStrategyEnum';

export type TelephonyMiniPabxHunting = {
  anonymousCallRejection: boolean;
  name: string;
  numberOfCalls: number;
  onHoldTimer: number;
  pattern: TelephonyEasyMiniPabxHuntingPatternEnum;
  queueSize: number;
  strategy: TelephonyEasyMiniPabxHuntingStrategyEnum;
  toneOnClosure: boolean;
  toneOnClosureSoundId: number | null;
  toneOnHold: boolean;
  toneOnHoldSoundId: number | null;
  toneRingback: boolean;
  toneRingbackSoundId: number | null;
};
