/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnOperationParameter } from './CdnOperationParameter';
import { CdnOperationStatusEnum } from './CdnOperationStatusEnum';
import { CdnOperationFunctionEnum } from './CdnOperationFunctionEnum';

export type CdnOperation = {
  comment?: string | null;
  creationDate?: Date;
  function?: CdnOperationFunctionEnum;
  id?: number;
  parameter?: CdnOperationParameter;
  service?: string;
  status?: CdnOperationStatusEnum;
  todoDate?: Date;
  updatedDate?: Date;
};
