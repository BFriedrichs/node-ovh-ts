/* WARNING: This file is auto-generated . Do not edit manually. */

import { CloudAlertingDelayEnum } from './CloudAlertingDelayEnum';
import { OrderPrice } from './OrderPrice';

export type CloudAlerting = {
  creationDate: Date;
  delay: CloudAlertingDelayEnum;
  email: string;
  formattedMonthlyThreshold: OrderPrice;
  id: string;
  monthlyThreshold: number;
};
