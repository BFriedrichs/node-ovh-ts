/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyRealtimeEventType } from './TelephonyRealtimeEventType';
import { TelephonyRealtimeEventProtocol } from './TelephonyRealtimeEventProtocol';
import { TelephonyRealtimeEventDirection } from './TelephonyRealtimeEventDirection';

export type TelephonyEvent = {
  calledIdentifier?: string;
  callingIdentifier?: string;
  dateTime?: Date;
  direction?: TelephonyRealtimeEventDirection;
  duration?: number;
  eventType?: TelephonyRealtimeEventType;
  id?: string;
  protocol?: TelephonyRealtimeEventProtocol;
};
