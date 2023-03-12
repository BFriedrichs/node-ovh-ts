/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyCallDiagnosticCallQuality } from './TelephonyCallDiagnosticCallQuality';
import { TelephonyCallDiagnosticCdrs } from './TelephonyCallDiagnosticCdrs';
import { TelephonyCallDiagnosticSip } from './TelephonyCallDiagnosticSip';
import { TelephonyCallDiagnosticReporting } from './TelephonyCallDiagnosticReporting';
import { TelephonyCallDiagnosticStatusEnum } from './TelephonyCallDiagnosticStatusEnum';

export type TelephonyCallDiagnostics = {
  callQuality?: TelephonyCallDiagnosticCallQuality[];
  cdrs?: TelephonyCallDiagnosticCdrs[];
  reporting?: TelephonyCallDiagnosticReporting[];
  sip?: TelephonyCallDiagnosticSip[];
  status?: TelephonyCallDiagnosticStatusEnum;
};
