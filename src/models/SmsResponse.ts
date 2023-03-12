/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsResponseTypeEnum } from './SmsResponseTypeEnum';
import { SmsResponseTrackingOptions } from './SmsResponseTrackingOptions';

export type SmsResponse = {
  cgiUrl: string | null;
  responseType: SmsResponseTypeEnum;
  text: string | null;
  trackingDefaultSmsSender: string | null;
  trackingOptions: SmsResponseTrackingOptions[] | null;
};
