/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentMeanCreditCardStateEnum } from './MePaymentMeanCreditCardStateEnum';
import { MePaymentMeanIconData } from './MePaymentMeanIconData';

export type MePaymentMeanCreditCard = {
  defaultPaymentMean?: boolean;
  description?: string | null;
  expirationDate?: Date;
  icon?: MePaymentMeanIconData | null;
  id?: number;
  number?: string;
  state?: MePaymentMeanCreditCardStateEnum;
  threeDsValidated?: boolean;
  type?: string;
};
