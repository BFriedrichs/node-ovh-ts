/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsTypeSenderEnum } from './SmsTypeSenderEnum';
import { SmsRefererSenderEnum } from './SmsRefererSenderEnum';
import { SmsStatusSenderEnum } from './SmsStatusSenderEnum';

export type SmsSender = {
  comment: string | null;
  description: string;
  referer: SmsRefererSenderEnum;
  sender: string;
  status: SmsStatusSenderEnum;
  type: SmsTypeSenderEnum | null;
  validationMedia: string | null;
};
