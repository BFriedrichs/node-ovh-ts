/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyConferenceLanguageEnum } from './TelephonyConferenceLanguageEnum';
import { TelephonyConferenceReportStatusEnum } from './TelephonyConferenceReportStatusEnum';

export type TelephonyConferenceRoom = {
  announceFile: boolean;
  announceFilename: string | null;
  announceSoundId: number | null;
  anonymousRejection: boolean;
  enterMuted: boolean;
  eventsChannel: string;
  expirationDate: Date | null;
  language: TelephonyConferenceLanguageEnum;
  pin: string;
  recordStatus: boolean;
  reportEmail: string | null;
  reportStatus: TelephonyConferenceReportStatusEnum;
  roomNumber: number;
  whiteLabelReport: boolean;
};
