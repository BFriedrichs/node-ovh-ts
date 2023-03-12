/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsSettingsEndpoints } from './SmsSettingsEndpoints';
import { SmsSettingsStatusEnum } from './SmsSettingsStatusEnum';

export type SmsSettings = {
  endpoints?: SmsSettingsEndpoints[];
  status?: SmsSettingsStatusEnum;
  throughput?: number;
  windowing?: number;
};
