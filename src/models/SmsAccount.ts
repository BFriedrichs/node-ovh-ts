/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsStatusAccountEnum } from './SmsStatusAccountEnum';
import { SmsTemplates } from './SmsTemplates';
import { SmsPackQuantityAutomaticRecreditEnum } from './SmsPackQuantityAutomaticRecreditEnum';
import { SmsChannelEnum } from './SmsChannelEnum';
import { SmsResponse } from './SmsResponse';

export type SmsAccount = {
  automaticRecreditAmount?: SmsPackQuantityAutomaticRecreditEnum | null;
  callBack?: string | null;
  channel?: SmsChannelEnum;
  creditThresholdForAutomaticRecredit?: number;
  creditsHoldByQuota?: number;
  creditsLeft?: number;
  description?: string;
  name?: string;
  smpp?: boolean;
  smsResponse?: SmsResponse;
  status?: SmsStatusAccountEnum;
  stopCallBack?: string | null;
  templates?: SmsTemplates;
  userQuantityWithQuota?: number;
};
