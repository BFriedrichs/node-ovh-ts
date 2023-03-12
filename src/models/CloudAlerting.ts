/* WARNING: This file is auto-generated . Do not edit manually. */

import { OrderPrice } from './OrderPrice';
import { CloudAlertingDelayEnum } from './CloudAlertingDelayEnum';

export type CloudAlerting = {
  creationDate?: Date;
  delay?: CloudAlertingDelayEnum;
  email?: string;
  formattedMonthlyThreshold?: OrderPrice;
  id?: string;
  monthlyThreshold?: number;
};
