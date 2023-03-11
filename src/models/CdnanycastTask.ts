/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnanycastTaskStateEnum } from './CdnanycastTaskStateEnum';
import { CdnanycastTaskFunctionEnum } from './CdnanycastTaskFunctionEnum';

export type CdnanycastTask = {
  comment: string | null;
  function: CdnanycastTaskFunctionEnum;
  status: CdnanycastTaskStateEnum;
  taskId: number;
};
