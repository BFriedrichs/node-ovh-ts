/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyCallDiagnosticCodecEnum } from './TelephonyCallDiagnosticCodecEnum';

export type TelephonyCallDiagnosticCallQuality = {
  callId?: string;
  codec?: TelephonyCallDiagnosticCodecEnum;
  flowId?: number;
  ipDst?: string;
  ipSrc?: string;
  maxDelay?: number;
  maxJitter?: number;
  mos?: number;
  packets?: number;
  portDst?: number;
  portSrc?: number;
  rtpLost?: number;
  timestamp?: Date;
};
