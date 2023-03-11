/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentAvailableSubTypeEnum } from './MePaymentAvailableSubTypeEnum';
import { MePaymentIcon } from './MePaymentIcon';
import { MePaymentIntegrationEnum } from './MePaymentIntegrationEnum';
import { MePaymentMethodStatusEnum } from './MePaymentMethodStatusEnum';

export type MePaymentPaymentMethod = {
  billingContactId: number | null;
  creationDate: Date;
  default: boolean;
  description: string | null;
  expirationDate: Date | null;
  formSessionId: string | null;
  icon: MePaymentIcon;
  integration: MePaymentIntegrationEnum | null;
  label: string | null;
  lastUpdate: Date;
  merchantId: string | null;
  oneclick: boolean | null;
  paymentMeanId: number | null;
  paymentMethodId: number;
  paymentSubType: MePaymentAvailableSubTypeEnum | null;
  paymentType: string;
  status: MePaymentMethodStatusEnum;
};
