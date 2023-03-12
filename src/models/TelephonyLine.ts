/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyLineNotificationsOptions } from './TelephonyLineNotificationsOptions';
import { TelephonyLineOffer } from './TelephonyLineOffer';
import { TelephonyTypeServiceEnum } from './TelephonyTypeServiceEnum';

export type TelephonyLine = {
  canChangePassword: boolean;
  description: string;
  deviceSlot: number;
  getPublicOffer: TelephonyLineOffer;
  infrastructure: string;
  isAttachedToOtherLinesPhone: boolean;
  notifications: TelephonyLineNotificationsOptions | null;
  offers: string[];
  serviceName: string;
  serviceType: TelephonyTypeServiceEnum;
  simultaneousLines: number;
};
