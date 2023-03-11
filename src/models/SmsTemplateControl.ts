/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsTypeTemplateEnum } from './SmsTypeTemplateEnum';
import { SmsStatusSenderEnum } from './SmsStatusSenderEnum';

export type SmsTemplateControl = {
  activity: SmsTypeTemplateEnum;
  comment: string;
  datetime: Date;
  description: string;
  message: string;
  name: string;
  status: SmsStatusSenderEnum;
};
