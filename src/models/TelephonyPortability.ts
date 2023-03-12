/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyPortabilityCustomerInfos } from './TelephonyPortabilityCustomerInfos';
import { TelephonyPortabilityCountryEnum } from './TelephonyPortabilityCountryEnum';

export type TelephonyPortability = {
  billingAccount: string;
  creationDate: Date;
  customerInfos: TelephonyPortabilityCustomerInfos;
  desiredExecutionDate: Date | null;
  error: boolean;
  errorCodes: string[];
  id: number;
  lineToRedirectTo: string | null;
  numbersList: string[];
  operator: string;
  orderId: number;
  portabilityCountry: TelephonyPortabilityCountryEnum;
  rio: string | null;
};
