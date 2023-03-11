/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentAvailableSubTypeEnum } from './MePaymentAvailableSubTypeEnum';
import { MePaymentIcon } from './MePaymentIcon';
import { MePaymentIntegrationEnum } from './MePaymentIntegrationEnum';

export type MePaymentAvailablePaymentMethod = {
  formSessionId: string | null;
  icon: MePaymentIcon;
  integration: MePaymentIntegrationEnum;
  merchantId: string | null;
  oneshot: boolean;
  organizationId: string | null;
  paymentSubType: MePaymentAvailableSubTypeEnum | null;
  paymentType: string;
  registerable: boolean;
  registerableWithTransaction: boolean;
};
