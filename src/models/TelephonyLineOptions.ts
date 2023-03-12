/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyLineOptionForwardNatureTypeEnum } from './TelephonyLineOptionForwardNatureTypeEnum';
import { TelephonyLineOptionLanguageEnum } from './TelephonyLineOptionLanguageEnum';
import { TelephonyLineOptionIntercomEnum } from './TelephonyLineOptionIntercomEnum';

export type TelephonyLineOptions = {
  absentSubscriber: boolean;
  anonymousCallRejection: boolean;
  callRestrictionIncoming: boolean;
  callRestrictionOutgoing: boolean;
  callWaiting: boolean;
  codecs: string;
  defaultVoicemail: string;
  displayNumber: string;
  doNotDisturb: boolean;
  domain: string;
  forwardBackup: boolean;
  forwardBackupNature: TelephonyLineOptionForwardNatureTypeEnum;
  forwardBackupNumber: string;
  forwardBusy: boolean;
  forwardBusyNature: TelephonyLineOptionForwardNatureTypeEnum;
  forwardBusyNumber: string;
  forwardNoReply: boolean;
  forwardNoReplyDelay: number;
  forwardNoReplyNature: TelephonyLineOptionForwardNatureTypeEnum;
  forwardNoReplyNumber: string;
  forwardUnconditional: boolean;
  forwardUnconditionalNature: TelephonyLineOptionForwardNatureTypeEnum;
  forwardUnconditionalNumber: string;
  identificationRestriction: boolean;
  intercom: TelephonyLineOptionIntercomEnum;
  ipRestrictions: string[];
  language: TelephonyLineOptionLanguageEnum;
  lockOutCall: boolean;
  lockOutCallPassword: string | null;
  recordOutgoingCallsBeta: boolean;
  toneOnCallWaitingSoundId: number | null;
  toneOnHoldSoundId: number | null;
  toneRingbackSoundId: number | null;
  voicemailExternalNumber: string;
  voicemailInternalNumber: string;
};
