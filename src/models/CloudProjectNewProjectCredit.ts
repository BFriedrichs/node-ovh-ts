/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudCommonVoucherValidity } from './CloudCommonVoucherValidity';
import { OrderPrice } from './OrderPrice';

export type CloudProjectNewProjectCredit = {
  description: string | null;
  id: number;
  products: string | null;
  total_credit: OrderPrice;
  validity: CloudCommonVoucherValidity | null;
};
