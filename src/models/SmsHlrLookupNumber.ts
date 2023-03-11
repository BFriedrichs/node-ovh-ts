/* WARNING: This file is auto-generated . Do not edit manually. */

import { SmsHlrStatuses } from './SmsHlrStatuses';

export type SmsHlrLookupNumber = {
  datetime: Date;
  id: number;
  msisdn: string;
  operatorCode: string;
  ported: boolean;
  reachable: boolean;
  roaming: boolean;
  status: SmsHlrStatuses;
  valid: boolean;
};
