/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';
import { TelephonyLineNotificationsOptions } from './TelephonyLineNotificationsOptions';

export type TelephonyFax = {
  description: string;
  notifications: TelephonyLineNotificationsOptions | null;
  offers: string;
  serviceName: string;
  serviceType: TelephonyTypeServiceEnum;
};
