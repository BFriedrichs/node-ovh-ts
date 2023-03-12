/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentMethodCallbackUrl } from './MePaymentMethodCallbackUrl';
import { MePaymentCreationSubTypeEnum } from './MePaymentCreationSubTypeEnum';

export type MePaymentMethodCreation = {
  billingContactId: number | null;
  callbackUrl?: MePaymentMethodCallbackUrl;
  default: boolean;
  description: string | null;
  formData: string | null;
  orderId: number | null;
  paymentSubType: MePaymentCreationSubTypeEnum | null;
  paymentType?: string;
  register: boolean;
};
