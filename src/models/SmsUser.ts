/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsQuota } from './SmsQuota';
import { SmsAlertThreshold } from './SmsAlertThreshold';

export type SmsUser = {
  alertThresholdInformations?: SmsAlertThreshold;
  callBack?: string | null;
  ipRestrictions?: string[];
  login?: string;
  password?: string;
  quotaInformations?: SmsQuota;
  stopCallBack?: string | null;
};
