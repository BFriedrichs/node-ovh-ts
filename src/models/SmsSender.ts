/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsTypeSenderEnum } from './SmsTypeSenderEnum';
import { SmsStatusSenderEnum } from './SmsStatusSenderEnum';
import { SmsRefererSenderEnum } from './SmsRefererSenderEnum';

export type SmsSender = {
  comment: string | null;
  description: string;
  referer: SmsRefererSenderEnum;
  sender: string;
  status: SmsStatusSenderEnum;
  type: SmsTypeSenderEnum | null;
  validationMedia: string | null;
};
