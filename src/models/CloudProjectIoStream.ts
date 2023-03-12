/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectIoStreamKindEnum } from './CloudProjectIoStreamKindEnum';
import { CloudProjectIoStreamStatusEnum } from './CloudProjectIoStreamStatusEnum';

export type CloudProjectIoStream = {
  backlog?: number;
  description?: string | null;
  id?: string;
  kind?: CloudProjectIoStreamKindEnum;
  name?: string;
  regions?: string[];
  retention?: number;
  status?: CloudProjectIoStreamStatusEnum;
  throttling?: number;
};
