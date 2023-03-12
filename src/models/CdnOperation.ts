/* WARNING: This file is auto-generated . Do not edit manually. */

import { CdnOperationFunctionEnum } from './CdnOperationFunctionEnum';
import { CdnOperationParameter } from './CdnOperationParameter';
import { CdnOperationStatusEnum } from './CdnOperationStatusEnum';

export type CdnOperation = {
  comment: string | null;
  creationDate: Date;
  function: CdnOperationFunctionEnum;
  id: number;
  parameter: CdnOperationParameter;
  service: string;
  status: CdnOperationStatusEnum;
  todoDate: Date;
  updatedDate: Date;
};
