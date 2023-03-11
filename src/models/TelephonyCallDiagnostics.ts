/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyCallDiagnosticSip } from './TelephonyCallDiagnosticSip';
import { TelephonyCallDiagnosticCallQuality } from './TelephonyCallDiagnosticCallQuality';
import { TelephonyCallDiagnosticReporting } from './TelephonyCallDiagnosticReporting';
import { TelephonyCallDiagnosticCdrs } from './TelephonyCallDiagnosticCdrs';
import { TelephonyCallDiagnosticStatusEnum } from './TelephonyCallDiagnosticStatusEnum';

export type TelephonyCallDiagnostics = {
  callQuality: TelephonyCallDiagnosticCallQuality;
  cdrs: TelephonyCallDiagnosticCdrs;
  reporting: TelephonyCallDiagnosticReporting;
  sip: TelephonyCallDiagnosticSip;
  status: TelephonyCallDiagnosticStatusEnum;
};
