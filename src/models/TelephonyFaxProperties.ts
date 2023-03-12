/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyFaxSendingTries } from './TelephonyFaxSendingTries';
import { TelephonyFaxQualityEnum } from './TelephonyFaxQualityEnum';
import { TelephonyFaxMailFormatEnum } from './TelephonyFaxMailFormatEnum';

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
  redirectionEmail: string[];
  rejectAnonymous: boolean;
  sender: string;
};
