/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudCommonVoucherValidity } from './CloudCommonVoucherValidity';
import { OrderPrice } from './OrderPrice';

export type CloudCredit = {
  available_credit: OrderPrice;
  bill: string | null;
  description: string | null;
  id: number;
  products: string | null;
  total_credit: OrderPrice;
  used_credit: OrderPrice;
  validity: CloudCommonVoucherValidity | null;
  voucher: string | null;
};
