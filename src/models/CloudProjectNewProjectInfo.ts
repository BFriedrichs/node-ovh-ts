/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectNewProjectInfoError } from './CloudProjectNewProjectInfoError';
import { CloudProjectNewProjectInfoVoucher } from './CloudProjectNewProjectInfoVoucher';
import { OrderPrice } from './OrderPrice';

export type CloudProjectNewProjectInfo = {
  agreements: number | null;
  error: CloudProjectNewProjectInfoError | null;
  order: OrderPrice | null;
  voucher: CloudProjectNewProjectInfoVoucher | null;
};
