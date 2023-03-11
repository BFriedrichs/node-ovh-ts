/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyFaxQualityEnum } from './TelephonyFaxQualityEnum';
import { TelephonyFaxMailFormatEnum } from './TelephonyFaxMailFormatEnum';
import { TelephonyFaxSendingTries } from './TelephonyFaxSendingTries';

export type TelephonyFaxProperties = {
  callNumber: string;
  countryCode: string;
  faxMaxCall: TelephonyFaxSendingTries;
  faxQuality: TelephonyFaxQualityEnum;
  faxTagLine: string;
  fromEmail: string;
  fromName: string;
  mailFormat: TelephonyFaxMailFormatEnum;
  receiver: string;
  redirectionEmail: string;
  rejectAnonymous: boolean;
  sender: string;
};
