/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyFaxScreenListTypeEnum } from './TelephonyFaxScreenListTypeEnum';

export type TelephonyFaxScreen = {
  blacklistedNumbers: string[] | null;
  blacklistedTSI: string[] | null;
  callNumber: string;
  countryCode: string;
  filteringList: TelephonyFaxScreenListTypeEnum | null;
  serviceName: string;
  whitelistedNumbers: string[] | null;
  whitelistedTSI: string[] | null;
};
