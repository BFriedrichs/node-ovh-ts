/* WARNING: This file is auto-generated . Do not edit manually. */

import { PaymentMethodStatusEnum } from './PaymentMethodStatusEnum';
import { PaymentMethodSubTypeEnum } from './PaymentMethodSubTypeEnum';
import { PaymentMethodIcon } from './PaymentMethodIcon';
import { PaymentMethodIntegrationType } from './PaymentMethodIntegrationType';

export type PaymentMethodPaymentMethod = {
  billingContactId: number | null;
  creationDate: Date;
  default: boolean;
  description: string | null;
  expirationDate: Date | null;
  formSessionId: string | null;
  icon: PaymentMethodIcon;
  integration: PaymentMethodIntegrationType | null;
  label: string | null;
  lastUpdate: Date | null;
  merchantId: string | null;
  oneclick: boolean | null;
  paymentMeanId: number | null;
  paymentMethodId: number;
  paymentSubType: PaymentMethodSubTypeEnum | null;
  paymentType: string;
  status: PaymentMethodStatusEnum;
};
