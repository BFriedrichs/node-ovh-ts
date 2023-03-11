/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentMeanPaypalStateEnum } from './MePaymentMeanPaypalStateEnum';
import { MePaymentMeanIconData } from './MePaymentMeanIconData';

export type MePaymentMeanPaypal = {
  agreementId: string;
  creationDate: Date;
  defaultPaymentMean: boolean;
  description: string | null;
  email: string;
  icon: MePaymentMeanIconData | null;
  id: number;
  state: MePaymentMeanPaypalStateEnum;
};
