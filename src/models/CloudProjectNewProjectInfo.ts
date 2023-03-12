/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { CloudProjectNewProjectInfoError } from './CloudProjectNewProjectInfoError';
import { CloudProjectNewProjectInfoVoucher } from './CloudProjectNewProjectInfoVoucher';

export type CloudProjectNewProjectInfo = {
  agreements?: number[] | null;
  error?: CloudProjectNewProjectInfoError | null;
  order?: OrderPrice | null;
  voucher?: CloudProjectNewProjectInfoVoucher | null;
};
