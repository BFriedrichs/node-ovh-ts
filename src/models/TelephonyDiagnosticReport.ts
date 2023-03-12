/* WARNING: This file is auto-generated . Do not edit manually. */

import { TelephonyDiagnosticReportLevelEnum } from './TelephonyDiagnosticReportLevelEnum';
import { TelephonyDiagnosticReportCategoryEnum } from './TelephonyDiagnosticReportCategoryEnum';

export type TelephonyDiagnosticReport = {
  callId: string;
  category: TelephonyDiagnosticReportCategoryEnum;
  datetime: Date;
  description: string;
  level: TelephonyDiagnosticReportLevelEnum;
  name: string;
  report: string;
};
