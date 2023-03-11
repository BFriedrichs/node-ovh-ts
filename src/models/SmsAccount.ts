/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsStatusAccountEnum } from './SmsStatusAccountEnum';
import { SmsResponse } from './SmsResponse';
import { SmsChannelEnum } from './SmsChannelEnum';
import { SmsPackQuantityAutomaticRecreditEnum } from './SmsPackQuantityAutomaticRecreditEnum';
import { SmsTemplates } from './SmsTemplates';

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
