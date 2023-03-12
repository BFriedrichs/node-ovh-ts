/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { CloudProjectEligibilityAction } from './CloudProjectEligibilityAction';
import { CloudProjectPaymentMethodAuthorized } from './CloudProjectPaymentMethodAuthorized';
import { CloudProjectNewProjectInfoVoucher } from './CloudProjectNewProjectInfoVoucher';

export type CloudProjectEligibilityInfo = {
  actionsRequired?: CloudProjectEligibilityAction[] | null;
  minimumCredit?: OrderPrice | null;
  paymentMethodsAuthorized?: CloudProjectPaymentMethodAuthorized[] | null;
  voucher?: CloudProjectNewProjectInfoVoucher | null;
};
