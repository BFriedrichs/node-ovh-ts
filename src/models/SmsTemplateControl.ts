/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsStatusSenderEnum } from './SmsStatusSenderEnum';
import { SmsTypeTemplateEnum } from './SmsTypeTemplateEnum';

export type SmsTemplateControl = {
  activity?: SmsTypeTemplateEnum;
  comment?: string;
  datetime?: Date;
  description?: string;
  message?: string;
  name?: string;
  status?: SmsStatusSenderEnum;
};
