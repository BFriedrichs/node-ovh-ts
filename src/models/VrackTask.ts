/* WARNING: This file is auto-generated . Do not edit manually. */

import { VrackTaskStatusEnum } from './VrackTaskStatusEnum';

export type VrackTask = {
  function?: string;
  id?: number;
  lastUpdate?: Date | null;
  orderId?: number | null;
  serviceName?: string | null;
  status?: VrackTaskStatusEnum;
  targetDomain?: string | null;
  todoDate?: Date | null;
};
