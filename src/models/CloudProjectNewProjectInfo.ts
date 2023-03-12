/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectNewProjectInfoVoucher } from './CloudProjectNewProjectInfoVoucher';
import { OrderPrice } from './OrderPrice';
import { CloudProjectNewProjectInfoError } from './CloudProjectNewProjectInfoError';

export type CloudProjectNewProjectInfo = {
  agreements: number[] | null;
  error: CloudProjectNewProjectInfoError | null;
  order: OrderPrice | null;
  voucher: CloudProjectNewProjectInfoVoucher | null;
};
