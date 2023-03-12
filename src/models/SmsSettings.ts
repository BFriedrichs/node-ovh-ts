/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsSettingsStatusEnum } from './SmsSettingsStatusEnum';
import { SmsSettingsEndpoints } from './SmsSettingsEndpoints';

export type SmsSettings = {
  endpoints: SmsSettingsEndpoints[];
  status: SmsSettingsStatusEnum;
  throughput: number;
  windowing: number;
};
