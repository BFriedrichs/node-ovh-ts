/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTaskStatusEnum } from './TelephonyTaskStatusEnum';
import { TelephonyOfferTaskActionEnum } from './TelephonyOfferTaskActionEnum';
import { TelephonyOfferTaskTypeEnum } from './TelephonyOfferTaskTypeEnum';

export type TelephonyOfferTask = {
  action?: TelephonyOfferTaskActionEnum;
  executionDate?: Date;
  status?: TelephonyTaskStatusEnum;
  taskId?: number;
  type?: TelephonyOfferTaskTypeEnum;
};
