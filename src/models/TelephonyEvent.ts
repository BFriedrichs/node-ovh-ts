/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyRealtimeEventDirection } from './TelephonyRealtimeEventDirection';
import { TelephonyRealtimeEventProtocol } from './TelephonyRealtimeEventProtocol';
import { TelephonyRealtimeEventType } from './TelephonyRealtimeEventType';

export type TelephonyEvent = {
  calledIdentifier: string;
  callingIdentifier: string;
  dateTime: Date;
  direction: TelephonyRealtimeEventDirection;
  duration: number;
  eventType: TelephonyRealtimeEventType;
  id: string;
  protocol: TelephonyRealtimeEventProtocol;
};
