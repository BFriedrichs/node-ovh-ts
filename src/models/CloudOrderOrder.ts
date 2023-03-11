/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudOrderStatusEnum } from './CloudOrderStatusEnum';

export type CloudOrderOrder = {
  date: Date;
  orderId: number;
  planCode: string;
  serviceName: string | null;
  status: CloudOrderStatusEnum;
};
