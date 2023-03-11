/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyPortabilityCountryEnum } from './TelephonyPortabilityCountryEnum';
import { TelephonyPortabilityCustomerInfos } from './TelephonyPortabilityCustomerInfos';

export type TelephonyPortability = {
  billingAccount: string;
  creationDate: Date;
  customerInfos: TelephonyPortabilityCustomerInfos;
  desiredExecutionDate: Date | null;
  error: boolean;
  errorCodes: string;
  id: number;
  lineToRedirectTo: string | null;
  numbersList: string;
  operator: string;
  orderId: number;
  portabilityCountry: TelephonyPortabilityCountryEnum;
  rio: string | null;
};
