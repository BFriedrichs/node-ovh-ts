/* WARNING: This file is auto-generated . Do not edit manually. */

import { PaymentMethodAvailablePaymentMethod } from './PaymentMethodAvailablePaymentMethod';
import { PaymentMethodPaymentMethod } from './PaymentMethodPaymentMethod';

export type BillingOrderPaymentMethods = {
  available?: PaymentMethodAvailablePaymentMethod[];
  paymentMethods?: PaymentMethodPaymentMethod[];
  registered?: number[];
};
