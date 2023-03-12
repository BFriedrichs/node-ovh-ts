/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConsumptionConsumptionExportTaskStatusEnum } from './ConsumptionConsumptionExportTaskStatusEnum';
import { ConsumptionConsumptionExportFormatsEnum } from './ConsumptionConsumptionExportFormatsEnum';

export type BillingOrderConsumptionDetails = {
  fileFormat: ConsumptionConsumptionExportFormatsEnum | null;
  fileURL: string | null;
  message: string | null;
  taskId: number;
  taskStatus: ConsumptionConsumptionExportTaskStatusEnum;
};
