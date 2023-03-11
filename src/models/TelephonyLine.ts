/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';
import { TelephonyLineOffer } from './TelephonyLineOffer';
import { TelephonyLineNotificationsOptions } from './TelephonyLineNotificationsOptions';

export type TelephonyLine = {
  canChangePassword: boolean;
  description: string;
  deviceSlot: number;
  getPublicOffer: TelephonyLineOffer;
  infrastructure: string;
  isAttachedToOtherLinesPhone: boolean;
  notifications: TelephonyLineNotificationsOptions | null;
  offers: string;
  serviceName: string;
  serviceType: TelephonyTypeServiceEnum;
  simultaneousLines: number;
};
