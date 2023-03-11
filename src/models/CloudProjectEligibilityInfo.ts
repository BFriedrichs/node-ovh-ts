/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectPaymentMethodAuthorized } from './CloudProjectPaymentMethodAuthorized';
import { OrderPrice } from './OrderPrice';
import { CloudProjectNewProjectInfoVoucher } from './CloudProjectNewProjectInfoVoucher';
import { CloudProjectEligibilityAction } from './CloudProjectEligibilityAction';

export type CloudProjectEligibilityInfo = {
  actionsRequired: CloudProjectEligibilityAction | null;
  minimumCredit: OrderPrice | null;
  paymentMethodsAuthorized: CloudProjectPaymentMethodAuthorized | null;
  voucher: CloudProjectNewProjectInfoVoucher | null;
};
