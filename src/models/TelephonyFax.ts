/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyLineNotificationsOptions } from './TelephonyLineNotificationsOptions';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';

export type TelephonyFax = {
  description: string;
  notifications: TelephonyLineNotificationsOptions | null;
  offers: string[];
  serviceName: string;
  serviceType: TelephonyTypeServiceEnum;
};
