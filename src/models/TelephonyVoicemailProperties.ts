/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyVoicemailGreetingEnum } from './TelephonyVoicemailGreetingEnum';
import { TelephonyServiceVoicemailAudioFormatEnum } from './TelephonyServiceVoicemailAudioFormatEnum';
import { TelephonyServiceVoicemailNotifications } from './TelephonyServiceVoicemailNotifications';

export type TelephonyVoicemailProperties = {
  annouceMessage?: string;
  audioFormat?: TelephonyServiceVoicemailAudioFormatEnum;
  doNotRecord?: boolean;
  forcePassword?: boolean;
  fromEmail?: string;
  fromName?: string;
  fullGreetingSoundId?: number | null;
  greetingType?: TelephonyVoicemailGreetingEnum;
  isNewVersion?: boolean;
  keepMessage?: boolean;
  redirectionEmails?: TelephonyServiceVoicemailNotifications[];
  shortGreetingSoundId?: number | null;
  temporaryGreetingActivated?: boolean;
  temporaryGreetingSoundId?: number | null;
  unreadMessages?: number;
};
