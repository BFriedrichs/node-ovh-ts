/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectPaymentMethodAuthorized } from './CloudProjectPaymentMethodAuthorized';
import { CloudProjectEligibilityAction } from './CloudProjectEligibilityAction';
import { OrderPrice } from './OrderPrice';
import { CloudProjectNewProjectInfoVoucher } from './CloudProjectNewProjectInfoVoucher';

export type CloudProjectEligibilityInfo = {
  actionsRequired: CloudProjectEligibilityAction[] | null;
  minimumCredit: OrderPrice | null;
  paymentMethodsAuthorized: CloudProjectPaymentMethodAuthorized[] | null;
  voucher: CloudProjectNewProjectInfoVoucher | null;
};
