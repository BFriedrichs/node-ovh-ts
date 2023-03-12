/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudProjectIoStreamStatusEnum } from './CloudProjectIoStreamStatusEnum';
import { CloudProjectIoStreamKindEnum } from './CloudProjectIoStreamKindEnum';

export type CloudProjectIoStream = {
  backlog: number;
  description: string | null;
  id: string;
  kind: CloudProjectIoStreamKindEnum;
  name: string;
  regions: string[];
  retention: number;
  status: CloudProjectIoStreamStatusEnum;
  throttling: number;
};
