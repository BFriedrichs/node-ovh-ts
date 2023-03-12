/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyConferenceReportStatusEnum } from './TelephonyConferenceReportStatusEnum';
import { TelephonyConferenceLanguageEnum } from './TelephonyConferenceLanguageEnum';

export type TelephonyConferenceProperties = {
  announceFile?: boolean;
  announceFilename?: string | null;
  announceSoundId?: number | null;
  anonymousRejection?: boolean;
  enterMuted?: boolean;
  eventsChannel?: string;
  language?: TelephonyConferenceLanguageEnum;
  pin?: string;
  recordStatus?: boolean;
  reportEmail?: string | null;
  reportStatus?: TelephonyConferenceReportStatusEnum;
  roomNumber?: number;
  whiteLabelReport?: boolean;
};
