/* WARNING: This file is auto-generated . Do not edit manually. */

import { PaymentMethodIcon } from './PaymentMethodIcon';
import { PaymentMethodIntegrationType } from './PaymentMethodIntegrationType';

export type PaymentMethodAvailablePaymentMethod = {
  formSessionId: string | null;
  icon: PaymentMethodIcon;
  integration: PaymentMethodIntegrationType;
  merchantId: string | null;
  oneshot: boolean;
  organizationId: string | null;
  paymentSubType: string | null;
  paymentType: string;
  registerable: boolean;
  registerableWithTransaction: boolean;
};
