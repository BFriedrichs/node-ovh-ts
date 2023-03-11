/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyOfferTaskActionEnum } from './TelephonyOfferTaskActionEnum';
import { TelephonyTaskStatusEnum } from './TelephonyTaskStatusEnum';
import { TelephonyOfferTaskTypeEnum } from './TelephonyOfferTaskTypeEnum';

export type TelephonyOfferTask = {
  action: TelephonyOfferTaskActionEnum;
  executionDate: Date;
  status: TelephonyTaskStatusEnum;
  taskId: number;
  type: TelephonyOfferTaskTypeEnum;
};
