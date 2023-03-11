/* WARNING: This file is auto-generated . Do not edit manually. */

import { XdslOperatorTypeEnum } from './XdslOperatorTypeEnum';

export type XdslIncident = {
  comment: string;
  creationDate: Date;
  departments: string;
  endDate: Date | null;
  id: number;
  nra: string;
  operators: XdslOperatorTypeEnum;
  taskId: number | null;
  taskReference: string | null;
};
