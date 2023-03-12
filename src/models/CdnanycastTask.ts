/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnanycastTaskFunctionEnum } from './CdnanycastTaskFunctionEnum';
import { CdnanycastTaskStateEnum } from './CdnanycastTaskStateEnum';

export type CdnanycastTask = {
  comment?: string | null;
  function?: CdnanycastTaskFunctionEnum;
  status?: CdnanycastTaskStateEnum;
  taskId?: number;
};
