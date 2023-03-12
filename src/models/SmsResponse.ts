/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsResponseTrackingOptions } from './SmsResponseTrackingOptions';
import { SmsResponseTypeEnum } from './SmsResponseTypeEnum';

export type SmsResponse = {
  cgiUrl?: string | null;
  responseType?: SmsResponseTypeEnum;
  text?: string | null;
  trackingDefaultSmsSender?: string | null;
  trackingOptions?: SmsResponseTrackingOptions[] | null;
};
