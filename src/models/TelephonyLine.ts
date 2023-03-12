/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyLineOffer } from './TelephonyLineOffer';
import { TelephonyLineNotificationsOptions } from './TelephonyLineNotificationsOptions';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';

export type TelephonyLine = {
  canChangePassword?: boolean;
  description?: string;
  deviceSlot?: number;
  getPublicOffer?: TelephonyLineOffer;
  infrastructure?: string;
  isAttachedToOtherLinesPhone?: boolean;
  notifications?: TelephonyLineNotificationsOptions | null;
  offers?: string[];
  serviceName?: string;
  serviceType?: TelephonyTypeServiceEnum;
  simultaneousLines?: number;
};
