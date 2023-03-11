/* WARNING: This file is auto-generated . Do not edit manually. */

import { DedicatedServerAlertLanguageEnum } from './DedicatedServerAlertLanguageEnum';

export type DedicatedServerSmsAlert = {
  alertId: number;
  enabled: boolean;
  fromHour: number | null;
  language: DedicatedServerAlertLanguageEnum;
  phoneNumberTo: string;
  smsAccount: string;
  toHour: number | null;
};
