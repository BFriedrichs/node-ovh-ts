/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyOvhPabxHuntingLiveCallsStateEnum } from './TelephonyOvhPabxHuntingLiveCallsStateEnum';

export type TelephonyOvhPabxHuntingQueueLiveCalls = {
  agent: string;
  answered: Date | null;
  begin: Date;
  callerIdName: string;
  callerIdNumber: string;
  destinationNumber: string;
  end: Date | null;
  id: number;
  onHold: boolean | null;
  queue: string;
  state: TelephonyOvhPabxHuntingLiveCallsStateEnum;
};
