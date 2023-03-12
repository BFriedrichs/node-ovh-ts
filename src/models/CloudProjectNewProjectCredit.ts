/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { CloudCommonVoucherValidity } from './CloudCommonVoucherValidity';

export type CloudProjectNewProjectCredit = {
  description?: string | null;
  id?: number;
  products?: string[] | null;
  total_credit?: OrderPrice;
  validity?: CloudCommonVoucherValidity | null;
};
