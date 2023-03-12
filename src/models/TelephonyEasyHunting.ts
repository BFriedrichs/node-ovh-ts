/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTypeEnum } from './TelephonyTypeEnum';
import { TelephonyOvhPabxHuntingQueueStrategyEnum } from './TelephonyOvhPabxHuntingQueueStrategyEnum';
import { TelephonyOvhPabxDialplanNumberPresentationEnum } from './TelephonyOvhPabxDialplanNumberPresentationEnum';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';

export type TelephonyEasyHunting = {
  anonymousRejection: boolean;
  description: string;
  featureType: TelephonyTypeEnum;
  isCCS: boolean;
  maxWaitTime: number;
  queueSize: number;
  serviceName: string;
  serviceType: TelephonyTypeServiceEnum;
  showCallerNumber: TelephonyOvhPabxDialplanNumberPresentationEnum;
  statusIvrEnabled: boolean;
  strategy: TelephonyOvhPabxHuntingQueueStrategyEnum;
  toneOnClosing: number | null;
  toneOnHold: number | null;
  toneOnOpening: number | null;
  voicemail: string | null;
};
