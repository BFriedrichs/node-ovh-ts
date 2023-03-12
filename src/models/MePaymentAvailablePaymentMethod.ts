/* WARNING: This file is auto-generated . Do not edit manually. */

import { MePaymentIntegrationEnum } from './MePaymentIntegrationEnum';
import { MePaymentAvailableSubTypeEnum } from './MePaymentAvailableSubTypeEnum';
import { MePaymentIcon } from './MePaymentIcon';

export type MePaymentAvailablePaymentMethod = {
  formSessionId?: string | null;
  icon?: MePaymentIcon;
  integration?: MePaymentIntegrationEnum;
  merchantId?: string | null;
  oneshot?: boolean;
  organizationId?: string | null;
  paymentSubType?: MePaymentAvailableSubTypeEnum | null;
  paymentType?: string;
  registerable?: boolean;
  registerableWithTransaction?: boolean;
};
