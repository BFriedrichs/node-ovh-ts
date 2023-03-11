/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyConferenceHistoryEvent } from './TelephonyConferenceHistoryEvent';

export type TelephonyConferenceHistory = {
  countConnections: number;
  countParticipants: number;
  dateBegin: Date;
  dateEnd: Date;
  duration: number;
  events: TelephonyConferenceHistoryEvent;
  id: number;
  recordUrl: string | null;
};
