/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsTemplates } from './SmsTemplates';
import { SmsChannelEnum } from './SmsChannelEnum';
import { SmsResponse } from './SmsResponse';
import { SmsStatusAccountEnum } from './SmsStatusAccountEnum';
import { SmsPackQuantityAutomaticRecreditEnum } from './SmsPackQuantityAutomaticRecreditEnum';

export type SmsAccount = {
  automaticRecreditAmount: SmsPackQuantityAutomaticRecreditEnum | null;
  callBack: string | null;
  channel: SmsChannelEnum;
  creditThresholdForAutomaticRecredit: number;
  creditsHoldByQuota: number;
  creditsLeft: number;
  description: string;
  name: string;
  smpp: boolean;
  smsResponse: SmsResponse;
  status: SmsStatusAccountEnum;
  stopCallBack: string | null;
  templates: SmsTemplates;
  userQuantityWithQuota: number;
};
