/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTaskStatusEnum } from './TelephonyTaskStatusEnum';
import { TelephonyOfferTaskTypeEnum } from './TelephonyOfferTaskTypeEnum';
import { TelephonyOfferTaskActionEnum } from './TelephonyOfferTaskActionEnum';

export type TelephonyOfferTask = {
  action: TelephonyOfferTaskActionEnum;
  executionDate: Date;
  status: TelephonyTaskStatusEnum;
  taskId: number;
  type: TelephonyOfferTaskTypeEnum;
};
