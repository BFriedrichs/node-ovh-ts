/* WARNING: This file is auto-generated . Do not edit manually. */

import { ConsumptionConsumptionExportFormatsEnum } from './ConsumptionConsumptionExportFormatsEnum';
import { ConsumptionConsumptionExportTaskStatusEnum } from './ConsumptionConsumptionExportTaskStatusEnum';

export type BillingOrderConsumptionDetails = {
  fileFormat: ConsumptionConsumptionExportFormatsEnum | null;
  fileURL: string | null;
  message: string | null;
  taskId: number;
  taskStatus: ConsumptionConsumptionExportTaskStatusEnum;
};
